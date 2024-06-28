'use client';

import React from 'react';
import CustomLevel from '@/components/common/button/CustomLevel';
import CustomLink from '@/components/common/button/CustomLink';
import { useChapters } from '@/hooks/ChapterContext';
import generateZigZagMatrix from '@/utils/zigZagPatternGenerator';
import Connector from '@/components/common/ui/Connector';
import { rotateConnector } from '@/constants';
import BackButton from '@/components/common/button/BackButton';

export default function ChapterDetails({ params }) {
  const { chapterId } = params;
  const { chapters, isLoading, error } = useChapters();

  const chapterIndex = chapters.findIndex(
    (chapter) => chapter.id === chapterId
  );

  const chapter = chapters[chapterIndex];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { levels = [], modules = {} } = chapter;

  const pattern = generateZigZagMatrix(levels.length * 2);
  let isNextLevel = true;
  return (
    <>
      <BackButton style={'mb-4'}>
        <h2>Chapter {chapter.index}</h2>
      </BackButton>
      <div className='flex flex-col gap-6 pb-6 bg-[url(/background_jitter.svg)] bg-contain'>
        <div className='flex gap-6 items-center justify-between p-4 shadow-button-gray border border-darkgray rounded-lg bg-white'>
          <div className='flex flex-col gap-2'>
            <h1>{chapter.title}</h1>
            <h3>{chapter.desc}</h3>
          </div>
          <CustomLink
            href={`/chapter/${chapterId}/module/${modules.id}`}
            borderColor={'border-darkgray'}
            shadowColor={'shadow-button-gray'}
          >
            <h3 className='text-black'>📖 Modul Belajar</h3>
          </CustomLink>
        </div>
        <div className='flex flex-col items-center '>
          <div className='grid grid-cols-3 gap-4'>
            {pattern.map((row, rowIndex) =>
              row.map(
                (item, colIndex) =>
                  item === 1 && (
                    <React.Fragment key={`fragment-${rowIndex}-${colIndex}`}>
                      {isNextLevel ? (
                        <CustomLevel
                          key={`level-${levels[rowIndex]?.id ?? 'empty'}`}
                          href={`/chapter/${chapterId}/level/${
                            levels[rowIndex / 2]?.id
                          }`}
                          borderColor={'border-green'}
                          shadowColor={'shadow-button-green'}
                          backgroundColor={'bg-gradient-green'}
                          x={colIndex + 1}
                          y={rowIndex + 1}
                        >
                          {rowIndex / 2 + 1}
                        </CustomLevel>
                      ) : (
                        <Connector
                          key={`connector-${rowIndex}-${colIndex}`}
                          x={colIndex + 1}
                          y={rowIndex + 1}
                          rotate={rotateConnector[(colIndex % 2) + rowIndex]}
                        />
                      )}
                      {(isNextLevel = !isNextLevel)}
                    </React.Fragment>
                  )
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
