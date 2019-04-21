import React from "react";

const SvgEnvelopeAlt = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="envelopeAltIconTitle envelopeAltIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M2 5h20v14H2z" />
    <path strokeLinecap="round" d="M2 5l10 9 10-9" />
  </svg>
);

export default SvgEnvelopeAlt;
