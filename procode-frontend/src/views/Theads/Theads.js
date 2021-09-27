import React from "react";
import "./Theads.css";
import Abk_img from "../../img/abk.jpg";
import Jayesh_img from "../../img/jayesh.jpg";
import Badri_img from "../../img/badri.jpg";
import Sk_img from "../../img/Keertivaas.jpg";
import Sabesh_img from "../../img/sabesh.jpg";
export const Theads = () => {
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
            <img src={Abk_img} style={{ width: "100%", height: "100%" }} alt="Aadhithya Image"/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <div className="info">
            <p>Aadhithya B. Kailash</p>
            <p>Tech Head</p>
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
            <img src={Jayesh_img} style={{ width: "100%", height: "100%" }} alt="Jayesh Image"/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <div className="info">
            <p>Jayesh L</p>
            <p>D.S.A. Head</p>
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
            <img src={Badri_img} style={{ width: "100%", height: "100%" }} alt="Badri Image"/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <div className="info">
            <p>M Badri Narayanan</p>
            <p>M.L. Head</p>
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
            <img src={Sk_img} style={{ width: "100%", height: "100%" }} alt="Keertivaas Image"/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <div className="info">
            <p>Keertivaas S</p>
            <p>Web Development Head</p>
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
            <img src={Sabesh_img} style={{ width: "100%", height: "100%" }} alt="Sabesh Image"/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <div className="info">
            <p>Sabesh Bharathi</p>
            <p>App Development Head</p>
            <p>Third Year IT</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Theads;
