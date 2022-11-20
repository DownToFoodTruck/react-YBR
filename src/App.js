import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Pages/Login.js';
import Home from './Pages/Home.js';
import ForgotPassword from './Pages/ForgotPassword.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/Login" element = {<Login />} />
        <Route path = "/ForgotPassword" element = {<ForgotPassword />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;