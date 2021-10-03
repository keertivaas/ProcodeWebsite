import React from "react";
import InstaSVG from "../../img/instagram-brands.svg";
export const InstagramIcon = ({ color, height, width }) => {
  return (
    <svg className="insta-icon" fill={color} height={height} width={width}>
      <use xlinkHref={`${InstaSVG}#insta`} />
    </svg>
  );
};
export default InstagramIcon;
