import "bootstrap/dist/css/bootstrap.min.css";
import NavToggle from "../components/Navigation/NavToggle.jsx";
import TruckSelector from "../components/TruckSelector.jsx";


export default function Home() {
  return (
    <>
    <div className="app">
      <NavToggle />

      <div className="home-body">
        <TruckSelector />

        <div className="about-section"></div>
      </div>

      </div>

    </>
  );
}
