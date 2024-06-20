'use client';

import React, { useState } from 'react';
import QuestionSection from './QuestionSection';
import BlockSection from './section/BlockSection';
import CodeSection from './section/CodeSection';

function LevelSection(props) {
  const [activeButton, setActiveButton] = useState('block');
  const [generatedCode, setGeneratedCode] = useState('');

  const contentMap = {
    block: <BlockSection updateCode={setGeneratedCode} />,
    code: <CodeSection code={generatedCode} />,
    hasil: 'Konten untuk button Hasil',
  };

  const renderContent = () => {
    return contentMap[activeButton];
  };

  return (
    <div className='flex flex-col gap-4 size-full'>
      <QuestionSection
        questionTitle='Tes'
        questionDescription='Tes description.'
      />
      <div className='flex flex-col size-full'>
        <div className='flex justify-start gap-4 mx-6 relative'>
          <button
            className={`px-5 py-2 text-black bg-lightgray rounded-t-md border-2 border-b-4 ${
              activeButton === 'block'
                ? 'border-b-blue border-lightgray bg-transparent'
                : ''
            }`}
            onClick={() => setActiveButton('block')}
          >
            <h3>Block</h3>
          </button>
          <button
            className={`px-5 py-2 text-black bg-lightgray rounded-t-md border-2 border-b-4 ${
              activeButton === 'code'
                ? 'border-b-blue border-lightgray bg-transparent'
                : ''
            }`}
            onClick={() => setActiveButton('code')}
          >
            <h3>Code</h3>
          </button>
          <button
            className={`px-5 py-2 text-black bg-lightgray rounded-t-md border-2 border-b-4 ${
              activeButton === 'hasil'
                ? 'border-b-blue border-lightgray bg-transparent'
                : ''
            }`}
            onClick={() => setActiveButton('hasil')}
          >
            <h3>Hasil</h3>
          </button>
        </div>
        <div className='flex flex-col size-full'>{renderContent()}</div>
      </div>
    </div>
  );
}

export default LevelSection;
