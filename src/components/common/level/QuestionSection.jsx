import Image from 'next/image';
import React from 'react';

function QuestionSection({
  questionTitle,
  questionDescription,
  expectedOutput,
  imageUrl,
}) {
  return (
    <div className='justify-self-center p-6'>
      <h2 className=' font-bold text-black'>{questionTitle}</h2>
      <h3 className='text-black'>{questionDescription}</h3>
      <h3 className='text-black flex gap-2'>
        <span className='text-blue font-bold'>Output yang diharapkan: </span>
        {expectedOutput}
      </h3>
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
