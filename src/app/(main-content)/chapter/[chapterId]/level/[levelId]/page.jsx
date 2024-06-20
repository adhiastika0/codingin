import React from 'react';
import BottomBar from '@/components/common/level/BottomBar';
import TopBar from '@/components/common/level/TopBar';
import LevelSection from '@/components/common/level/LevelSection';

function Level({ params }) {
  const { levelId } = params;
  return (
    <div className='flex flex-col h-screen bg-white'>
      <TopBar />
      <LevelSection levelId={levelId} />
      <BottomBar />
    </div>
  );
}

export default Level;
