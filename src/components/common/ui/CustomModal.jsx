import Image from 'next/image';
import React from 'react';
import ReactModal from 'react-modal';

function CustomModal({ isOpen, closeModal, type, body }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className='fixed inset-0 flex items-center justify-center z-50'
      overlayClassName='fixed inset-0 bg-black bg-opacity-50'
    >
      <div className='bg-white w-1/3 max-w-lg rounded-lg shadow-lg p-6'>
        <div className='flex justify-between items-center border-b pb-3'>
          {type === 'info' && <h2>Information</h2>}
          {type === 'failed' && <h2>Gagal</h2>}
          {type === 'success' && <h2>Berhasil</h2>}
          <button onClick={closeModal} className='focus:outline-none'>
            <Image
              src='/cross.svg'
              alt='close icon for codingin'
              width={24}
              height={24}
              className='hover:opacity-75 transition-opacity duration-200'
            />
          </button>
        </div>
        <div className='mt-4'>
          {/* Add your modal content here */}
          <h3 className='text-gray-600'>{body}</h3>
        </div>
      </div>
    </ReactModal>
  );
}

export default CustomModal;
