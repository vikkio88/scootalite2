import React from "react";

const SvgDownload = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="downloadIconTitle downloadIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M12 3v13M7 12l5 5 5-5M20 21H4" />
  </svg>
);

export default SvgDownload;
