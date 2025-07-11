import React from "react";

const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M10.28 2.292H4.792a.833.833 0 0 0-.834.833v13.75c0 .46.373.833.834.833h10.416c.46 0 .834-.373.834-.833V8.054a.83.83 0 0 0-.244-.59l-4.929-4.928a.83.83 0 0 0-.59-.244ZM7.292 11.042h2.916m-2.916 3.333h5.416"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M10.625 2.708v4.167c0 .46.373.833.833.833h4.167"
    ></path>
  </svg>
);

export default FileTextIcon;
