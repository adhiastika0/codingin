'use client';

import React, { useEffect, useState } from 'react';
import QuestionSection from './QuestionSection';
import BlockSection from './section/BlockSection';
import CodeSection from './section/CodeSection';
import ResultSection from './section/ResultSection';
// import { getLevelImageUrl } from '@/utils/getImageUrl';
import CustomDraggable from '../ui/CustomDraggable';

function LevelSection({
  level,
  generatedCode,
  setGeneratedCode,
  setResult,
  result,
  selectedCodeLanguage,
  setSelectedCodeLanguage
}) {
  const [activeButton, setActiveButton] = useState('block');

  const handleSelectedCodeLanguage = (value) => {
    setSelectedCodeLanguage(value);
  };

  // console.log(imageUrl);

  return (
    <div className='flex flex-col gap-4 size-full pt-16 overflow-hidden'>
      <QuestionSection
        questionTitle={level.title}
        questionDescription={level.question}
      />
      <CustomDraggable>
        <div className='handle flex justify-center items-center py-1 self-stretch mb-2'>
          <div className='w-12 h-2 bg-black border-white border-2 shadow-draggable-gray rounded-3xl'></div>
        </div>
        <div className='h-full'>
          <div className='flex justify-between'>
            <div className='flex gap-6'>
              <button
                className={`px-5 py-2 text-black bg-lightgray rounded-t-md border-2 border-b-4 ${
                  activeButton === 'block'
                    ? 'border-b-blue border-lightgray bg-white'
                    : ''
                }`}
                onClick={() => setActiveButton('block')}
              >
                <h3>Block</h3>
              </button>
              <button
                className={`px-5 py-2 text-black bg-lightgray rounded-t-md border-2 border-b-4 ${
                  activeButton === 'code'
                    ? 'border-b-blue border-lightgray bg-white'
                    : ''
                }`}
                onClick={() => setActiveButton('code')}
              >
                <h3>Code</h3>
              </button>
              <button
                className={`px-5 py-2 text-black bg-lightgray rounded-t-md border-2 border-b-4 ${
                  activeButton === 'result'
                    ? 'border-b-blue border-lightgray bg-white'
                    : ''
                }`}
                onClick={() => setActiveButton('result')}
              >
                <h3>Hasil</h3>
              </button>
            </div>
          </div>
          <BlockSection
            levelId={level.id}
            style={activeButton === 'block' ? 'block' : 'hidden'}
            setGeneratedCode={setGeneratedCode}
            selectedCodeLanguage={selectedCodeLanguage}
          />
          <CodeSection
            generatedCode={generatedCode}
            style={activeButton === 'code' ? 'block' : 'hidden'}
            setSelectedCodeLanguage={handleSelectedCodeLanguage}
            selectedCodeLanguage={selectedCodeLanguage}
          />
          <ResultSection
            generatedCode={generatedCode}
            result={result}
            setResult={setResult}
            style={activeButton === 'result' ? 'block' : 'hidden'}
          />
        </div>
      </CustomDraggable>
    </div>
  );
}

export default LevelSection;
