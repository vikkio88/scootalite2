import React from "react";

const SvgRestaurant = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="restaurantIconTitle restaurantIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M8 4v16m10-8c-2-.667-3-2-3-4s1-3.333 3-4v16-8zM5 4v3a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V4" />
  </svg>
);

export default SvgRestaurant;
