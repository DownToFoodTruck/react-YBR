import logo from "./logo.svg";
import "./About.css";

function AboutModal() {
  return (
    <>
      <h2>About Yellow Brick Road</h2>
      <p className="ybr-paragraph">
        The four members of YBR met when they all enrolled in a Full Stack Web
        Development course through the{" "}
        <a
          href="https://www.innovationoutpost.com/"
          style={{ color: "white" }}
          target="_blank"
        >
          Amarillo College Innovation Outpost{" "}
        </a>
        .
      </p>
      <h3>View more work from our team members!</h3>
      <div className="team-members">
        <div>
          <button className="view-map">
            <a
              href="https://github.com/timothymoney"
              target="_blank"
              className="modal-link"
            >
              Timothy
            </a>
          </button>
        </div>
        <div>
          <button className="view-map">
            <a
              href="https://github.com/McCall-Money"
              target="_blank"
              className="modal-link"
            >
              McCall
            </a>
          </button>
        </div>
        <div>
          <button className="view-map">
            <a
              href="https://github.com/KillytheBid"
              target="_blank"
              className="modal-link"
            >
              Will
            </a>
          </button>
        </div>
        <div>
          <button className="view-map">
            <a
              href="https://github.com/jmbutts"
              target="_blank"
              className="modal-link"
            >
              John
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutModal;
