import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import About from './components/About';
import Projects from './components/Projects';  // Changed from Academic
import Games from './components/Games';        // Changed from Personal
import ContactForm from './components/ContactForm';

function Welcome() {
  return (
    <div className="welcome-section">
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
    <img src={images[currentImage]} alt="Rotating" className="App-image" />
    <Welcome />
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
            <Link to="/projects">Projects</Link>  {/* Changed from /academic */}
            <Link to="/games">Games</Link>       {/* Changed from /personal */}
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />  {/* Changed from Academic */}
          <Route path="/games" element={<Games />} />        {/* Changed from Personal */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
