import React from "react";
import "./Core.css";
import koushika_img from "../../img/koushika.jpg";
import abhaya_img from "../../img/abhaya.jpg";
import ajay_img from "../../img/ajay.jpg";
import obed_img from "../../img/obed.jpg";
import michael_img from "../../img/michael.jpg";
import maddy_img from "../../img/maddy.jpg";
export const Core = () => {
  return (
    <div>
      <br />
      <h1 align="center"> CORE TEAM MEMBERS </h1> <br />
      <div class="parallax">
        {" "}
        <br />
        <div align="center" class=" box_for_core_members">
          <div className="row mb-5">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <div
                className="image"
                style={{
                  height: "40vh",
                  width: "40vh",
                  margin: "20px",
                }}
              >
                <img
                  src={koushika_img}
                  style={{ width: "100%", height: "100%" }}
                  alt="Koushika Image"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex align-items-center">
              <div className="info">
                <p>Koushika Padmanaban</p>
                <p>Core Team Member</p>
                <p>Final Year IT</p>
              </div>
            </div>
          </div>
        </div>
        <div align="center" class=" box_for_core_members">
          <div className="row mb-5">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <div
                className="image"
                style={{
                  height: "40vh",
                  width: "40vh",
                  margin: "20px",
                }}
              >
                <img
                  src={abhaya_img}
                  style={{ width: "100%", height: "100%" }}
                  alt="Abhaya Image"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex align-items-center">
              <div className="info">
                <p>Jajula Abhaya Chetna</p>
                <p>Core Team Member</p>
                <p>Final Year IT</p>
              </div>
            </div>
          </div>
        </div>
        <div align="center" class=" box_for_core_members">
          <div className="row mb-5">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <div
                className="image"
                style={{
                  height: "40vh",
                  width: "40vh",
                  margin: "20px",
                }}
              >
                <img
                  src={ajay_img}
                  style={{ width: "100%", height: "100%" }}
                  alt="Ajay Image"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex align-items-center">
              <div className="info">
                <p>Ajay R</p>
                <p>Core Team Member</p>
                <p>Final Year IT</p>
              </div>
            </div>
          </div>
        </div>
        <div align="center" class=" box_for_core_members">
          <div className="row mb-5">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <div
                className="image"
                style={{
                  height: "40vh",
                  width: "40vh",
                  margin: "20px",
                }}
              >
                <img
                  src={obed_img}
                  style={{ width: "100%", height: "100%" }}
                  alt="Obed Image"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex align-items-center">
              <div className="info">
                <p>Obed Immanuel</p>
                <p>Core Team Member</p>
                <p>Final Year IT</p>
              </div>
            </div>
          </div>
        </div>
        <div align="center" class=" box_for_core_members">
          <div className="row mb-5">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <div
                className="image"
                style={{
                  height: "40vh",
                  width: "40vh",
                  margin: "20px",
                }}
              >
                <img
                  src={michael_img}
                  style={{ width: "100%", height: "100%" }}
                  alt="Michael Image"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex align-items-center">
              <div className="info">
                <p>Michael Suguna Kumar</p>
                <p>Core Team Member</p>
                <p>Final Year IT</p>
              </div>
            </div>
          </div>
        </div>
        <div align="center" class=" box_for_core_members">
          <div className="row mb-5">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <div
                className="image"
                style={{
                  height: "40vh",
                  width: "40vh",
                  margin: "20px",
                }}
              >
                <img
                  src={maddy_img}
                  style={{ width: "100%", height: "100%" }}
                  alt="Madhavan Image"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex align-items-center">
              <div className="info">
                <p>Madhavan V</p>
                <p>Core Team Member</p>
                <p>Final Year IT</p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};
export default Core;
