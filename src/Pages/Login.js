import Home from './Home';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';


export default function Login() {
  {/* JS start here */}

  // hide login password 
  function toggleHidePass(){
    let x = document.getElementById("password-input")
    if (x.type === "password") {
  x.type = "text";
  } else {
  x.type = "password";
  }
  }

  // hide signup password
  function toggleHidePassSignUp() { 
    let x = document.getElementById("sign-up-password-input")
    if (x.type === "password") {
  x.type = "text";
  } else {
  x.type = "password";
  }
  }

useEffect(() => {
  document.getElementById("log-in-button").addEventListener("click", function() {
    document.getElementById("log-in-overlay").style.display= "block"
  })

  document.getElementById("close-modal-li").addEventListener("click", function() {
    document.getElementById("log-in-overlay").style.display= "none"
  })


  document.getElementById("sign-up-button").addEventListener("click", function() {
    document.getElementById("sign-up-overlay").style.display= "block"
  })

  document.getElementById("close-modal-su").addEventListener("click", function() {
    document.getElementById("sign-up-overlay").style.display= "none"
  })
}, [])


  return (
    <div>

      <div className="login-body"> 
        
        {/* <!--   Log in modal begins here --> */}
        <div id="log-in-overlay">
          <div id="log-in-modal">
              
            <h3>Log in information</h3>
        
            <div className="col-center">
              <form action="/login" method="post">
                <input id="email-input" 
                        name="email" 
                        placeholder="Email"/>
                <br />
                <input id="password-input" 
                        name="password"
                        placeholder="Password"/>
                <input id="checkbox" 
                        type ="checkbox" 
                        onClick = {toggleHidePass} 
                        className = "checked" />
                <br />
                <button id="log-in">Log In</button>
              </form><button id="close-modal-li">Back</button>
            </div>  
          </div>
        </div>
          {/* <!--  Log in modal ends here --> */}
          
          {/* <!--   Sign Up modal begins here --> */}
        <div id="sign-up-overlay">
          <div id="sign-up-modal">
            
            <h3>Sign Up</h3>
        
            <div className="col-center">
              <form action="/users" method="post">
                <input id="sign-up-email-input" 
                      name="email"
                      placeholder="Email"/>
            <br />
                <input id="sign-up-password-input" 
                      name="password" 
                      placeholder="Password"/>
                <input id="checkbox" 
                      type ="checkbox"
                      onClick = {toggleHidePass}
                      className = "checked" />
                <br />
                <button id="submit">Submit</button>
              </form>
                <button id="close-modal-su">Back</button>
            </div>
          </div>
        </div>
        {/* <!--  Sign Up modal ends here --> */}

        
      {/* <!-- Log In / Sign Up / Guest Buttons begin here --> */}
        <div className="container-box">
            
              <div className="col-center">
                <div className="logo"></div><br />
                <button id="log-in-button">Log In</button><br />
              <button id="sign-up-button">Sign Up</button><br />
              <Link to="/Home"><button id="guest">Guest</button></Link>
            </div>

        </div>
      {/* <!-- Log In / Sign Up / Guest Buttons end here --> */}
      </div>


    </div>
  )

};