'use client';
import Image from 'next/image';
import { useState } from 'react';
import { auth } from '@/firebase/clientApp';
import CustomButton from '@/components/button';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Email Sent');
        setError('');
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  function showError() {
    if (error) {
      return (
        <p className='flex text-red-600 text-xs font-semibold self-stretch'>
          {error}
        </p>
      );
    }
    return null;
  }

  return (
    <div className='App flex flex-col items-center justify-center gap-6 h-screen'>
      <div className='flex flex-col justify-center items-center gap-6 w-[280px]'>
        <div className='flex gap-2'>
          <Image
            src='/logo.svg'
            width={37.5}
            height={30}
            alt='Logo Codingin'
            priority
          />
          <p className='text-2xl'>Codingin</p>
        </div>
        <p className='font-bold'>Lupa Kata Sandi</p>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-bold'>Email</label>
            <input
              className='flex border-abugelap justify-center items-center w-[280px] h-[40px] gap-3 rounded-lg border py-3 px-2.5'
              type='email'
              placeholder='Masukkan Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {showError()}

          <CustomButton
            backgroundColor={'bg-biru-gradient'}
            shadowColor={'shadow-bayangan_biru'}
            onClick={handleResetPassword}
          >
            Kirim
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
