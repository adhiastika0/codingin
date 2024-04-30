'use client';
import Modal from '@/components/modal';
import CustomButton from '@/components/button';
import { useState } from 'react';
import Image from 'next/image';

export default function Lensa() {
  const [showLensaDeveloper, setShowLensaDeveloper] = useState(true);

  const run = () => {

  }

  return (
    <div className="relative">
      <h1 className="text-xl text-black">tes1233</h1>
      <Modal isVisible={showLensaDeveloper}>
        <div className='flex flex-col h-full'>
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
            <div className="flex-grow overflow-auto">tes</div>
            <div className="flex w-full justify-between bottom-0 p-4 gap-2 border-t border-abuterang">
              <input
                className="flex-grow border-abugelap rounded-lg border justify-center items-center py-2 px-4 text-xs"
                placeholder="Apa yang ingin anda tanyakan?"
              />
              <CustomButton
                backgroundColor={'bg-biru-gradient'}
                shadowColor={'shadow-bayangan_biru'}
                onClick={run}
              >
                <Image src="/play.svg" width={18} height={18} alt="Cross" />
              </CustomButton>
            </div>
        </div>
      </Modal>
    </div>
  );
}
