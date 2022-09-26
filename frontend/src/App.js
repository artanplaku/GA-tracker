import './App.css';
import { Routes, Route} from "react-router-dom"
import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
   <div>
    <Routes>
      <Route path = "/" element={<Register/>}/>
      <Route path = "/login" element={<Login/>}/>
    </Routes>
    </div>
   
  );
}

export default App;
