import React from "react";

const SvgCreditCard = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="creditCardIconTitle creditCardIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <rect width={20} height={14} x={2} y={5} rx={2} />
    <path d="M2 14h20" />
  </svg>
);

export default SvgCreditCard;
