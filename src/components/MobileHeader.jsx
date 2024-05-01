'use client';

import React, { useState } from 'react';
import CustomLogoWithText from './CustomLogoWithText';
import Heart from './customIcon/Heart';
import Xp from './customIcon/Xp';
import Coin from './customIcon/Coin';
import IconContainer from './IconContainer';
import MobileSidebar from './MobileSidebar';
import HamburgerButton from './HamburgerButton';

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='lg:hidden fixed w-full z-[9999] bg-light'>
      <div className='flex justify-between items-center px-6 pt-6 pb-4 border-b border-lightgray'>
        <CustomLogoWithText />
        <HamburgerButton toggleSidebar={toggleSidebar} isOpen={isOpen} />
      </div>
      <div className='flex justify-center items-center px-6 pt-6 pb-4 border-b border-lightgray gap-6'>
        <IconContainer text={10}>
          <Heart type={'full'} />
        </IconContainer>
        <IconContainer text={1000}>
          <Xp />
        </IconContainer>
        <IconContainer text={1000}>
          <Coin />
        </IconContainer>
      </div>
      <MobileSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default MobileHeader;
