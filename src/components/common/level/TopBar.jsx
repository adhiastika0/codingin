import React from 'react';
import BackButton from '../button/BackButton';
import HeartIndicator from '../customIcon/HeartIndicator';
import CustomButton from '../button/CustomButton';

function TopBar() {
  return (
    <div className='flex justify-between items-center mb-6 text-black'>
      <BackButton />
      <HeartIndicator heartNumber={2} />
      <CustomButton
        border={'border-2 border-gray'}
        textColor='text-black'
        shadowColor={'shadow-button-gray'}
      >
        <h3>🔍 Lensa Developer</h3>
      </CustomButton>
    </div>
  );
}

export default TopBar;
