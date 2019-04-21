import React from "react";

const SvgDashboard = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="dashboardIconTitle dashboardIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M2 2h20v20H2zM11 7h6m-6 5h6m-6 5h6M7 7h0M7 12h0M7 17h0" />
  </svg>
);

export default SvgDashboard;
