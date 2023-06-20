import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './components/Home/Home';
import Services from './components/Services/ServiceDetails';
import About from './components/About'
import { Footer } from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element= {<Services />} />
            <Route path="/about" element= {<About />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
