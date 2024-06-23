'use client';

import React, { useState } from 'react';
import QuestionSection from './QuestionSection';
import BlockSection from './section/BlockSection';
import CodeSection from './section/CodeSection';
import ResultSection from './section/ResultSection';

function LevelSection({
  levelId,
  generatedCode,
  setGeneratedCode,
  setResult,
  result,
}) {
  const [activeButton, setActiveButton] = useState('block');
  const [selectedCodeLanguage, setSelectedCodeLanguage] =
    useState('JavaScript');

  const handleSelectedCodeLanguage = (value) => {
    setSelectedCodeLanguage(value);
  };

  return (
    <div className='flex flex-col gap-4 h-full'>
      <QuestionSection
        questionTitle='Tes'
        questionDescription='Tes description.'
      />
      <div className='h-full'>
        <div className='flex justify-between'>
          <div className='flex gap-6'>
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
                activeButton === 'result'
                  ? 'border-b-blue border-lightgray bg-transparent '
                  : ''
              }`}
              onClick={() => setActiveButton('result')}
            >
              <h3>Hasil</h3>
            </button>
          </div>
          <select title='language-select'>
            <option value='id'>Bahasa Indonesia</option>
            <option value='en'>English</option>
          </select>
        </div>
        <div className='h-full relative'>
          <BlockSection
            levelId={levelId}
            style={activeButton === 'block' ? 'visible' : 'invisible'}
            setGeneratedCode={setGeneratedCode}
            selectedCodeLanguage={selectedCodeLanguage}
          />
          <CodeSection
            generatedCode={generatedCode}
            style={
              activeButton === 'code'
                ? 'visible absolute top-0 left-0'
                : 'hidden'
            }
            setSelectedCodeLanguage={handleSelectedCodeLanguage}
          />
          <ResultSection
            generatedCode={generatedCode}
            result={result}
            setResult={setResult}
            style={
              activeButton === 'result'
                ? 'block absolute top-0 left-0'
                : 'hidden'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default LevelSection;
