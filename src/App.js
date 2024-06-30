import logo from './logo.svg';
import './App.css';
import Login from './admin/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import Register from './admin/register/Register';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
