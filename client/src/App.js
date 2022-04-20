import React from 'react';
import Landing from './pages/Landing';
import Championship from './pages/Championship';
import About from './pages/About';
import Shop from './pages/Shop';
import Nav from './components/navbar/Nav'
import Footer from './components/Footer'
import Exec from './pages/Exec'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div className="router">
      <Nav/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App