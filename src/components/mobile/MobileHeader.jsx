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
    <div className='lg:hidden flex fixed w-full z-[9999] h-fit bg-white border-b border-lightgray'>
      <div className='flex flex-col size-full'>
        <div className='flex justify-between items-center px-6 pt-6 pb-4 border-b border-lightgray'>
          <CustomLogoWithText />
          <HamburgerButton toggleSidebar={toggleSidebar} isOpen={isOpen} />
        </div>
        <div className='flex justify-center items-center py-2 gap-6'>
          <IconContainer text={`${user?.health}`}>
            <Heart available />
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
