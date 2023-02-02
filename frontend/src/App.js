// import logo from './logo.svg';
import './App.css';
import Signup from './components/signUp';
import Login from './components/Login';
import { useNavigate, Routes, Route } from 'react-router-dom';
import React from 'react';
// import Navbar from './components/Navbar';
import FeedPage from './pages/FeedPage';
import PlantPage from './pages/PlantPage';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup navigate={useNavigate()} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<FeedPage />} />
          <Route path="/plants/:id" element={<PlantPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
