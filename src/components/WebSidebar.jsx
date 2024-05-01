import React from 'react';
import SidebarItemContainer from './SidebarItemContainer';

function WebSidebar({ className }) {
  return (
    <div
      className={`${className} fixed border-r border-lightgray flex-col`}
    >
      <SidebarItemContainer />
    </div>
  );
}

export default WebSidebar;
