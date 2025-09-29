import React from "react";
import "./CarIcon.scss";

const CarIcon = () => {
  return (
    <svg
      className="car-icon"
      viewBox="0 0 64 64"
      role="img"
      aria-label="Front-facing car"
    >
      {/* Car body */}
      <rect x="10" y="18" width="44" height="18" rx="4" className="car-body" />
      {/* Windshield */}
      <rect x="20" y="10" width="24" height="12" rx="3" className="windshield" />
      {/* Grille */}
      <rect x="26" y="30" width="12" height="4" rx="1" className="grille" />
      {/* Headlights */}
      <circle cx="12" cy="27" r="3" className="headlight" />
      <circle cx="52" cy="27" r="3" className="headlight" />
      {/* Wheels */}
      <ellipse cx="20" cy="44" rx="6" ry="4" className="wheel" />
      <ellipse cx="44" cy="44" rx="6" ry="4" className="wheel" />
    </svg>
  );
};

export default CarIcon;
