import React from "react";

const SvgRss = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="rssIconTitle rssIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path strokeLinecap="round" d="M6 18h0" />
    <path d="M10 18a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8m12 8c0-6.627-5.373-12-12-12" />
  </svg>
);

export default SvgRss;
