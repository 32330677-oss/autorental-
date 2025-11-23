import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Cars from './components/Cars';
import Login from './components/Login';
import CarDetails from './components/CarDetails';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cars" element={<Cars />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/CarDetails/:id" element={<CarDetails />}/>

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;