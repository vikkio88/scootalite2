import React from "react";

const SvgChat = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="chatIconTitle chatIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M8.824 18.588L4 21l.653-4.573C3.006 15.001 2 13.095 2 11c0-4.418 4.477-8 10-8s10 3.582 10 8-4.477 8-10 8c-1.11 0-2.178-.145-3.176-.412z" />
  </svg>
);

export default SvgChat;
