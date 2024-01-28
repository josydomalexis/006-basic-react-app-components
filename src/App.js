import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { CastleContext, ThemeContext } from './index.js';
import Nav from "./Nav.jsx"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
