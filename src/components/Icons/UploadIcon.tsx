interface IconProps {
  className?: string;
  htmlFor?: string | undefined;
}

export function UploadIcon({ className, htmlFor }: IconProps) {
  return (
    <label className={className} htmlFor={htmlFor} style={{ cursor: 'pointer' }}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.375 17.1599V24.3966H1.625V17.1599" stroke="#646D7A" strokeWidth="2" strokeMiterlimit="10" />
        <path d="M13 3.71582V21.2983" stroke="#646D7A" strokeWidth="2" strokeMiterlimit="10" />
        <path
          d="M5.76367 9.92343L13.0003 2.68677L20.237 9.92343"
          stroke="#646D7A"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </label>
  );
}
