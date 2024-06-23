import React from 'react';
import SidebarItemContainer from '../common/sidebar/SidebarItemContainer';

function MobileSidebar({ isOpen }) {
  return (
    <div
      className={`lg:hidden fixed left-0 mt-[103px] bg-white size-full z-50 transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <SidebarItemContainer />
    </div>
  );
}

export default MobileSidebar;
