import React from "react";

const SvgEnvelope = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="envelopeIconTitle envelopeIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M2 5h20v14H2z" />
    <path
      strokeLinecap="round"
      d="M2 5l10 9 10-9M2 19l6.825-7.8M22 19l-6.844-7.822"
    />
  </svg>
);

export default SvgEnvelope;
