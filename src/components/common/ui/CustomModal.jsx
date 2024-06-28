import Image from 'next/image';
import React, { useEffect } from 'react';
import ReactModal from 'react-modal';

function CustomModal({ isOpen, closeModal, type, body }) {
  const modalTitle = {
    info: 'Info',
    success: 'Success',
    failed: 'Failed',
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className='absolute w-1/3 h-1/3 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 shadow-lg rounded-lg'
      ariaHideApp={false}
    >
      <div className='p-6'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl font-semibold'>{modalTitle[type]}</h3>
          <button onClick={closeModal} className='focus:outline-none'>
            <Image src='/cross.svg' alt='Close icon' width={24} height={24} />
          </button>
        </div>
        <div className='mt-4'>
          <p className='text-gray-600'>{body}</p>
        </div>
      </div>
    </ReactModal>
  );
}

export default CustomModal;
