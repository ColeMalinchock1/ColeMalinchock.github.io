import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Publications from './components/Publications/Publications';
import Games from './components/Games/Games';
import ContactForm from './components/ContactForm/ContactForm';

function Welcome() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  // Effect to handle initial visibility when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Short delay to ensure CSS transition works
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`welcome-banner ${isVisible ? 'visible' : ''}`} 
      ref={bannerRef}
    >
      <h1>Welcome to my website!</h1>
      <p>Look around and learn some more about me!</p>
    </div>
  );
}

function Home() {
  const images = Array.from({length: 10}, (_, i) => 
    require(`./images/main_image-${i+1}.jpg`)
  );
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
    <div className="hero-container">
      <img src={images[currentImage]} alt="Rotating" className="App-image" />
      <Welcome />
    </div>
    <ContactForm />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="nav-menu">
          <div className="name">Cole Malinchock</div>
          <div className="nav-links">
            <Link to="/">Main</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/games">Games</Link>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications/>}/>
          <Route path="/games" element={<Games />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;