import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop';
import Competitive from './pages/Competitive';
import About from './pages/About';
import Exec from './pages/Exec';
import Championship from './pages/Championship';
import FAQ from './pages/FAQ'

//fonts
import './fonts/LEMONMILK-Regular.otf';
import './fonts/LEMONMILK-RegularItalic.otf';
import './fonts/LEMONMILK-Light.otf';
import './fonts/LEMONMILK-LightItalic.otf';
import './fonts/LEMONMILK-Medium.otf';
import './fonts/LEMONMILK-MediumItalic.otf';
import './fonts/LEMONMILK-Bold.otf';
import './fonts/LEMONMILK-BoldItalic.otf';


// ReactDOM.render(
//   <React.StrictMode>
//     {/* Edit this part to render a specific page */}
//     <Exec />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/competitive" element={<Competitive />} />
      <Route path="/championship" element={<Championship />} />
      <Route path="/exec" element={<Exec />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/FAQ" element={<FAQ />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);
