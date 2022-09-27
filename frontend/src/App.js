import './App.css';
import { Routes, Route } from "react-router-dom"
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/application" element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
