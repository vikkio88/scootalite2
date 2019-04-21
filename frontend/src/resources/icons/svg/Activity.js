import React from "react";

const SvgActivity = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="activityIconTitle activityIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M21 14h-3l-3-7-5 10-3-6-2 3H3" />
  </svg>
);

export default SvgActivity;
