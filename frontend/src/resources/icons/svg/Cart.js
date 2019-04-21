import React from "react";

const SvgCart = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="cartIconTitle cartIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6 6h15l-1.5 9h-12z" />
    <circle cx={9} cy={19} r={1} />
    <circle cx={18} cy={19} r={1} />
    <path d="M6 6H3" />
  </svg>
);

export default SvgCart;
