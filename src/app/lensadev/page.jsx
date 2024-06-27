'use client';
import { useEffect, useState, useRef } from 'react';
import Modal from '@/components/modal';
import CustomButton from '@/components/button';
import ChatBubble from '@/components/chat';
import Image from 'next/image';
import { useChat } from 'ai/react';
import AutoAdjustTextarea from '@/components/textarea';

export default function Lensa() {
  const { messages, input, handleInputChange, handleSubmit, append } =
    useChat();
  const [showLensaDeveloper, setShowLensaDeveloper] = useState(true);
  const [initialMessageAppended, setInitialMessageAppended] = useState(false); // State untuk memantau apakah pesan awal sudah di-append
  const messageContainerRef = useRef(null);
  const formRef = useRef(null);

  const handleRecommendedQuestion = (question) => {
    console.log(question);
    append({ role: 'user', content: question });
  };

  // Memastikan 'tes' muncul saat pertama kali render
  if (!initialMessageAppended) {
    const userCode = `
\`\`\`javascript
var Umur;

Umur = 13;
if (Umur < 13) {
  console.log('Anak-anak');
} else if (Umur < 20) {
  console.log('Remaja');
} else {
  console.log('Dewasa');
}

\`\`\`
`;

    append({ role: 'user', content: userCode });
    setInitialMessageAppended(true); // Menandai bahwa pesan sudah di-append
  }
  useEffect(() => {
    // Mengatur posisi scroll ke bawah saat pesan baru ditambahkan
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="relative">
      <Modal isVisible={showLensaDeveloper}>
        <div className="flex flex-col h-dvh">
          <div className="flex p-4 justify-between items-center border-b border-lightgray">
            <div className="flex items-center gap-4">
              <div className="inline-flex p-2 items-center rounded-md border border-darkgray ">
                <Image
                  src="/lens.png"
                  width={18}
                  height={18}
                  alt="Lensa Developer"
                />
              </div>
              <p className="text-base font-bold">Lensa Developer</p>
            </div>
            <button onClick={() => setShowLensaDeveloper(false)}>
              <Image src="/cross.svg" width={18} height={18} alt="Cross" />
            </button>
          </div>
          <div
            className="flex-grow overflow-auto p-4"
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
            className="flex items-end w-full justify-between bottom-0 p-4 gap-2 border-t border-lightgray"
            ref={formRef}
          >
            <AutoAdjustTextarea value={input} onChange={handleInputChange} />
            <CustomButton
              type="submit"
              backgroundColor={'bg-gradient-blue'}
              shadowColor={'shadow-button-blue'}
            >
              <Image src="/play.svg" width={18} height={18} alt="Cross" />
            </CustomButton>
          </form>
        </div>
      </Modal>
    </div>
  );
}
