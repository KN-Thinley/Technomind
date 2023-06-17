import React from "react";

const Timeline = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic"
        rel="stylesheet"
      />

      <ul className="timeline">
        {/* Item 1 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Startup Construction</span>
              <span className="time-wrapper">
                <span className="time">20XX</span>
              </span>
            </div>
            <div className="desc">
              This wonderful organization was constructed!
            </div>
          </div>
        </li>

        {/* Item 2 */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">First Hackathon.</span>
              <span className="time-wrapper">
                <span className="time">2020 - 2020</span>
              </span>
            </div>
            <div className="desc">
              First Ever Hackathon Held! It was a grand success!
            </div>
          </div>
        </li>

        {/* Item 3 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Second Hackathon</span>
              <span className="time-wrapper">
                <span className="time">20XX </span>
              </span>
            </div>
            <div className="desc">Startup's Second Hackathon Announcment!</div>
          </div>
        </li>

        {/* Item 4 */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">Third Hackathon.</span>
              <span className="time-wrapper">
                <span className="time">20XX</span>
              </span>
            </div>
            <div className="desc">Third Hackathon Challenge Commenced!</div>
          </div>
        </li>

        {/* Item 5 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Current Hackathon</span>
              <span className="time-wrapper">
                <span className="time">2023 - Now</span>
              </span>
            </div>
            <div className="desc">Hackathon is being held currently...</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
