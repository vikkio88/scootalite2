import React from "react";

const SvgFilm = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="filmIconTitle filmIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path strokeLinecap="round" d="M16 10.087l5-1.578v7.997l-4.998-1.578" />
    <path d="M16 7H3v11h13z" />
  </svg>
);

export default SvgFilm;
