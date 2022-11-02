function Header() {
  return (
    <header>
      <div className="header-contact-button">
        <a href="mailto:hey@downtofoodtruck.com" id="contact">
          <button className="contact-button">
            <img
              src="https://github.com/DownToFoodTruck/react-YBR/blob/7c94bd4a752c603ba394b17f32a0a46be30a86c2/src/Images/email-icon.png"
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
              src="https://github.com/DownToFoodTruck/react-YBR/blob/7c94bd4a752c603ba394b17f32a0a46be30a86c2/src/Images/instagram-icon.png"
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
        src="https://github.com/DownToFoodTruck/react-YBR/blob/7c94bd4a752c603ba394b17f32a0a46be30a86c2/src/Images/Logo-Blue-2500x1500.png"
        className="over-img"
      />
    </header>
  );
}

export default Header;
