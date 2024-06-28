import React from 'react';
import Image from 'next/image';
import CustomButton from '../button/CustomButton';

function BottomBar({ handleCheckCode }) {
  return (
    <div className='fixed bottom-0 bg-white flex justify-center w-full py-4 border-t'>
      <CustomButton
        backgroundColor='bg-blue'
        shadowColor='shadow-button-blue'
        onClick={handleCheckCode}
        style={'gap-2'}
      >
        <Image
          src={'/ph_play-fill.svg'}
          alt='start button for enter a chapter in codingin'
          width={14}
          height={14}
          className='sm:w-4 sm:h-4 xl:w-5 xl:h-5'
        />
        Periksa Jawaban
      </CustomButton>
    </div>
  );
}

export default BottomBar;
