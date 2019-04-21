import React from "react";

const SvgRedo = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="redoIconTitle redoIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M16 15h5v-5M19 13C14 8 6.425 8.725 3 14" />
    <path strokeLinecap="round" d="M21 15l-2-2" />
  </svg>
);

export default SvgRedo;
