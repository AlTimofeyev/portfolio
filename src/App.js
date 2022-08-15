import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/projects' element={<Projects />} /> */}
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
