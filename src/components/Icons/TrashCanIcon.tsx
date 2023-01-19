import React from 'react';

interface TrashCanIconProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function TrashCanIcon({ onClick }: TrashCanIconProps) {
  return (
    <button onClick={onClick}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.287 24.3751H7.71363C7.18599 24.3758 6.67822 24.1739 6.29517 23.811C5.91213 23.4481 5.68307 22.952 5.6553 22.4251L4.72363 5.76343H21.277L20.3453 22.4251C20.3175 22.952 20.0885 23.4481 19.7054 23.811C19.3224 24.1739 18.8146 24.3758 18.287 24.3751Z"
          stroke="#646D7A"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path d="M2.6543 5.76343H23.346" stroke="#646D7A" strokeWidth="2" strokeMiterlimit="10" />
        <path
          d="M10.9305 1.625H15.0688C15.6176 1.625 16.1439 1.843 16.5319 2.23104C16.92 2.61909 17.138 3.14539 17.138 3.69417V5.76333H8.86133V3.69417C8.86133 3.14539 9.07933 2.61909 9.46737 2.23104C9.85542 1.843 10.3817 1.625 10.9305 1.625V1.625Z"
          stroke="#646D7A"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path d="M13 8.86157V21.2766" stroke="#646D7A" strokeWidth="2" strokeMiterlimit="10" />
        <path d="M17.1387 8.86157V21.2766" stroke="#646D7A" strokeWidth="2" strokeMiterlimit="10" />
        <path d="M8.86133 8.86157V21.2766" stroke="#646D7A" strokeWidth="2" strokeMiterlimit="10" />
      </svg>
    </button>
  );
}
