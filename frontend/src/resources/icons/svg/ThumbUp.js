import React from "react";

const SvgThumbUp = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="thumbUpIconTitle thumbUpIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M8 8.74a2 2 0 0 1 .481-1.302l4.791-5.59A1.432 1.432 0 0 1 15 1.5c.574.287.85.952.646 1.56L14 8h4.604a2 2 0 0 1 1.967 2.358l-1.272 7A2 2 0 0 1 17.33 19H10a2 2 0 0 1-2-2V8.74zM4 18V9" />
  </svg>
);

export default SvgThumbUp;
