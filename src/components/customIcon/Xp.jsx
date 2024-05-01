import Image from 'next/image';
import React from 'react';

function Xp() {
  return (
    <div className='icon-container'>
      <Image
        src={'/xp.svg'}
        alt='Xp for up your leaderboard'
        width={21}
        height={12}
        className='xp'
      />
    </div>
  );
}

export default Xp;
