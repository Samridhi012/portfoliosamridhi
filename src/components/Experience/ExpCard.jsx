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
                <h3>{data.company} - {data.position}</h3>
                {/* <img src={data.logo} alt="icon" /> */}
              </div>

              <div className="text card-text">
                <h1>{data.location}</h1>
                <h5>{data.timePeriod}</h5>
                <h5>{data.modeAttended}</h5>
                <p>{data.description}</p>
                <h6 className="card-count">
                  {String(idx + 1).padStart(2, "0")}
                </h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpCard;