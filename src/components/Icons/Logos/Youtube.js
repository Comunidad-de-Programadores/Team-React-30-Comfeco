import * as React from 'react';

function SvgComponent() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M19.869 5.812c0-1.758-1.293-3.172-2.89-3.172-2.165-.1-4.372-.14-6.627-.14h-.704c-2.25 0-4.46.04-6.625.14C1.43 2.64.137 4.063.137 5.82A58.11 58.11 0 000 9.992c-.004 1.39.04 2.782.133 4.176 0 1.757 1.293 3.183 2.887 3.183 2.273.106 4.605.152 6.976.149 2.375.007 4.7-.042 6.977-.149 1.597 0 2.89-1.426 2.89-3.183.094-1.395.137-2.786.133-4.18a56.793 56.793 0 00-.127-4.176zM8.086 13.824V6.148l5.664 3.836-5.664 3.84z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgComponent;
