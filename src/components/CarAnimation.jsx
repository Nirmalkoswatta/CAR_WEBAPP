import React from 'react';

const CarAnimation = () => (
  <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Car body */}
    <rect x="40" y="60" width="140" height="32" rx="12" fill="#1de9b6" stroke="#111" strokeWidth="2"/>
    {/* Car roof */}
    <rect x="80" y="40" width="60" height="24" rx="8" fill="#fff" stroke="#111" strokeWidth="2"/>
    {/* Left wheel */}
    <g>
      <circle cx="60" cy="100" r="16" fill="#222" />
      <circle cx="60" cy="100" r="8" fill="#bfe9ff" />
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 60 100" to="360 60 100" dur="1.2s" repeatCount="indefinite"/>
    </g>
    {/* Right wheel */}
    <g>
      <circle cx="160" cy="100" r="16" fill="#222" />
      <circle cx="160" cy="100" r="8" fill="#bfe9ff" />
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 160 100" to="360 160 100" dur="1.2s" repeatCount="indefinite"/>
    </g>
    {/* Wrench (animated) */}
    <g>
      <rect x="110" y="30" width="28" height="6" rx="3" fill="#ffd24d" stroke="#111" strokeWidth="1.5">
        <animateTransform attributeName="transform" type="rotate" from="-20 124 33" to="20 124 33" dur="1.2s" repeatCount="indefinite"/>
      </rect>
      <circle cx="138" cy="33" r="4" fill="#fffbe6" stroke="#111" strokeWidth="1.5"/>
    </g>
  </svg>
);

export default CarAnimation;
