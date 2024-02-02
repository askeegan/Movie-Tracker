import React from "react";
import "./styles/TitleLogo.css";
import logoImage from "./images/1.png";

const TitleLogo = () => {
  return (
    <div className="title-logo-container">
      <img src={logoImage} alt="Title Logo" className="title-logo-image" />
    </div>
  );
};

export default TitleLogo;
