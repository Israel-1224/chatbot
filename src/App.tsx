import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Screens/home/Home';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
    

    </Routes>
  </HashRouter>
  );
}

export default App;
