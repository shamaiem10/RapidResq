import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './components/LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';   // <-- added

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />   {/* <-- LOGIN ROUTE */}
      </Routes>
    </Router>
  );
}

export default App;
