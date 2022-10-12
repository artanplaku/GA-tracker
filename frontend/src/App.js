import './App.css';
import { Routes, Route } from "react-router-dom"
import Register from './Register';
import Login from './Login';
import Home from './Components/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </div>

  );
}

export default App;
