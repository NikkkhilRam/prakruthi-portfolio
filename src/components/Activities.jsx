import React from "react";
import ag from "../assets/activityImage.png";
import vg from "../assets/award.png";

const Activities = () => {
  return (
    <div className="main-activity">
      <div className="activity-title">
        <h1>Extra Curricular Activites</h1>
      </div>
      <div className="activity">
        <div className="image">
          <img src={ag} alt="" />{" "}
        </div>
        <div className="activity-content">
          <ul>
            <li>
              {" "}
              Member of IEEE, active participant of IEEE EMBS MSRIT Chapter
            </li>
            <li>
              {" "}
              Winner of Pro-Kabaddi Women’s category, inter-department division,
              2022-2023
            </li>
            <li>
              Volunteer at I Love to care (India) Charitable Trusts, working on
              helping farmers and cleaning reserved forest areas to spread
              awareness and protect nature, assisting in engaging kids at
              orphanages
            </li>
            <li>Part of the contemporary dance team LASYA at MSRIT</li>
            <li>Part of DEBSOC, Debating society at MSRIT</li>
            <li>
              Bharatanatyam junior and Carnatic vocal junior certified from
              KSEEB
            </li>
          </ul>
          <div className="award">
            <div className="award-title">
              <h1>Best Outgoing Student of 2019-2023 (MSRIT)</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
