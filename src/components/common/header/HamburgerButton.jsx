import Image from 'next/image';
import React from 'react';

function HamburgerButton({ toggleSidebar, isOpen }) {
  return (
    <button
      onClick={toggleSidebar}
      className='w-6 h-6 relative object-cover'
      type='button'
    >
      <Image
        src={isOpen ? '/cross.svg' : '/hamburger.svg'}
        alt={
          isOpen
            ? 'hamburger menu for codingin'
            : 'close the hamburger menu for codingin'
        }
        width={24}
        height={24}
      />
    </button>
  );
}

export default HamburgerButton;
