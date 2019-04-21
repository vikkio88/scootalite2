import React from "react";

const SvgDrop = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="dropIconTitle dropIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M12 21c3.314 0 6-2.61 6-6 0-3.333-2-7-6-11-4 4-6 7.667-6 11 0 3.39 2.686 6 6 6z" />
  </svg>
);

export default SvgDrop;
