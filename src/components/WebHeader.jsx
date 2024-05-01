import React from 'react';
import CustomLogoWithText from './CustomLogoWithText';
import Heart from './customIcon/Heart';
import Xp from './customIcon/Xp';
import Coin from './customIcon/Coin';
import IconContainer from './IconContainer';

function WebHeader() {
  return (
    <div className='max-sm:hidden lg:fixed w-full z-[9999] bg-light'>
      <div className='flex justify-between px-6 pt-6 pb-4 border-b border-lightgray'>
        <CustomLogoWithText />
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
    </div>
  );
}

export default WebHeader;
