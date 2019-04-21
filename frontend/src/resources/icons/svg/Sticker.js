import React from "react";

const SvgSticker = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="stickerIconTitle stickerIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M21 3v8c0 5.523-4.477 10-10 10H3V3h18z" />
    <path d="M9 21c2.667 0 4-1.333 4-4v-4h4c2.667 0 4-1.333 4-4" />
  </svg>
);

export default SvgSticker;
