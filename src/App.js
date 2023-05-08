import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Hero />}></Route>
          </Routes>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
