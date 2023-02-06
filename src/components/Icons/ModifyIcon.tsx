interface ModifyIconProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function ModifyIcon({ onClick }: ModifyIconProps) {
  return (
    <button onClick={onClick}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.52967 21.0543L4 22L4.94763 17.4793L18.6314 3.74714C18.8688 3.50966 19.151 3.32138 19.4616 3.19316C19.7723 3.06493 20.1052 2.99929 20.4414 3.00001C21.12 3.00001 21.7708 3.26904 22.2506 3.74791C22.7304 4.22679 23 4.87628 23 5.55351C23.0007 5.889 22.9349 6.22131 22.8065 6.53132C22.678 6.84134 22.4893 7.12293 22.2514 7.35989L8.52967 21.0543Z"
          stroke="#646D7A"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path d="M2 23H24" stroke="#646D7A" strokeWidth="2" strokeMiterlimit="10" />
        <path d="M20 9L17 6" stroke="#646D7A" strokeWidth="2" strokeMiterlimit="10" />
      </svg>
    </button>
  );
}
