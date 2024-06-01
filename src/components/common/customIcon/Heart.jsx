'use client';

import HealthUpdater from '@/lib/Hearts';
import Image from 'next/image';
import React, { useEffect } from 'react';

function Heart({ type }) {
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
      {type === 'full' ? (
        <Image
          src={'/heart.svg'}
          alt='Heart'
          width={20}
          height={20}
          className='lg:size-7 md:size-6 sm:size-5'
        />
      ) : (
        <Image
          src={'/gray-heart.svg'}
          alt='Gray Heart'
          width={20}
          height={20}
          className='lg:size-7 md:size-6 sm:size-5'
        />
      )}
    </div>
  );
}

export default Heart;
