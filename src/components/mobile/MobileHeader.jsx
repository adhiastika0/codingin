'use client';

import React, { useEffect, useState } from 'react';
import CustomLogoWithText from '../common/header/CustomLogoWithText';
import Heart from '../common/customIcon/Heart';
import Xp from '../common/customIcon/Xp';
import Coin from '../common/customIcon/Coin';
import IconContainer from '../common/customIcon/IconContainer';
import MobileSidebar from './MobileSidebar';
import HamburgerButton from '../common/header/HamburgerButton';
import { getUserByCookies } from '@/lib/Users';
import { collection } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';

function MobileHeader() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchUserCollection = async () => {
      const userRef = collection(db, 'users');

      const user = await getUserByCookies(userRef);
      setUser(user);
    };

    fetchUserCollection();
  }, []);

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
          <IconContainer text={`${user?.health}`}>
            <Heart type={'full'} />
          </IconContainer>
          <IconContainer text={`${user?.xp}`}>
            <Xp />
          </IconContainer>
          <IconContainer text={`${user?.coin}`}>
            <Coin />
          </IconContainer>
        </div>
        <MobileSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}

export default MobileHeader;
