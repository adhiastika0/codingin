'use client';

import React, { useEffect, useState } from 'react';
import BottomBar from '@/components/common/level/BottomBar';
import TopBar from '@/components/common/level/TopBar';
import LevelSection from '@/components/common/level/LevelSection';
import { useChapters } from '@/hooks/ChapterContext';
import { findChapterById } from '@/lib/Chapter';
import { findLevelById } from '@/lib/Level';
import { checkCode } from '@/utils/checkCode';

function Level({ params }) {
  const { chapterId, levelId } = params;
  const { chapters, isLoading, error } = useChapters();

  const [generatedCode, setGeneratedCode] = useState('');
  const [result, setResult] = useState('');

  const chapter = findChapterById(chapters, chapterId);
  const level = findLevelById(chapter, levelId);

  const handleCheckCode = async () => {
    const { success, message } = await checkCode(
      generatedCode[1],
      level.test_case,
      level.expected_statement
    );
    if (success) {
      alert(message);
    }
  };

  useEffect(() => {}, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex flex-col bg-white h-full gap-6'>
      <TopBar />
      <LevelSection
        levelId={levelId}
        generatedCode={generatedCode}
        setGeneratedCode={setGeneratedCode}
        setResult={setResult}
        result={result}
      />
      <BottomBar handleCheckCode={handleCheckCode} />
    </div>
  );
}

export default Level;
