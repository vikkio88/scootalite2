import React from "react";

const SvgSignalAlt = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="signalIconTitle signalIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path strokeLinecap="round" d="M12 13h0" />
    <path d="M20.182 19C21.405 17.376 22 15.435 22 13.353 22 7.634 17.523 3 12 3S2 7.634 2 13.353c0 2.052.578 3.966 1.818 5.647" />
    <path d="M16 16c.702-.812 1-1.782 1-3 0-2.683-2.239-5-5-5s-5 2.317-5 5c0 1.203.289 2.16 1 3" />
  </svg>
);

export default SvgSignalAlt;
