import React from 'react';
// import Navbar from "./Navbar"
import Navbar from './components/Navbar';
import { useNavigate, Routes, Route } from 'react-router-dom';
// import "./App.css"
import FeedPage from './pages/FeedPage';

const App = () => {
  return (
    <>
      <div>
        <FeedPage />
        {/* <Navbar /> */}
        {/* <Routes>
          <Route path="/" element={<Peeps navigate={useNavigate()} />} />
        </Routes> */}
      </div>
    </>
  );
};

export default App;
