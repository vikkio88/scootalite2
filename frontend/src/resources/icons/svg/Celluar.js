import React from "react";

const SvgCelluar = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="celluarIconTitle celluarIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M18 7v11m-4-8v8m-4-5v5m-4-2v2" />
  </svg>
);

export default SvgCelluar;
