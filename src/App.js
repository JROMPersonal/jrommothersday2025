import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import CarliePage from './components/CarliePage';
import SarahPage from './components/SarahPage';
import KelliePage from './components/KelliePage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/kellie" element={<KelliePage />} />
        <Route path="/carlie" element={<CarliePage />} />
        <Route path="/sarah" element={<SarahPage />} />
      </Routes>
    </Router>
  );
}

export default App;
