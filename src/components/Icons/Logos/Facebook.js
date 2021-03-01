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
      <path
        d="M18.75 10.053a8.75 8.75 0 10-10.117 8.644v-6.114H6.41v-2.53h2.222V8.125c0-2.193 1.306-3.405 3.305-3.405.957 0 1.959.171 1.959.171v2.154h-1.104c-1.086 0-1.426.674-1.426 1.367v1.64h2.426l-.387 2.53h-2.039v6.116a8.752 8.752 0 007.383-8.645z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
