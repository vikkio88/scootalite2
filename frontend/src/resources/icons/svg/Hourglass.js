import React from "react";

const SvgHourglass = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="hourglassIconTitle hourglassIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M16.765 7.821V5a2 2 0 0 0-2-2h-5.53a2 2 0 0 0-2 2v2.821L11.415 12l-4.18 4.179V19a2 2 0 0 0 2 2h5.53a2 2 0 0 0 2-2v-2.821L12.585 12l4.18-4.179z" />
  </svg>
);

export default SvgHourglass;
