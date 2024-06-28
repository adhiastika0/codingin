import Image from 'next/image';
import React from 'react';

function Coin() {
  return (
    <div className='icon-container'>
      <Image
        src={'/coin.svg'}
        alt='coin is currency in codingin, buy heart so you can push your rank'
        width={20}
        height={20}
        className='lg:size-6 md:size-5 sm:size-4'
      />
    </div>
  );
}

export default Coin;
