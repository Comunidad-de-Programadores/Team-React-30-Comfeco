import * as React from 'react';

function SvgComponent() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <title>Chevron Up</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M112 328l144-144 144 144"
      />
    </svg>
  );
}

export default SvgComponent;
