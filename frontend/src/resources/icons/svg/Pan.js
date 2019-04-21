import React from "react";

const SvgPan = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="panIconTitle panIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M20 14v3a4 4 0 0 1-4 4h-5.978A4 4 0 0 1 6.8 19.372l-3.456-4.691c-.53-.72-.397-1.73.301-2.29a1.787 1.787 0 0 1 2.381.134L8 14.5V13h.004L8 11l.017-4.5a1.5 1.5 0 1 1 3 0V11 4.5a1.5 1.5 0 0 1 3 0V11 5.5a1.5 1.5 0 0 1 3 0V11 7.5a1.5 1.5 0 0 1 3 0l-.011 6.5H20z" />
  </svg>
);

export default SvgPan;
