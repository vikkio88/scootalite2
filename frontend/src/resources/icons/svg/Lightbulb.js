import React from "react";

const SvgLightbulb = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="lightBulbIconTitle lightBulbIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M16 12c-.667.667-1 2-1 4v1H9v-1c0-2-.333-3.333-1-4-2.326-2.326-2.586-5.9-.243-8.243a6 6 0 0 1 8.486 0C18.586 6.101 18.407 9.593 16 12zm-6 9h4" />
  </svg>
);

export default SvgLightbulb;
