import React from 'react';
import SidebarItemContainer from '../common/sidebar/SidebarItemContainer';

function WebSidebar({ className }) {
  return (
    <div className={`${className} border-r border-lightgray flex-col`}>
      <SidebarItemContainer />
    </div>
  );
}

export default WebSidebar;
