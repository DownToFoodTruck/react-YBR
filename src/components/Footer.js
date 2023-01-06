import React, {useState} from 'react';
import AboutModal from '../components/AboutModal.js';

function Footer() {

    const [show, setShow] = useState(false)

  return (
    <>
    <footer>

        <div className='footer-container'>
            <button className='about-btn' onClick={ () => setShow(true) }>About</button>
            <AboutModal onClose={() => setShow(false)} show={show} />
        </div>


        <div className='footer-container'>
        <h2
            id="scrolling-text"
            className="mobile"
            data-text="Yellow Brick Road">
            Yellow Brick Road
        </h2>

        <h2
            id="scrolling-text"
            className="desktop"
            data-text="A Yellow Brick Road Collaboration">
            A Yellow Brick Road Collaboration
        </h2>
        </div>
    </footer>       
     </>

)
}

export default Footer;
