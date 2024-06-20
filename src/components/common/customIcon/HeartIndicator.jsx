'use client';

import React, { useState } from 'react';
import Heart from './Heart';

const createArray = (length) => [...Array(length)];

function HeartIndicator({ heartNumber = 3 }) {
  const [totalHearts, setHearts] = useState(heartNumber);
  return (
    <div className='flex gap-[2px] justify-self-center'>
      {createArray(5).map((n, i) => (
        <Heart key={i} available={i < totalHearts} />
      ))}
    </div>
  );
}

export default HeartIndicator;
