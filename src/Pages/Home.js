import React, { useState } from "react";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import AboutModal from "../components/AboutModal.js";
import CustomDropdown from "../components/Dropdown.js";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Header />

      <div className="home-body">
        <div className="about-section">
          <button className="about-btn" onClick={() => setShow(true)}>
            About
          </button>
          <AboutModal onClose={() => setShow(false)} show={show} />
        </div>
        <div className="select-section">
          <button className="select-btn" onClick={() => setShow(true)}>
            Select
          </button>
          <CustomDropdown />
        </div>
      </div>

      <Footer />
    </>

    //<helmet>
    // <link
    //   rel="shortcut icon"
    //   href="/home/will/Development/Website/YBR/React/react-YBR/src/Home/Img/favicon2.png"
    //   type="img/png"
    // />
    // <meta charset="utf-8" />
    // <meta name="viewport" content="width=device-width" />
    // <title>DTFT</title>
    // <link href="style.css" rel="stylesheet" type="text/css" />
    // <link
    //   href="https://fonts.googleapis.com/css2?family=Baloo&display=swap"
    //   rel="stylesheet"
    // >
    //   <link
    //     rel="stylesheet"
    //     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    //   ></link>
    // </link>
    //   <helmet>
    //     <body>
    //     <header>
    //     <div className="header-contact-button">
    //   <a href="mailto:hey@downtofoodtruck.com" id="contact">
    //     <button className="contact-button">
    //       <img
    //         src={
    //           "/home/will/Development/Website/YBR/React/react-YBR/src/Home/Images/email-icon.png"
    //         }
    //         alt="Contact"
    //       />
    //     </button>
    //   </a>
    // </div>
    // <div className="header-follow-button">
    //   <a
    //     href="https://www.instagram.com/downtofoodtruck/"
    //     id="follow"
    //     target="_blank"
    //   >
    //     <button className="contact-button">
    //       <img
    //         src={
    //           "/home/will/Development/Website/YBR/React/react-YBR/src/Home/Images/instagram-icon.png"
    //         }
    //         alt="Instagram"
    //       />
    //     </button>
    //   </a>
    // </div>
    // <div className="top-right">
    //   <button
    //     className="home-page"
    //     // onclick="window.location.href='home.html'"
    //   >
    //     LOGIN
    //   </button>
    // </div><img
    //     src={"/home/will/Development/Website/YBR/React/react-YBR/src/Home/Images/Logo-Blue-2500x1500.png"}
    //     className="over-img" /></>
    //     {/* </header> */}
    //     <div id="page-container">
    //       <div id="content-wrapper">
    //         {/* <!-- <p className="instructions">Are you Down To Food Truck?</p>
    //           <p className="instructions">Select a food category to get started!</p> --> */}
    //         <div id="container-message">
    //           <span id="text1"></span>
    //           <span id="text2"></span>
    //         </div>
    //         <svg id="filters">
    //           <defs>
    //             <filter id="threshold">
    //               <feColorMatrix
    //                 in="SourceGraphic"
    //                 type="matrix"
    //                 values="1 0 0 0 0
    //                     0 1 0 0 0
    //                     0 0 1 0 0
    //                     0 0 0 255 -140"
    //               />
    //             </filter>
    //           </defs>
    //         </svg>
    //         <div id="input-box">
    //           {/* <!--     <input type="text" id="input"></input>
    //               <select name="truck-drop" id="truck-drop"></select> --> */}
    //           <select name="tab" id="tab-drop">
    //             <option value="" defaultValue={""}>
    //               Select All
    //             </option>
    //           </select>
    //           {/* <!-- <select onchange="select-truck" = select.options[select.selectedIndex].value;"> -->
    //            <!-- <select id="tab-drop-2" name="tab">
    //               <option value="" default selected disabled hidden>Pick some stuff</option>
    //               <option value="">"Pick 1"</option>
    //               <option value="">"Pick 2"</option> --> */}
    //           {/* <link href="index.css" rel="stylesheet" /> */}
    //           <button id="select-truck">SELECT</button>
    //         </div>
    //         <div id="button-box">
    //           <button id="remove">CLEAR SELECTION</button>
    //         </div>
    //         <div id="truck-category"></div>
    //         <div id="truck-box"></div>
    //         <div id="overlay">
    //           {/* <!-- Start overlay --> */}
    //           <div id="modal">
    //             {/* <!-- Start modal --> */}
    //             <div id="modal-button-right">
    //               <button id="close-modal">Close</button>
    //             </div>
    //             <div id="content"></div>
    //           </div>
    //           {/* <!-- Close Modal --> */}
    //         </div>
    //         {/* <!-- Close Overlay --> */}
    //       </div>
    //       {/* <!-- Close content-wrapper --> */}
    //     </div>
    //     {/* <!-- Close page-container --> */}
    // </helmet>
    // </helmet>
    // /* <style>iframe {width:100%;height:100%;}</style> */
  );
}
