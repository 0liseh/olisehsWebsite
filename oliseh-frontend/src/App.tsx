import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Resume } from './pages/Resume';
import { ContactInfo } from './pages/ContactInfo';
import { MeVisualized } from './pages/MeVisualized';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contactinfo" element={<ContactInfo />}/>
        <Route path="/Images" element={<MeVisualized />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
