import Image from 'next/image';
import React from 'react';

function Heart({ available }) {
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
