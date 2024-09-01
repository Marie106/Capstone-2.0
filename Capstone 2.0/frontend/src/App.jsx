import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FamiliesPage from './pages/FamiliesPage';
import WomenPage from './pages/WomenPage';
import CouplesPage from './pages/CouplesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/families" element={<FamiliesPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/couples" element={<CouplesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
