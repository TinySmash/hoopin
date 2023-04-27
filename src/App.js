import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />}></Route>
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
