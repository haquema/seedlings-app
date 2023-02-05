// import logo from './logo.svg';
import './App.css';
import Signup from './components/signUp';
import Login from './components/Login';
import { useNavigate, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import FeedPage from './pages/FeedPage';
import PlantPage from './pages/PlantPage';
import Identification from './pages/PlantIdPage';
import GardenPage from './pages/gardenPage';

function App() {
  return (
    <>
<Navbar />
      <div>
        <Routes>
          <Route path="/signup" element={<Signup navigate={useNavigate()} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<FeedPage />} />
          <Route path="/" element={<FeedPage />} />
          <Route path="/plants/:id" element={<PlantPage />} />
          <Route path="/garden/:id" element={<GardenPage />} />
          <Route path="/identification" element={<Identification />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
