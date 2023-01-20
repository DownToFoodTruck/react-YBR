import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserLogin from './Pages/UserLogin';
import VendorLogin from './Pages/VendorLogin';
import Home from './Pages/Home';
import LoginSplash from "./Pages/LoginSplash";
import ForgotPassword from './Pages/ForgotPassword';
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
