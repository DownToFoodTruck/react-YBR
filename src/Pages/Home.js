import "bootstrap/dist/css/bootstrap.min.css";
import NavToggle from "../components/Navigation/NavToggle.js";
import Selector from "../components/Selector.js";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <>
      <NavToggle />

      {/* <Header /> */}

      <div className="home-body">
        <Selector />

        <div className="about-section"></div>
      </div>

      <Footer />
    </>
  );
}
