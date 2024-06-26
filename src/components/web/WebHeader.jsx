'use client';

import React, { useEffect, useState } from 'react';
import CustomLogoWithText from '../common/header/CustomLogoWithText';
import Heart from '../common/customIcon/Heart';
import Xp from '../common/customIcon/Xp';
import Coin from '../common/customIcon/Coin';
import IconContainer from '../common/customIcon/IconContainer';
import { getUserByCookies } from '@/lib/Users';

function WebHeader() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserCollection = async () => {
      const user = await getUserByCookies();
      setUser(user);
    };

    fetchUserCollection();
  }, []);
  return (
    <div className='web hidden lg:flex lg:fixed w-full z-[9999] lg:h-fit h-0 bg-white border-b border-lightgray'>
      <div className='flex flex-col size-full'>
        <div className='flex justify-between border-b px-6 pt-6 pb-4 border-lightgray'>
          <CustomLogoWithText />
        </div>
        <div className='flex justify-center items-center py-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14'>
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
      </div>
    </div>
  );
}

export default WebHeader;
