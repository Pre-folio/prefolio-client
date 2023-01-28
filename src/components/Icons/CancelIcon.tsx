import React from 'react';

export function CancelIcon({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> | undefined }) {
  return (
    <button
      style={{
        padding: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClick}
    >
      <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_806_53)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8334 4.33335L10.6667 3.16668L6.00002 7.83335L1.33334 3.16666L0.166668 4.33333L4.83335 9.00001L0.166666 13.6667L1.33333 14.8334L6.00002 10.1667L10.6667 14.8333L11.8334 13.6667L7.16669 9.00001L11.8334 4.33335Z"
            fill="#646D7A"
          />
        </g>
        <defs>
          <clipPath id="clip0_806_53">
            <rect width="12" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
