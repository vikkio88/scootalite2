import React from "react";

const SvgNeutralFace = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="neutralFaceIconTitle neutralFaceIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path strokeLinecap="round" d="M9 9h0M15 9h0" />
    <path d="M16 15H8" opacity={0.9} />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgNeutralFace;
