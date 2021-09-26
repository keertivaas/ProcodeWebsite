import React from "react";
import "./Theads.css";
import Abk_img from "../../img/abk.jpg";
import Jayesh_img from "../../img/jayesh.jpg";
import Badri_img from "../../img/badri.jpg";
import Sk_img from "../../img/Keertivaas.jpg";
import Sabesh_img from "../../img/sabesh.jpg";
export const Theads = () => {
  return (
    <div className="intro-container py-1">
      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${Abk_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="tech">
          <p>
            Aadhithya B. Kailash<br></br>
            Tech Head<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>

      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${Jayesh_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="dsa">
          <p>
            Jayesh L<br></br>
            DSA Head<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>

      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${Badri_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="ml">
          <p>
            M Badri Narayanan<br></br>
            ML Head<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>

      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${Sk_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="web">
          <p>
            Keertivaas S<br></br>
            Web Development Head<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>

      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${Sabesh_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="app">
          <p>
            Sabesh Bharathi<br></br>
            App Development Head<br></br>
            Third Yr IT<br></br>
          </p>
        </div>
      </div>

    </div>
  );
};
export default Theads;
