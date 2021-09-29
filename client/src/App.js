import React from 'react';
import AppBar from './components/Header/index';
import Footer from './components/Footer/index';
import Main from './components/pages/main';

import './App.css';

function App() {
  return (
    <div>
        <AppBar />
        <Main />
        <Footer />
    </div>
  );
}

export default App;