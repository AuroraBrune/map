import React, { useEffect, useState } from 'react';
import AppBar from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './components/pages/home';
import largeImage from './components/assets/chicago-large.jpg';
import cellImage from './components/assets/chicago-small.jpg';
import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? largeImage : cellImage;
  //sets the width for background image sized for responsive ui
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
     window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  return (
    <div>
      <div className="App"
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <div>
          <AppBar />
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;