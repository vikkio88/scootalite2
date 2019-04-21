import React from "react";

const SvgRadio = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="radioIconTitle radioIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5.45 6c-3.267 3.266-3.267 8.734 0 12M8.6 8c-2.133 2.132-2.133 5.868 0 8m9.95 2c3.267-3.266 3.267-8.734 0-12M15.4 16c2.133-2.132 2.133-5.868 0-8" />
    <circle cx={12} cy={12} r={1} />
  </svg>
);

export default SvgRadio;
