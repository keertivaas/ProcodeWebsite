import React from "react";
import "./Edheads.css";
import Adhi_img from "../../img/adhi.jpg";
import Mahima_img from "../../img/mahima.jpg";
import nandana_img from "../../img/nandana.jpg";
import sharan_img from "../../img/sharan.jpg";
export const Edheads = () => {
  return (
    <div className="intro-container py-1">
      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${Adhi_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="event">
          <p>
            Adithya R<br></br>
            Event Head<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>

      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${Mahima_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="event">
          <p>
            Mahima<br></br>
            Event Head<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>

      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${nandana_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="event">
          <p>
            Nandana Srinivasan<br></br>
            Event Head<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>

      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${sharan_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="design">
          <p>
            Krithik Sharan<br></br>
            Marketing and Design Head<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>


    </div>
  );
};
export default Edheads;
