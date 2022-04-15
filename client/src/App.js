import React from 'react';
import Landing from './pages/Landing';
import Championship from './pages/Championship';
import About from './pages/About';
import Shop from './pages/Shop';
import Nav from './components/navbar/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div className="router">
      <Router>
        <Nav />
        <Routes>
            <Route path="/" exact element={<Landing/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/championship" element={<Championship/>}/>
            <Route path="/competitive"/>
            <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App