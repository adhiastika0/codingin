import Link from 'next/link';
import React from 'react';

function CustomLevel({
  children,
  borderColor,
  backgroundColor,
  shadowColor,
  x,
  y,
  type,
  href,
}) {
  return (
    <Link
      href={href}
      className={`flex gap-2 items-center border ${borderColor} justify-center w-fit-content text-white ${
        type === 'off' ? 'bg-lightgray' : `${backgroundColor}`
      } font-bold px-5 py-3 rounded-md ${shadowColor} active:translate-y-[6px] active:shadow-none`}
      style={{
        gridRow: `${y}`,
        gridColumn: `${x}`,
      }}
    >
      {children}
    </Link>
  );
}

export default CustomLevel;
