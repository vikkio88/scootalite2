import React from "react";

const SvgAperture = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="apertureIconTitle apertureIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path
      strokeLinecap="round"
      d="M3 16h11M4.036 6.206l5.647 9.78m3.353-13.78l-5.57 9.648m3.498 9.94l5.65-9.787m3.35 5.787l-5.64-9.768M21 8H10"
    />
  </svg>
);

export default SvgAperture;
