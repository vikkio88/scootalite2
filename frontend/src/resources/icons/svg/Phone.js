import React from "react";

const SvgPhone = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="phoneIconTitle phoneIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path
      strokeLinecap="round"
      d="M12.74 18.404l3.158-3.157 5.217 3.638-1.17 1.17a3 3 0 0 1-2.98.754c-3.23-.965-6.13-2.734-8.703-5.306C5.689 12.93 3.92 10.03 2.956 6.8a3 3 0 0 1 .753-2.98l1.17-1.17 3.639 5.217-3.157 3.157"
    />
  </svg>
);

export default SvgPhone;
