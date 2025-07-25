import React, { useState } from "react";
import { expData } from "./Exp";

function ExpCard() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="exp-card-list">
      {expData.map((data, idx) => (
        <div
          className={`details card-details${hoveredIdx === idx ? " active" : ""}`}
          key={idx}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <div className={`display${hoveredIdx === idx ? "" : " active"}`}>
            <div className="inner display-container">
              <div className="icon card-icon">
                <h2>{data.company} - {data.position}</h2>
              </div>

              <div className="text card-text">
                <h3>{data.location}</h3>
                <h5>{data.timePeriod}</h5>
                <h5>{data.modeAttended}</h5>
                <p>{data.description}</p>
                <h4 className="card-count">
                  {String(idx + 1).padStart(2, "0")}
                </h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpCard;