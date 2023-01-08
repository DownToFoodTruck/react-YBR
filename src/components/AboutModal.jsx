import React from 'react'

const AboutModal = props => {
    if (!props.show) {
      return null
    }

  return (
    <>

    <div className="about-modal" onClick={props.onClose}>
      <div className="about-content" onClick={event => event.stopPropagation()}>

      <button className='about-modal-close-btn' onClick={props.onClose}>
        X
      </button>

        <h2 className="about-title">
          About Yellow Brick Road
        </h2>
        
          <p className="about-body">
            We are all super smart and really, really, ridiculously good looking
          </p>

        <h3>View more work from our team members!</h3>

      <div className="about-team-members">
        <div>
          <button className="about-git-btn">
            <a
              href="https://github.com/timothymoney"
              target="_blank"
              className="about-link">
              Timothy
            </a>
          </button>
        </div>

        <div>
          <button className="about-git-btn">
            <a
              href="https://github.com/McCall-Money"
              target="_blank"
              className="about-link">
              McCall
            </a>
          </button>
        </div>

        <div>
          <button className="about-git-btn">
            <a
              href="https://github.com/KillytheBid"
              target="_blank"
              className="about-link">
              Will
            </a>
          </button>
        </div>

        <div>
          <button className="about-git-btn">
            <a
              href="https://github.com/krshinn"
              target="_blank"
              className="about-link">
              Karl
            </a>
          </button>
        </div>
      </div>

      </div>
    </div>

    </>
  );
}

export default AboutModal;
