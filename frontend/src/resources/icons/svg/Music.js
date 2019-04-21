import React from "react";

const SvgMusic = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="musicIconTitle musicIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path strokeLinecap="round" d="M8 18V6l12-3v13" />
    <path d="M5.947 20.51c-1.468.535-2.946.175-3.302-.804-.356-.978.545-2.205 2.012-2.739 1.468-.534 2.947-.174 3.303.805.356.978-.545 2.204-2.013 2.738zm12-2c-1.468.535-2.946.175-3.302-.804-.356-.978.545-2.205 2.012-2.739 1.468-.534 2.947-.174 3.303.805.356.978-.545 2.204-2.013 2.738z" />
  </svg>
);

export default SvgMusic;
