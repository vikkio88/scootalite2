import React from "react";

const SvgCards = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="cardsIconTitle cardsIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M3 3h13v13H3z" />
    <path d="M16 8h5v13H8v-5" />
  </svg>
);

export default SvgCards;
