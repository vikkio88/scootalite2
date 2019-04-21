import React from "react";

const SvgBolt = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="boltIconTitle boltIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5 14l8-11v7h5l-8 11v-7z" />
  </svg>
);

export default SvgBolt;
