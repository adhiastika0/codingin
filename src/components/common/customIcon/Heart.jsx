'use client';

import HealthUpdater from '@/lib/Hearts';
import Image from 'next/image';
import React, { useEffect } from 'react';

function Heart({ available }) {
  useEffect(() => {
    const updateHealth = async () => {
      try {
        await HealthUpdater();
      } catch (error) {
        console.error('Error calling updateHealth API:', error);
      }
    };

    const intervalId = setInterval(updateHealth, 0.1 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='icon-container'>
      {available ? (
        <Image
          src={'/heart.svg'}
          alt='Heart'
          width={20}
          height={20}
          className='lg:size-6 md:size-5 sm:size-4'
        />
      ) : (
        <Image
          src={'/gray_heart.svg'}
          alt='Gray Heart'
          width={20}
          height={20}
          className='lg:size-6 md:size-5 sm:size-4'
        />
      )}
    </div>
  );
}

export default Heart;
