'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

function BackButton({ children }) {
  const router = useRouter();

  return (
    <div className='flex gap-4 items-center justify-start'>
      <button className='h-full py-2' onClick={() => router.back()}>
        <Image
          src={'/chevron-left.svg'}
          alt='back button in module codingin'
          width={16}
          height={16}
          className='lg:size-6'
        />
      </button>
      {children}
    </div>
  );
}

export default BackButton;
