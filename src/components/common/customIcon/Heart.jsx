import Image from 'next/image';
import React from 'react';

function Heart({ type }) {
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
