import React from "react";
import { InstagramIcon } from "../InstagramIcon";
import "./footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="py-3 pb-1 d-flex justify-content-between">
          <div className="done-by flex-grow-1">
            <ul className="row w-100">
              <li className="col-md-6">
                <a href="https://www.linkedin.com/in/keertivaas-sankaranarayanan-a6517218a/">
                  Keertivaas S
                </a>
              </li>
              <li className="col-md-6 text-justify">
                <a href="https://www.linkedin.com/in/sriram-narayanan-189903192/">
                  Sriram Na
                </a>
              </li>
              <li className="col-md-6">
                <a href="https://www.linkedin.com/in/aadhithya-b-kailash-195b115b/">
                  Aadhithya B Kailash
                </a>
              </li>
              <li className="col-md-6">
                <a href="https://www.linkedin.com/in/anni-priscilla-a-ba0952215/">
                  Anni Priscilla
                </a>
              </li>
              <li className="col-md-6">
                <a>Arun Pradeep</a>
              </li>
            </ul>
          </div>
          <div className="social flex-grow-1">
            <div className="insta">
              <a
                href="https://www.instagram.com/procode_it_ssn/"
                className="d-inline-block"
              >
                {/* color not working */}
                <InstagramIcon height={40} width={40} color="grey" />
                <p style={{ fontSize: "0.65rem", marginRight: "0.5rem" }}>
                  Instagram
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
