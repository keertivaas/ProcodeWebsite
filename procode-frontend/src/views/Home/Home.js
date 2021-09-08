import React from "react";
import "./Home.css";
import ProcodeLogo from "../../img/pcd_logo.jpg";
export const Home = () => {
  return (
    <div className="intro-container py-1">
      <div className="intro-logo">
        <div
          className="logo"
          style={{
            background: `url(${ProcodeLogo}) no-repeat center center/contain`,
            height: "100%",
            width: "50%",
            display: "inline-block",
          }}
        ></div>
        <div className="intro">
          <p>
            We are the Official Tech club of the Department of Information
            Technology, SSNCE.
          </p>
          <p>A platform for students, by students.</p>
        </div>
      </div>
      <div className="intro-text">
        <p className="my-2">
          Our Goal is to pass on the knowledge and experience gained in various
          fields, to those who wish to learn them.
        </p>
        <p className="my-2">
          Why Procode?
          <br />
          We know the struggle in finding the right resources and guidance. The
          club aims to ease that struggle
        </p>
        <p className="my-2">
          What can you get?
          <br />
          Guidance and training on DSA for Placements and Competitive
          Programming. This year we have also added ML, Web and App Development.
        </p>
      </div>
    </div>
  );
};
export default Home;
