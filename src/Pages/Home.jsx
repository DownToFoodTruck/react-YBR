import "bootstrap/dist/css/bootstrap.min.css";
import NavToggle from "../components/Navigation/NavToggle.jsx";
import TruckSelector from "../components/TruckSelector.jsx";
import Footer from "../components/Footer.jsx";
import Map from './Map';

export default function Home() {
  return (
    <>
    <div className="app">
      <NavToggle />

      <div className="home-body">
        <TruckSelector />
        <Map />
        <div className="about-section">

        </div>
      </div>

      </div>

    </>
  );
}
