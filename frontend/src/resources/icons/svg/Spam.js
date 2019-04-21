import React from "react";

const SvgSpam = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="spamIconTitle spamIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M16 3l5 5v8l-5 5H8l-5-5V8l5-5zM12 8v5M12 16h0" />
  </svg>
);

export default SvgSpam;
