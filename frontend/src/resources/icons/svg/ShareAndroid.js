import React from "react";

const SvgShareAndroid = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="shareAndroidIconTitle shareAndroidIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M16 8l-8 3 8-3zm0 8l-8-3 8 3z" />
    <circle cx={6} cy={12} r={2} />
    <circle cx={18} cy={7} r={2} />
    <circle cx={18} cy={17} r={2} />
  </svg>
);

export default SvgShareAndroid;
