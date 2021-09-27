import React from "react";
import "./Edheads.css";
import Adhi_img from "../../img/adhi.jpg";
import Mahima_img from "../../img/mahima.jpg";
import nandana_img from "../../img/nandana.jpg";
import sharan_img from "../../img/sharan.jpg";
export const Edheads = () => {
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
            <img src={Adhi_img} style={{ width: "100%", height: "100%" }} alt="Adithya Image"/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <div className="info">
            <p>Adithya R.</p>
            <p>Event Head</p>
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
            <img src={Mahima_img} style={{ width: "100%", height: "100%" }} alt="Mahima Image"/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <div className="info">
            <p>Mahima</p>
            <p>Event Head</p>
            <p>Final Yr IT</p>
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
            <img src={nandana_img} style={{ width: "100%", height: "100%" }} alt="Nandana Image"/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <div className="info">
            <p>Nandana Srinivasan</p>
            <p>Event Head</p>
            <p>Final Yr IT</p>
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
            <img src={sharan_img} style={{ width: "100%", height: "100%" }} alt="Sharan Image"/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <div className="info">
            <p>Krithik Sharan</p>
            <p>Marketing &amp; Design Head</p>
            <p>Final Yr IT</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Edheads;
