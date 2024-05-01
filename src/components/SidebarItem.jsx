import Link from 'next/link';
import React from 'react';

function SidebarItem({ href, icon, text }) {
  return (
    <>
      <Link
        className='flex gap-2 items-center align-middle p-2 bg-gradient-blue-20 rounded-lg'
        href={href}
      >
        {icon}
        <h2>{text}</h2>
      </Link>
      <div className='h-[1px] bg-darkgray w-full' />
    </>
  );
}

export default SidebarItem;
