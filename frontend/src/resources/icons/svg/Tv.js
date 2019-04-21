import React from "react";

const SvgTv = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="tvIconTitle tvIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M20 8v12H4V8z" />
    <path strokeLinejoin="round" d="M8 4l4 3.917L16 4" />
  </svg>
);

export default SvgTv;
