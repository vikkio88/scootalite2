import React from "react";

const SvgInbox = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="inboxIconTitle inboxIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path strokeLinecap="round" d="M3 10h6v3h6v-3h6" />
    <path d="M3 10l3-6h13l2 6v10H3z" />
  </svg>
);

export default SvgInbox;
