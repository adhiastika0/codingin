'use client';

import React, { useEffect } from 'react';
import Heart from './Heart';
import HealthUpdater from '@/lib/Hearts';

const createArray = (length) => [...Array(length)];

function HeartIndicator({ heartNumber }) {
  useEffect(() => {
    const updateHealth = async () => {
      try {
        await HealthUpdater();
      } catch (error) {
        console.error('Error calling updateHealth API:', error);
      }
    };

    const intervalId = setInterval(updateHealth, 30 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='flex gap-[2px] justify-self-center'>
      {createArray(5).map((n, i) => (
        <Heart key={i} available={i < heartNumber} />
      ))}
    </div>
  );
}

export default HeartIndicator;
