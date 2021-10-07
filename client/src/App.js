import React, { useEffect, useState } from 'react';
import AppBar from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './components/pages/home';
import largeImage from './components/assets/chicago-large.jpg';
import cellImage from './components/assets/chicago-small.jpg';
import Modal from "./components/Modal";

import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? largeImage : cellImage;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [disable, setDisable] = React.useState(false);

  React.useEffect(() => {
    if (modalIsOpen) {
      setDisable(true);
    } else {
      setDisable(false)
    }
  }, [modalIsOpen]);

  return (
    <div>
      <div className="App"
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <div>
          <AppBar />
          <Home />
          <button id="openModBtn" disabled={disable} type="button" className="openModalBtn" onClick={() => { setModalIsOpen(true); setDisable(true) }} >Open Map</button>
          {modalIsOpen && <Modal closeModal={setModalIsOpen} />}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;