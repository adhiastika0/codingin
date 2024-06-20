import React from 'react';
import Image from 'next/image';
import CustomButton from '../button/CustomButton';

function BottomBar() {
  return (
    <div className='my-6 flex justify-between'>
      <CustomButton
        backgroundColor='bg-white'
        shadowColor='shadow-button-blue'
        textColor='text-blue'
        border='border-blue border-2'
      >
        Periksa Jawaban
      </CustomButton>
      <CustomButton backgroundColor='bg-blue' shadowColor='shadow-button-blue'>
        <Image
          src={'/ph_play-fill.svg'}
          alt='start button for enter a chapter in codingin'
          width={14}
          height={14}
          className='sm:w-4 sm:h-4 xl:w-5 xl:h-5'
        />
      </CustomButton>
    </div>
  );
}

export default BottomBar;
