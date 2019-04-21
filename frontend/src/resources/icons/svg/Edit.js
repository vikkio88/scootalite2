import React from "react";

const SvgEdit = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="editIconTitle editIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M18.414 4.414l1.172 1.172a2 2 0 0 1 0 2.828L8 20H4v-4L15.586 4.414a2 2 0 0 1 2.828 0zM14 6l4 4" />
  </svg>
);

export default SvgEdit;
