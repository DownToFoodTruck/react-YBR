// import logo from "./logo.svg";
// import "/home/will/Development/Website/YBR/React/react-YBR/src/Pages/Login/Login.css";

function Login() {
  return (
    <>
      <header>
        <div className="header-contact-button">
          <a href="mailto:hey@downtofoodtruck.com" id="contact">
            <button className="contact-button">
              <img
                src="/home/will/Development/Website/YBR/React/react-YBR/src/Home//home/will/Development/Website/YBR/React/react-YBR/src/Images/email-icon.png"
                alt="Contact"
              />
            </button>
          </a>
        </div>
        <div className="header-follow-button">
          <a
            href="https://www.instagram.com/downtofoodtruck/"
            id="follow"
            target="_blank"
          >
            <button className="contact-button">
              <img
                src="/home/will/Development/Website/YBR/React/react-YBR/src/Images/instagram-icon.png"
                alt="Instagram"
              />
            </button>
          </a>
        </div>
        <div className="top-right desktop">
          <button className="guest" onclick="window.location.href='index.html'">
            Continue As Guest
          </button>
        </div>
        <img
          src="/home/will/Development/Website/YBR/React/react-YBR/src/Images/Logo-Blue-2500x1500.png"
          className="over-img"
        />
      </header>
      <div className="mobile wiggle">
        <button className="guest" onclick="window.location.href='index.html'">
          Continue As Guest
        </button>
      </div>
      <div id="page-container">
        <div id="content-wrapper">
          <section id="dock">
            <div className="left-card">
              <div className="title">Customers</div>
              <div className="customer">
                <p style={{ color: "#004aad" }} className="left-title">
                  Need A Food Truck?
                  <br />
                  Find Some Food!
                </p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <p style={{ color: "red", display: "none" }} id="passFail">
                  Enter Valid Email Address
                </p>
                <a href="#" id="forgot">
                  Forgot Password?
                </a>
                <button className="Home" id="Home">
                  Home
                </button>
                <button className="create-account">Create Account</button>
              </div>
            </div>
            <div className="right-card">
              <div className="title">Vendors</div>
              <div className="vendor">
                <p style={{ color: "#004aad" }} className="right-title">
                  Have A Food Truck?
                  <br />
                  Sell Some Food!
                </p>
                <input
                  type="email"
                  id="email2"
                  name="email"
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <p style={{ color: "red", display: "none" }} id="passFail2">
                  Enter Valid Email Address
                </p>
                <a href="#" id="forgot">
                  Forgot Password?
                </a>
                <button className="Home2" id="Home2">
                  Home
                </button>
                <button className="create-account">Create Account</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer>
        <h2
          id="scrolling-text"
          className="mobile"
          data-text="Yellow Brick Road"
        >
          Yellow Brick Road
        </h2>
        <h2
          id="scrolling-text"
          className="desktop"
          data-text="A Yellow Brick Road Collaboration"
        >
          A Yellow Brick Road Collaboration
        </h2>
        <div className="footer-top-right">
          <div className="about-us-button">
            <button className="about-us" id="open-modal">
              ABOUT YBR
            </button>
          </div>
          <div id="overlay">
            <div id="modal">
              <div id="modal-button-right">
                <button id="close-modal">Close</button>
              </div>
              <img
                src="/home/will/Development/Website/YBR/React/react-YBR/src/Images/YBR-Group.png"
                alt="YBR Group"
                className="ybr-image"
              />
              <br />
              {/* <div>
              <h2>About Yellow Brick Road</h2>
              <p class="ybr-paragraph">The four members of YBR met when they all enrolled in a Full Stack Web Development course through the <a href="https://www.innovationoutpost.com/" style="color: white" target="_blank">Amarillo College Innovation Outpost </a>.</p>
              <h3>View more work from our team members!</h3>
              <div class="team-members">
              <div><button class="view-map">
                <a href="https://github.com/timothymoney"" target="_blank" class="modal-link">Timothy</a>
                </button>
              </div>
              <div><button class="view-map">
                <a href="https://github.com/McCall-Money"" target="_blank" class="modal-link">McCall</a>
                </button>
              </div>
              <div><button class="view-map">
                <a href="https://github.com/KillytheBid"" target="_blank" class="modal-link">Will</a>
                </button>
              </div>
              <div><button class="view-map">
                <a href="https://github.com/jmbutts"" target="_blank" class="modal-link">John</a>
                </button>
              </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Login;
