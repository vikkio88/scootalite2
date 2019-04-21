import React from "react";

const SvgBookmark = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="bookmarkIconTitle bookmarkIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M17 6.659v12.927l-5-3.178-5 3.178V6.659C7 5.19 8.12 4 9.5 4h5C15.88 4 17 5.19 17 6.659z" />
  </svg>
);

export default SvgBookmark;
