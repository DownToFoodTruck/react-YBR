function Footer() {
    return (

    <><h2
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
                            className="ybr-image" />
                        <br />
                    </div>
                </div>
            </div></>

)
}

export default Footer