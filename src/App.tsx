import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Signup } from './pages/signup';
import { Home } from './pages/home';
import { Navbar } from './components/Navbar/Navbar';
import About from './pages/About';
import Store from './pages/Store';
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/store" element={<Store/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
