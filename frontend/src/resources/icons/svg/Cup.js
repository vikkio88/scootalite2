import React from "react";

const SvgCup = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="cupIconTitle cupIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6 2h12v9a6 6 0 1 1-12 0V2zm1 19h10M12 17v4M6 5v6H5a3 3 0 1 1 0-6h1zm12 6V5h1a3 3 0 0 1 0 6h-1z" />
  </svg>
);

export default SvgCup;
