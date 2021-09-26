import React from "react";
import "./Office.css";
import Akar_img from "../../img/akarvin.jpg";
import Harris_img from "../../img/harrison.jpg";
export const Office = () => {
  return (
    <div className="intro-container py-1">
      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${Akar_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="pres">
          <p>
            Akarvin Raja Prajan S A J<br></br>
            President<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>
      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${Harris_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="vpres">
          <p>
            Harrison Vijay J<br></br>
            Vice President<br></br>
            Final Yr IT<br></br>
          </p>
        </div>


      </div>

    </div>
  );
};
export default Office;
