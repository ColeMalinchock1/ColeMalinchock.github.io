import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, get, onValue, update } from 'firebase/database';
import './Games.css'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPsOiF5PxlrV6WBfeNGMtwis-KGLdYDPs",
  authDomain: "clicker-game-5a474.firebaseapp.com",
  databaseURL: "https://clicker-game-5a474-default-rtdb.firebaseio.com",
  projectId: "clicker-game-5a474",
  storageBucket: "clicker-game-5a474.firebasestorage.app",
  messagingSenderId: "772384915326",
  appId: "1:772384915326:web:61afde6e97a80e9a41fd2f",
  measurementId: "G-ZZ2DTXCTQZ"
};

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
    <div className="about-page-content max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Clicker Game</h1>
      
      {!user ? (
        <div className="max-w-md mx-auto">
          {!showSignup ? (
            // Login Form
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Login
              </button>
              <button 
                type="button"
                onClick={() => setShowSignup(true)}
                className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 mt-2"
              >
                Need an account? Sign up
              </button>
            </form>
          ) : (
            // Signup Form
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                  type="text"
                  value={signupForm.username}
                  onChange={(e) => setSignupForm({...signupForm, username: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={signupForm.email}
                  onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  value={signupForm.password}
                  onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Sign Up
              </button>
              <button 
                type="button"
                onClick={() => setShowSignup(false)}
                className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 mt-2"
              >
                Back to Login
              </button>
            </form>
          )}
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      ) : (
        <div className="text-center">
          <div className="mb-8">
            <p className="text-xl mb-2">Welcome, {user.username}!</p>
            <p className="text-3xl font-bold mb-4">Your Clicks: {clickCount}</p>
            <button 
              onClick={handleClick}
              className="w-48 h-48 bg-blue-500 rounded-full hover:bg-blue-600 transform transition-transform hover:scale-105 active:scale-95"
            >
              Click Me!
            </button>
          </div>
          
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
            <div className="bg-gray-50 rounded-lg p-4">
                {leaderboard.map((player, index) => (
                <div 
                    key={index}
                    className="flex justify-between items-center py-2 border-b last:border-0"
                >
                    <span className="font-medium">
                    {index + 1}. {player.username || 'Anonymous'}
                    </span>
                    <span>{player.clicks} clicks</span>
                </div>
                ))}
            </div>
          </div>
          
          <button 
            onClick={() => auth.signOut()}
            className="mt-8 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default ClickerGame;
