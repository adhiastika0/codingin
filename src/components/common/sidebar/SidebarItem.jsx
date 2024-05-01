import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function SidebarItem({ href, icon, text }) {
  const pathname = usePathname();

  return (
    <div className='mb-2 border-b border-lightgray'>
      <Link
        className={`${
          pathname === href
            ? 'border border-solid border-blue text-blue'
            : 'border border-solid border-transparent'
        }  flex gap-2 p-2 items-center hover:bg-gradient-blue-20 rounded-lg`}
        href={href}
      >
        {icon}
        <h3 className='font-bold'>{text}</h3>
      </Link>
    </div>
  );
}

export default SidebarItem;
