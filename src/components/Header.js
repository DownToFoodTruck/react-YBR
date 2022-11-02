function Header() {
    return (
    <header>
        <div className="header-contact-button">
          <a href="mailto:hey@downtofoodtruck.com" id="contact">
            <button className="contact-button">
              <img
                src="https://raw.githubusercontent.com/DownToFoodTruck/react-YBR/master/src/Images/email-icon.png?token=GHSAT0AAAAAAB2GZOENP7W3RLC7QHWF54ZOY3B64UA"
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
                src="https://raw.githubusercontent.com/DownToFoodTruck/react-YBR/master/src/Images/instagram-icon.png?token=GHSAT0AAAAAAB2GZOENRM4FHXYJ542R5FP2Y3B65HA"
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
          src="https://raw.githubusercontent.com/DownToFoodTruck/react-YBR/master/src/Images/Logo-Blue-2500x1500.png?token=GHSAT0AAAAAAB2GZOENYR7ZTJA7Y7ZTAHSSY3B652Q"
          className="over-img"
        />
      </header>
)
}

export default Header
