import "bootstrap/dist/css/bootstrap.min.css";
import NavToggle from "../components/Navigation/NavToggle.js";
import TruckSelector from "../components/TruckSelector.js";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <>
      <NavToggle />

      <div className="home-body">
        <TruckSelector />

        <div className="about-section">

        </div>
      </div>

      <Footer />
    </>
  );
}
