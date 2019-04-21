import React from "react";

const SvgWatch = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="watchIconTitle watchIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path
      strokeLinecap="round"
      d="M10 7.758V2h5v5.758M15 15.242V22h-5v-6.758"
    />
    <circle cx={12.5} cy={11.5} r={4.5} />
  </svg>
);

export default SvgWatch;
