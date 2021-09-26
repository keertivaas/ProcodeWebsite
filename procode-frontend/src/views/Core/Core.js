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
    <div className="intro-container py-1">
      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${koushika_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="core">
          <p>
            Koushika Padmanaban<br></br>
            Core Team Member<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>

      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${abhaya_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="core">
          <p>
            Jajula Abhaya Chetna<br></br>
            Core Team Member<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>

      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${ajay_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="core">
          <p>
            Ajay R<br></br>
            Core Team Member<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>

      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${obed_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="core">
          <p>
            Obed Immanuel<br></br>
            Core Team Member<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>

      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${michael_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="core">
          <p>
            Michael Suguna Kumar<br></br>
            Core Team Member<br></br>
            Final Yr IT<br></br>
          </p>
        </div>
      </div>
      <br></br>

      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${maddy_img}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="core">
          <p>
            Madhavan V<br></br>
            Core Team Member<br></br>
            Final Yr IT<br></br>
          </p>
        </div>

      </div>

    </div>
  );
};
export default Core;
