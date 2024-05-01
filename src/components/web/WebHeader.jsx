import React from 'react';
import CustomLogoWithText from '../common/header/CustomLogoWithText';
import Heart from '../common/customIcon/Heart';
import Xp from '../common/customIcon/Xp';
import Coin from '../common/customIcon/Coin';
import IconContainer from '../common/customIcon/IconContainer';

function WebHeader() {
  return (
    <div className='lg:fixed w-full z-[9999] lg:h-[162px] h-0 bg-white border-b border-lightgray'>
      <div className='flex flex-col h-full'>
        <div className='flex justify-between border-b px-6 pt-6 pb-4 border-lightgray'>
          <CustomLogoWithText />
        </div>
        <div className='flex justify-center items-center gap-6 h-full'>
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
    </div>
  );
}

export default WebHeader;
