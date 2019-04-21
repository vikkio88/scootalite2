import React from "react";

const SvgUmbrella = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="umbrellaIconTitle umbrellaIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M22 11c0-4.97-4.477-9-10-9S2 6.03 2 11h20zM17 19v.5a2.5 2.5 0 1 1-5 0V12" />
    <path strokeLinecap="butt" d="M12 12v-1" />
  </svg>
);

export default SvgUmbrella;
