import React from "react";
import "./Office.css";
import Akar_img from "../../img/akarvin.jpg";
import Harris_img from "../../img/harrison.jpg";
export const Office = () => {
  return (
    <div className="container-fluid py-3">
      <div className="row mb-5">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <div
            className="image"
            style={{
              height: "25vh",
              width: "25vh",
            }}
          >
            <img src={Akar_img} style={{ width: "100%", height: "100%" }} alt="Akarvin Image"/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <div className="info">
            <p>Akarvin Raja Prajan</p>
            <p>President</p>
            <p>Final Year IT</p>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <div
            className="image"
            style={{
              height: "25vh",
              width: "25vh",
            }}
          >
            <img src={Harris_img} style={{ width: "100%", height: "100%" }} alt="Harrison Image"/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <div className="info">
            <p>Harrison Vijay</p>
            <p>Vice President</p>
            <p>Final Yr IT</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Office;
