import Image from 'next/image';
import React from 'react';

function Heart({ type }) {
  return (
    <div className='icon-container'>
      {type === 'full' ? (
        <Image
          src={'/heart.svg'}
          alt='Heart'
          width={16}
          height={16}
          className='heart'
        />
      ) : (
        <Image
          src={'/gray-heart.svg'}
          alt='Gray Heart'
          width={16}
          height={16}
          className='heart'
        />
      )}
    </div>
  );
}

export default Heart;
