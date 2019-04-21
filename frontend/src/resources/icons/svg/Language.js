import React from "react";

const SvgLanguage = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="languageIconTitle languageIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path
      strokeLinecap="round"
      d="M12 22c2.667-2.424 4-5.758 4-10s-1.333-7.576-4-10C9.333 4.424 8 7.758 8 12s1.333 7.576 4 10zM2.5 9h19m-19 6h19"
    />
  </svg>
);

export default SvgLanguage;
