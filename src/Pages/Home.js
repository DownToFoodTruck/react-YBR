import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  

import NavToggle from '../components/Navigation/NavToggle.js';
import Selector from '../components/Selector.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import AboutModal from '../components/AboutModal.js';

export default function Home() {
  const [show, setShow] = useState(false)

  return (
    <>
      
      <NavToggle />

      <Header />

      <div className='home-body'>

      <Selector />

        <div className='about-section'>
          <button className='about-btn' onClick={ () => setShow(true) }>About</button>
          <AboutModal onClose={() => setShow(false)} show={show} />
        </div>
      </div>

      <Footer />
    </>
  );
}