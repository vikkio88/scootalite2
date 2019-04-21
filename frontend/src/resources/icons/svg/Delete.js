import React from "react";

const SvgDelete = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="deleteIconTitle deleteIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M20 18H9l-6-6 6-6h11zM12.114 10.114l3.772 3.772m-3.772 0l3.772-3.772" />
  </svg>
);

export default SvgDelete;
