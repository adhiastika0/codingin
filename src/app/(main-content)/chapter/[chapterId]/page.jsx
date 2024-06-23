'use client';

import React from 'react';
import CustomLevel from '@/components/common/button/CustomLevel';
import generateZigzagMatrix from '@/utils/zigZagPatternGenerator';
import CustomLink from '@/components/common/button/CustomLink';
import { useChapters } from '@/hooks/ChapterContext';

export default function ChapterDetails({ params }) {
  const { chapterId } = params;
  const { chapters, isLoading, error } = useChapters();

  const chapter = chapters.find((chapter) => chapter.id === chapterId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { levels = [], modules = {} } = chapter;

  const pattern = generateZigzagMatrix(levels.length);

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-2 items-center justify-between p-4 shadow-button-gray border border-darkgray rounded-lg'>
        <div className='flex flex-col gap-1'>
          <h1>{chapter.title}</h1>
          <h3>{chapter.desc}</h3>
        </div>
        <CustomLink
          href={`/chapter/${chapterId}/module/${modules.id}`}
          borderColor={'border-darkgray'}
          shadowColor={'shadow-button-gray'}
        >
          📖
        </CustomLink>
      </div>
      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-3 gap-4'>
          {levels.map((level, index) =>
            pattern[index].map((item, itemIndex) => {
              return (
                <div key={level.id}>
                  {item === 1 && (
                    <CustomLevel
                      key={`${level.id}`}
                      href={`/chapter/${chapterId}/level/${level.id}`}
                      borderColor={'border-green'}
                      shadowColor={'shadow-button-green'}
                      backgroundColor={'bg-gradient-green'}
                      x={itemIndex + 1}
                      y={index + 1}
                    >
                      {index + 1}
                    </CustomLevel>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
