// import logo from "./logo.svg";
import "/home/will/Development/Website/YBR/React/react-YBR/src/Pages/Home/Home.css";

function Home() {
  return (
    <helmet>
      {/* <link
        rel="shortcut icon"
        href="/home/will/Development/Website/YBR/React/react-YBR/src/Home/Img/favicon2.png"
        type="img/png"
      />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>DTFT</title>
      <link href="style.css" rel="stylesheet" type="text/css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo&display=swap"
        rel="stylesheet"
      >
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </link> */}
      <helmet>
        {/* <body> */}
        {/* <header> */}
        <div className="header-contact-button">
          <a href="mailto:hey@downtofoodtruck.com" id="contact">
            <button className="contact-button">
              <img
                src={
                  "/home/will/Development/Website/YBR/React/react-YBR/src/Home/Images/email-icon.png"
                }
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
                src={
                  "/home/will/Development/Website/YBR/React/react-YBR/src/Home/Images/instagram-icon.png"
                }
                alt="Instagram"
              />
            </button>
          </a>
        </div>
        <div className="top-right">
          <button
            className="home-page"
            // onclick="window.location.href='home.html'"
          >
            LOGIN
          </button>
        </div>
        <img
          src={
            "/home/will/Development/Website/YBR/React/react-YBR/src/Home/Images/Logo-Blue-2500x1500.png"
          }
          className="over-img"
        />
        {/* </header> */}
        <div id="page-container">
          <div id="content-wrapper">
            {/* <!-- <p className="instructions">Are you Down To Food Truck?</p> 
              <p className="instructions">Select a food category to get started!</p> --> */}
            <div id="container-message">
              <span id="text1"></span>
              <span id="text2"></span>
            </div>
            <svg id="filters">
              <defs>
                <filter id="threshold">
                  <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 255 -140"
                  />
                </filter>
              </defs>
            </svg>
            <div id="input-box">
              {/* <!--     <input type="text" id="input"></input>   
                  <select name="truck-drop" id="truck-drop"></select> --> */}
              <select name="tab" id="tab-drop">
                <option value="" defaultValue={""}>
                  Select All
                </option>
              </select>
              {/* <!-- <select onchange="select-truck" = select.options[select.selectedIndex].value;"> -->
               <!-- <select id="tab-drop-2" name="tab">
                  <option value="" default selected disabled hidden>Pick some stuff</option>
                  <option value="">"Pick 1"</option>
                  <option value="">"Pick 2"</option> --> */}

              {/* <link href="index.css" rel="stylesheet" /> */}
              <button id="select-truck">SELECT</button>
            </div>
            <div id="button-box">
              <button id="remove">CLEAR SELECTION</button>
            </div>
            <div id="truck-category"></div>
            <div id="truck-box"></div>
            <div id="overlay">
              {/* <!-- Start overlay --> */}
              <div id="modal">
                {/* <!-- Start modal --> */}
                <div id="modal-button-right">
                  <button id="close-modal">Close</button>
                </div>
                <div id="content"></div>
              </div>
              {/* <!-- Close Modal --> */}
            </div>
            {/* <!-- Close Overlay --> */}
          </div>
          {/* <!-- Close content-wrapper --> */}
        </div>
        {/* <!-- Close page-container --> */}
        <footer>
          <h2
            id="scrolling-text"
            className="mobile"
            data-text="Yellow&nbsp;Brick&nbsp;Road"
          >
            Yellow Brick Road
          </h2>
          <h2
            id="scrolling-text"
            className="desktop"
            data-text="A&nbsp;Yellow&nbsp;Brick&nbsp;Road&nbsp;Collaboration"
          >
            A Yellow Brick Road Collaboration
          </h2>
          <div className="footer-top-right">
            <div className="about-us-button">
              <button className="about-us" id="open-modal-2">
                ABOUT YBR
              </button>
            </div>
            <div id="overlay-2">
              <div id="modal-2">
                <div id="modal-2-button-right">
                  <button id="close-modal-2">Close</button>
                </div>
                <img
                  src={
                    "/home/will/Development/Website/YBR/React/react-YBR/src/Home/Images/YBR-Group.png"
                  }
                  alt="YBR Group"
                  className="ybr-image"
                />
                {/* ABOUT */}
                {/* <div>
                  <h2>About Yellow Brick Road</h2>
                  <p className="ybr-paragraph">
                    The four members of YBR met when they all enrolled in a Full
                    Stack Web Development course through the{" "}
                    <a
                      href="https://www.innovationoutpost.com/"
                      // style="color: white"
                      target="_blank"
                    />
                  </p>
                  <h3>View more work from our team members!</h3>
                  <div className="team-members">
                    <div>
                      <button className="view-map">
                        <a
                          href="https://github.com/timothymoney"
                          target="_blank"
                          className="modal-link"
                        />
                      </button>
                    </div>
                    <div>
                      <button className="view-map">
                        <a
                          href="https://github.com/McCall-Money"
                          target="_blank"
                          className="modal-link"
                        />
                      </button>
                    </div>
                    <div>
                      <button className="view-map">
                        <a
                          href="https://github.com/KillytheBid"
                          target="_blank"
                          className="modal-link"
                        />
                      </button>
                    </div>
                    <div>
                      <button className="view-map">
                        <a
                          href="https://github.com/jmbutts"
                          target="_blank"
                          className="modal-link"
                        />
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </footer>
      </helmet>
    </helmet>
    // /* <style>iframe {width:100%;height:100%;}</style> */
  );
}

export default Home;
