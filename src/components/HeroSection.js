import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted className="bg-video">
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <h1>Welcome to Our Website</h1>
    </div>
  );
};

export default HeroSection;
