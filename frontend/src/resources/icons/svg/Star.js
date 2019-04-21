import React from "react";

const SvgStar = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="starIconTitle starIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M12 17.844l-5.817 3.058 1.111-6.477-4.706-4.587 6.504-.945L12 3l2.908 5.893 6.504.945-4.706 4.587 1.111 6.477z" />
  </svg>
);

export default SvgStar;
