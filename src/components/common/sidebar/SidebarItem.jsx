import Link from 'next/link';
import React from 'react';

function SidebarItem({ href, icon, text, isActive }) {
  return (
    <>
      <Link
        className={`${
          isActive
            ? 'border border-solid border-blue text-blue'
            : 'border border-solid border-transparent'
        }  flex gap-2 p-2 items-center hover:bg-gradient-blue-20 rounded-lg`}
        href={href}
      >
        {icon}
        <h3 className='font-bold'>{text}</h3>
      </Link>
      <div className='border border-solid border-lightgray'></div>
    </>
  );
}

export default SidebarItem;
