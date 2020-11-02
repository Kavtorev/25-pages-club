import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="wrapper__stats">
      <div className="stats">
        <p>
          Summary of pages: <span className="stat"> 2455</span>
        </p>
        <p>
          Books you've read: <span className="stat"> 2455</span>
        </p>
        <p>
          An average of pages a day: <span className="stat"> 2455</span>
        </p>
        <p>
          The longest streak: <span className="stat"> 2455</span>
        </p>
        <p>
          Summary of note: <span className="stat"> 2455</span>
        </p>
      </div>
    </div>
  );
}

export default Stats;
