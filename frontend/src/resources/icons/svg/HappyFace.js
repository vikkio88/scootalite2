import React from "react";

const SvgHappyFace = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="happyFaceIconTitle happyFaceIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M7.301 14.001C8.073 15.758 9.988 17 12 17c2.002 0 3.913-1.245 4.693-2.994" />
    <path strokeLinecap="round" d="M9 9h0M15 9h0" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgHappyFace;
