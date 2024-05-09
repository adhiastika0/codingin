'use client';
import Modal from '@/components/modal';
import CustomButton from '@/components/button';
import { useState, useRef, useEffect } from 'react';
import ChatBubble from '@/components/chat';
import Image from 'next/image';
import { useChat } from 'ai/react';
import AutoAdjustTextarea from '@/components/textarea';

export default function Lensa() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [showLensaDeveloper, setShowLensaDeveloper] = useState(true);
  const messageContainerRef = useRef(null);

  // Effect untuk mengatur posisi scroll ke bawah saat pesan baru ditambahkan
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="relative">
      <h1 className="text-xl text-black">tes1233</h1>
      <Modal isVisible={showLensaDeveloper}>
        <div className="flex flex-col h-dvh">
          <div className="flex p-4 justify-between items-center border-b border-abuterang">
            <div className="flex items-center gap-4">
              <div className="inline-flex p-2 items-center rounded-md border border-abugelap ">
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
              <ChatBubble key={m.id} role={m.role} content={m.content} />
            ))}
          </div>
          <div className="flex items-end w-full justify-between bottom-0 p-4 gap-2 border-t border-abuterang">
            <AutoAdjustTextarea value={input} onChange={handleInputChange} />
            <CustomButton
              backgroundColor={'bg-biru-gradient'}
              shadowColor={'shadow-bayangan_biru'}
              onClick={handleSubmit}
            >
              <Image src="/play.svg" width={18} height={18} alt="Cross" />
            </CustomButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}
