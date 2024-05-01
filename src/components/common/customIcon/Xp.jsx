import Image from 'next/image';
import React from 'react';

function Xp() {
  return (
    <div className='icon-container'>
      <Image
        src={'/xp.svg'}
        alt='Xp for up your leaderboard'
        width={20}
        height={20}
        className='lg:size-8 md:size-7 sm:size-6'
      />
    </div>
  );
}

export default Xp;
