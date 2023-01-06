import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserLogin from './Pages/UserLogin.js';
import VendorLogin from './Pages/VendorLogin.js';
import Home from './Pages/Home.js';
import LoginSplash from "./Pages/LoginSplash.js";
import ForgotPassword from './Pages/ForgotPassword.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/LoginSplash" element = {<LoginSplash />} /> 
        <Route path = "/UserLogin" element = {<UserLogin />} />
        <Route path = "/VendorLogin" element = {<VendorLogin />} />
        <Route path = "/ForgotPassword" element = {<ForgotPassword />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;