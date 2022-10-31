function Header() {
    return (
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
)
}

export default Header
