import Image from 'next/image';
import React from 'react';

function Coin() {
  return (
    <div className='icon-container'>
      <Image
        src={'/coin.svg'}
        alt='coin is currency in codingin, buy heart so you can push your rank'
        width={15}
        height={15}
        className='coin'
      />
    </div>
  );
}

export default Coin;
