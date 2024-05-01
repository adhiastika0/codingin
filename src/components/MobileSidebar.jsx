import React from 'react';
import SidebarItemContainer from './SidebarItemContainer';

function MobileSidebar({ isOpen }) {
  return (
    <div
      className={`fixed left-0 bg-lightgray size-full shadow z-50 transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <SidebarItemContainer />
    </div>
  );
}

export default MobileSidebar;
