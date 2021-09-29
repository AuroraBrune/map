import React from 'react';
import AppBar from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './components/pages/home';

import './App.css';

function App() {
  return (
    <div>
        <AppBar />
        <Home />
        <Footer />
    </div>
  );
}

export default App;