'use client';

import React, { useState } from 'react';
import CustomLogoWithText from '../common/header/CustomLogoWithText';
import Heart from '../common/customIcon/Heart';
import Xp from '../common/customIcon/Xp';
import Coin from '../common/customIcon/Coin';
import IconContainer from '../common/customIcon/IconContainer';
import MobileSidebar from './MobileSidebar';
import HamburgerButton from '../common/header/HamburgerButton';

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed w-full z-[9999] h-[162px] bg-white border-b border-lightgray'>
      <div className='flex flex-col h-full'>
        <div className='flex justify-between items-center px-6 pt-6 pb-4 border-b border-lightgray'>
          <CustomLogoWithText />
          <HamburgerButton toggleSidebar={toggleSidebar} isOpen={isOpen} />
        </div>
        <div className='flex justify-center items-center px-6 pt-6 pb-4 gap-6 h-full'>
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
    </div>
  );
}

export default MobileHeader;
