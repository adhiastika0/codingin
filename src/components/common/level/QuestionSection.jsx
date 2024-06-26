import Image from 'next/image';
import React from 'react';

function QuestionSection({ questionTitle, questionDescription, imageUrl }) {
  return (
    <div className='justify-self-center p-6'>
      <h2 className=' font-bold text-black'>{questionTitle}</h2>
      <p className='text-black'>{questionDescription}</p>
      {/* <Image
        src={imageUrl}
        alt={`Image for module codingin`}
        width={200}
        height={200}
        className='m-auto'
      /> */}
    </div>
  );
}

export default QuestionSection;
