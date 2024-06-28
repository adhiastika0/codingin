import React from 'react';
import SidebarItemContainer from '../common/sidebar/SidebarItemContainer';

function WebSidebar() {
  return (
    <div
      className={`hidden lg:flex lg:pt-[118px] lg:w-[360px] h-full lg:fixed border-r border-lightgray flex-col `}
    >
      <SidebarItemContainer />
    </div>
  );
}

export default WebSidebar;
