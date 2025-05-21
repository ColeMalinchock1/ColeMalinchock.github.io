import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, get, onValue, update } from 'firebase/database';
import './ClickerGame.css';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Add validation to ensure environment variables are loaded
if (!process.env.REACT_APP_FIREBASE_API_KEY) {
  console.error('Firebase configuration is missing. Make sure environment variables are properly set.');
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

function ClickerGame() {
  const [user, setUser] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ email: '', password: '', username: '' });
  const [showSignup, setShowSignup] = useState(false);
  const [error, setError] = useState('');

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Get user data including username
        get(ref(db, `users/${user.uid}`)).then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUser({ ...user, username: userData.username });
            setClickCount(userData.clicks || 0);
          }
        });
      } else {
        setUser(null);
        setClickCount(0);
      }
    });
  
    return () => unsubscribe();
  }, []);

  // Listen to leaderboard changes
  useEffect(() => {
    const leaderboardRef = ref(db, 'users');
    const unsubscribe = onValue(leaderboardRef, (snapshot) => {
      const users = snapshot.val();
      if (users) {
        const leaderboardData = Object.values(users)
          .sort((a, b) => b.clicks - a.clicks)
          .slice(0, 10);
        setLeaderboard(leaderboardData);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleClick = async () => {
    if (!user) return;
    
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    // Update in Firebase
    await update(ref(db, `users/${user.uid}`), {
      clicks: newCount
    });
  };

  // Update the handleSignup function to properly store username
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        signupForm.email, 
        signupForm.password
      );
      
      // Create user profile in database with username
      await set(ref(db, `users/${userCredential.user.uid}`), {
        username: signupForm.username, // Make sure this is stored
        clicks: 0,
        email: signupForm.email
      });
      
      setError('');
      setShowSignup(false);
    } catch (error) {
      setError('Signup failed: ' + error.message);
    }
  };
  
  // Update the handleLogin function to fetch username
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password);
      
      // Get the user's data including username
      const userSnapshot = await get(ref(db, `users/${userCredential.user.uid}`));
      if (userSnapshot.exists()) {
        const userData = userSnapshot.val();
        setUser({ ...userCredential.user, username: userData.username });
      }
      
      setError('');
    } catch (error) {
      console.error("Login error:", error);
      setError('Login failed: ' + error.message);
    }
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Clicker Game</h1>
      
      {!user ? (
        <div className="auth-container">
          {!showSignup ? (
            // Login Form
            <form onSubmit={handleLogin} className="form">
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  className="form-input"
                />
              </div>
              <button 
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
              <button 
                type="button"
                onClick={() => setShowSignup(true)}
                className="btn btn-secondary"
              >
                Need an account? Sign up
              </button>
            </form>
          ) : (
            // Signup Form
            <form onSubmit={handleSignup} className="form">
              <div className="form-group">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  value={signupForm.username}
                  onChange={(e) => setSignupForm({...signupForm, username: e.target.value})}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  value={signupForm.email}
                  onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  value={signupForm.password}
                  onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                  className="form-input"
                />
              </div>
              <button 
                type="submit"
                className="btn btn-primary"
              >
                Sign Up
              </button>
              <button 
                type="button"
                onClick={() => setShowSignup(false)}
                className="btn btn-secondary"
              >
                Back to Login
              </button>
            </form>
          )}
          {error && <p className="error-message">{error}</p>}
        </div>
      ) : (
        <div className="game-area">
          <div className="user-section">
            <p className="welcome-message">Welcome, {user.username}!</p>
            <p className="click-count">Your Clicks: {clickCount}</p>
            <button 
              onClick={handleClick}
              className="click-button"
            >
              Click Me!
            </button>
          </div>
          
          <div className="leaderboard-container">
            <h2 className="leaderboard-title">Leaderboard</h2>
            <div className="leaderboard">
              {leaderboard.map((player, index) => (
                <div 
                  key={index}
                  className="leaderboard-item"
                >
                  <span className="player-name">
                    {index + 1}. {player.username || 'Anonymous'}
                  </span>
                  <span className="player-score">{player.clicks} clicks</span>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => auth.signOut()}
            className="btn btn-logout"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default ClickerGame;