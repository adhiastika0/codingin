'use client';

import React, { useEffect, useState, useRef } from 'react';
import BottomBar from '@/components/common/level/BottomBar';
import TopBar from '@/components/common/level/TopBar';
import LevelSection from '@/components/common/level/LevelSection';
import Modal from '@/components/modal';
import CustomButton from '@/components/button';
import ChatBubble from '@/components/chat';
import Image from 'next/image';
import { useChat } from 'ai/react';
import AutoAdjustTextarea from '@/components/textarea';
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

  const { messages, input, handleInputChange, handleSubmit, append } =
    useChat();
  const [showLensaDeveloper, setShowLensaDeveloper] = useState(false);
  const [selectedCodeLanguage, setSelectedCodeLanguage] =
    useState('javascript');
  const messageContainerRef = useRef(null);
  const formRef = useRef(null);
  const { chapters, isLoading, error } = useChapters();
  const [generatedCode, setGeneratedCode] = useState('');
  const [result, setResult] = useState('');
  const currentGeneratedCode = useRef('');
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
      console.log(chapterId, levelId);
      const checkCodeFunction = await importCheckCode(chapterId, levelId);
      setCheckCode(() => checkCodeFunction);
    };

    fetchUserCollection();
    loadCheckCodeFunction();
  }, [chapterId, levelId]);

  const handleRecommendedQuestion = (question) => {
    append({ role: 'user', content: question });
  };

  useEffect(() => {
    // Assuming `generateCode` is set asynchronously, you should handle it in a useEffect
    if (
      showLensaDeveloper &&
      generatedCode.length > 0 &&
      currentGeneratedCode.current != generatedCode[0]
    ) {
      currentGeneratedCode.current = generatedCode[0];
      const userCode = `
\`\`\`${selectedCodeLanguage.toLowerCase()}
${generatedCode[0]}
\`\`\`
      `;
      append({ role: 'user', content: userCode });
    }
  }, [showLensaDeveloper]);

  useEffect(() => {
    // Mengatur posisi scroll ke bawah saat pesan baru ditambahkan
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages, showLensaDeveloper]);

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
    <div className='relative flex flex-col bg-white max-h-full h-full gap-6'>
      <Modal isVisible={showLensaDeveloper}>
        <div className='flex flex-col h-dvh'>
          <div className='flex p-4 justify-between items-center border-b border-lightgray'>
            <div className='flex items-center gap-4'>
              <div className='inline-flex p-2 items-center rounded-md border border-darkgray '>
                <Image
                  src='/lens.png'
                  width={18}
                  height={18}
                  alt='Lensa Developer'
                />
              </div>
              <p className='text-base font-bold'>Lensa Developer</p>
            </div>
            <button onClick={() => setShowLensaDeveloper(false)}>
              <Image src='/cross.svg' width={18} height={18} alt='Cross' />
            </button>
          </div>
          <div
            className='flex-grow overflow-auto p-4'
            ref={messageContainerRef}
          >
            {messages.map((m) => (
              <ChatBubble
                key={m.id}
                role={m.role}
                content={m.content}
                handleRecommendedQuestion={handleRecommendedQuestion}
              />
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className='flex items-end w-full justify-between bottom-0 p-4 gap-2 border-t border-lightgray'
            ref={formRef}
          >
            <AutoAdjustTextarea value={input} onChange={handleInputChange} />
            <CustomButton
              backgroundColor={'bg-gradient-blue'}
              shadowColor={'shadow-button-blue'}
            >
              <Image src='/play.svg' width={18} height={18} alt='Cross' />
            </CustomButton>
          </form>
        </div>
      </Modal>

      <TopBar
        onCustomButtonClick={() => setShowLensaDeveloper(true)}
        health={user?.health}
      />
      <LevelSection
        level={level}
        generatedCode={generatedCode}
        setGeneratedCode={setGeneratedCode}
        setResult={setResult}
        result={result}
        selectedCodeLanguage={selectedCodeLanguage}
        setSelectedCodeLanguage={setSelectedCodeLanguage}
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
