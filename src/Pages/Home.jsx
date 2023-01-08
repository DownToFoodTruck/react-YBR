import "bootstrap/dist/css/bootstrap.min.css";
import NavToggle from "../components/Navigation/NavToggle.jsx";
import TruckSelector from "../components/TruckSelector.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
    <div className="app">
      <NavToggle />

      {/* <Header /> */}

      <div className="home-body">
        <TruckSelector />

        <div className="about-section"></div>
      </div>

      </div>

    </>
  );
}
