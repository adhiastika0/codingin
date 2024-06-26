'use client';

import React, { useEffect, useState } from 'react';
import BottomBar from '@/components/common/level/BottomBar';
import TopBar from '@/components/common/level/TopBar';
import LevelSection from '@/components/common/level/LevelSection';
import { useChapters } from '@/hooks/ChapterContext';
import { findChapterById } from '@/lib/Chapter';
import { findLevelById } from '@/lib/Level';
import {
  decreaseUserHealth,
  getUserByCookies,
  increaseUserCoin,
  increaseUserXp,
} from '@/lib/Users';
import importCheckCode from '@/utils/importCheckCode';
import CustomModal from '@/components/common/ui/CustomModal';

function Level({ params }) {
  const { chapterId, levelId } = params;
  const { chapters, isLoading, error } = useChapters();

  const [generatedCode, setGeneratedCode] = useState('');
  const [result, setResult] = useState('');
  const [user, setUser] = useState(null);
  const [checkCode, setCheckCode] = useState(null);
  const [bodyModal, setBodyModal] = useState('');
  const [typeModal, setTypeModal] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const chapter = findChapterById(chapters, chapterId);
  const level = findLevelById(chapter, levelId);

  useEffect(() => {
    const fetchUserCollection = async () => {
      const user = await getUserByCookies();
      setUser(user);
    };

    const loadCheckCodeFunction = async () => {
      const checkCodeFunction = await importCheckCode(chapterId, levelId);
      setCheckCode(() => checkCodeFunction);
    };

    fetchUserCollection();
    loadCheckCodeFunction();
  }, [chapterId, levelId]);

  const handleCheckCode = async () => {
    if (user.health === 0) {
      setIsOpen(true);
      setTypeModal('info');
      setBodyModal(
        'Health kamu telah habis! silakan menunggu hingga tersedia kembali'
      );
      return;
    }

    if (!checkCode) {
      alert('No check code function found for this level');
      return;
    }

    const { success, message } = await checkCode(
      generatedCode[1],
      level.test_case
    );

    alert(message);

    if (!success && user) {
      // !Warning: Hati-hati dengan inspect
      const newHealth = user.health - 1;

      await decreaseUserHealth(user.id, newHealth);
      setUser({ ...user, health: newHealth });
      setIsOpen(true);
      setTypeModal('failed');
      setBodyModal('Sayang sekali, jawaban mu masih salah. Coba lagi ya!');
    } else {
      const newXp = user.xp + 100;
      const newCoin = user.coin + 1;

      await increaseUserCoin(user.id, newCoin);
      await increaseUserXp(user.id, newXp);
      setIsOpen(true);
      setTypeModal('success');
      setBodyModal('Selamat! Kamu berhasil menyelesaikan level ini');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='max-h-full h-full'>
      <TopBar health={user?.health} />
      <LevelSection
        level={level}
        generatedCode={generatedCode}
        setGeneratedCode={setGeneratedCode}
        setResult={setResult}
        result={result}
      />
      <BottomBar handleCheckCode={handleCheckCode} />
      {isOpen && (
        <CustomModal
          isOpen={isOpen}
          closeModal={closeModal}
          type={typeModal}
          body={bodyModal}
        />
      )}
    </div>
  );
}

export default Level;
