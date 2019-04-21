import React from "react";

const SvgFile = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="fileIconTitle fileIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path strokeLinecap="round" d="M13 3v6h6" />
    <path d="M13 3l6 6v12H5V3z" />
  </svg>
);

export default SvgFile;
