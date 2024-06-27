import React from 'react';
import BackButton from '../button/BackButton';
import HeartIndicator from '../customIcon/HeartIndicator';
import CustomButton from '../button/CustomButton';

function TopBar({onCustomButtonClick, health }) {
  return (
    <div className='fixed top-0 left-0 right-0 px-6 py-4 bg-white flex justify-between items-center text-black border-b z-50'>
      <BackButton />
      <HeartIndicator heartNumber={health} />
      <CustomButton
        border={'border-2 border-gray'}
        textColor="text-black"
        shadowColor={'shadow-button-gray'}
        onClick={onCustomButtonClick}
      >
        <h3>🔍 Lensa Developer</h3>
      </CustomButton>
    </div>
  );
}

export default TopBar;
