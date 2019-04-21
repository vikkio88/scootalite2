import React from "react";

const SvgSun = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="sunIconTitle sunIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <circle cx={12} cy={12} r={4} />
    <path d="M12 5V3m0 18v-2m-7-7H2h3zm17 0h-3 3zm-5.05-4.95L19.07 4.93 16.95 7.05zM4.929 19.071L7.05 16.95 4.93 19.07zm12.02-2.121l2.122 2.121-2.121-2.121zM4.93 4.929L7.05 7.05 4.93 4.93z" />
  </svg>
);

export default SvgSun;
