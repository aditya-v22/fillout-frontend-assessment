import React from "react";

const ThreeDotIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 3.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 14.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8 3.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 14.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334"
    ></path>
  </svg>
);

export default ThreeDotIcon;
