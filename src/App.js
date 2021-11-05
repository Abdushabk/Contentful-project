import React from 'react';
import './App.css';
import NavbarTop from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home/Home';


function App() {
  return (
    <>
      <NavbarTop/>
      <Home/>
    </>
  );
}

export default App;
