// import logo from './logo.svg';
import "./App.css";
import Signup from "./components/signUp";
import Login from "./components/Login";
import { useNavigate, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup navigate={useNavigate()} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
