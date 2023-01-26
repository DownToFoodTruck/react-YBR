import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import UserRegister from './UserRegister';


export default function UserLogin() {

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
        
        {/* <!--   Log in modal --> */}
        <div id="log-in-overlay">
          <div id="log-in-modal">
              
            <h3 className='blue'>
              Need a Food Truck?<br />
              Find Some Food!
            </h3>
        
            <div className="col-center">
              
              <form action="/login" method="post"> {/* Necessary for functionality */}
                <input id="email-input" 
                        name="email" 
                        placeholder="Email"/>

                <br /> <p></p>

                <input id="password-input" 
                        name="password"
                        placeholder="Password"/>
                <input id="checkbox" 
                        type ="checkbox" 
                        onClick = {toggleHidePass} 
                        className = "checked" /> <br />
                
                <p><Link to="/ForgotPassword">Forgot Password?</Link></p>

                <button id="log-in">Log In</button>
              </form> {/* Necessary for functionality */}

              <button id="close-modal-li">Back</button>
            </div>  
          </div>
        </div>
          {/* <!--  end Log in modal --> */}
          
          {/* <!--   Sign Up modal --> */}
        <div id="sign-up-overlay">
          <div id="sign-up-modal">
            
            <h3>Sign Up</h3>
        
            <div className="col-center">
              <form action="/users" method="post">
                <input id="sign-up-email-input" 
                      name="email"
                      placeholder="Email"/>
            <br /> <p></p>
                <input id="sign-up-password-input" 
                      name="password" 
                      placeholder="Password"/>
                <input id="checkbox" 
                      type ="checkbox"
                      onClick = {toggleHidePassSignUp}
                      className = "checked" />
                <br />
                  <p>
                    
                  </p>
                <button id="submit">Submit</button>
              </form>
                <button id="close-modal-su">Back</button>
            </div>
          </div>
        </div>
        {/* <!--  end Sign Up modal --> */}

        
      {/* <!-- Log In / Sign Up / Guest Buttons --> */}
        <div className="container-box">
            
              <div className="col-center">
                <div className="user-logo"></div><br />
                <button id="log-in-button">Log In</button><br />
              <button id="sign-up-button">Sign Up</button><br />
              <Link to="/"><button id="guest">Guest</button></Link>
            </div>

        </div>
      {/* <!-- end Log In / Sign Up / Guest Buttons --> */}
      </div>


    </div>
  );

}