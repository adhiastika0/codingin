import { ubuntu } from '@/app/fonts/font';
import Image from 'next/image';
import React from 'react';

function CustomLogoWithText() {
  return (
    <div className='flex gap-2 items-center'>
      <Image
        src={'/logo.svg'}
        alt='logo codingin'
        width={30}
        height={24}
        className='xl:w-[40px] xl:-[32px] sm:w-[35px] sm:h-[28px]'
      />
      <p
        className={`${ubuntu.className} text-base sm:text-xl xl:text-2xl font-bold`}
      >
        Codingin
      </p>
    </div>
  );
}

export default CustomLogoWithText;
