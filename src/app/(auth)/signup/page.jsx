'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, db } from '@/firebase/clientApp';
import { addDoc, collection } from 'firebase/firestore';
import CustomButton from '@/components/common/button/CustomButton';
import { redirect } from 'next/navigation';

async function setUser(username, email) {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      username: username,
      email: email,
      friend_count: 0,
      health: 5,
      profile_picture: 'https://unsplash.com/photos/captcha-cvBBO4PzWPg',
      rank: 'unrank',
      xp: 0,
      coin: 0,
    });
    console.log('Document written with ID: ', docRef.id);
    // Create a reference to a new document in the 'users' collection
  } catch (error) {
    console.error('Error saving user data:', error);
    // Handle errors appropriately, e.g., display an error message to the user
  }
}
export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    // Basic email format validation (can be improved with regular expressions)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return; // Exit the function if email is invalid
    }

    if (!email || !password) {
      setError('Please enter both email and password.');
      return; // Exit the function if required fields are empty
    }
    try {
      await createUserWithEmailAndPassword(email, password);
      setUser(username, email);

      redirect('/signin');
    } catch (e) {
      setError(
        'Terjadi kesalahan saat membuat akun. Mohon coba lagi nanti.',
        e
      );
    }
  };

  function showError() {
    if (error) {
      return (
        <p className='flex text-red-600 text-xs font-semibold'>
          {error || ' '}
        </p>
      );
    }
    return null;
  }

  const handleEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSignUp();
    }
  };

  return (
    <div className='flex flex-col items-center justify-center gap-6 h-screen'>
      <div className='flex flex-col justify-center items-center gap-6'>
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
        <p className='font-bold'>Daftar Akun Codingin</p>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <p className='text-sm font-bold'>Username</p>
            <input
              className='flex border-abugelap justify-center items-center w-[280px] h-[40px] gap-3 rounded-lg border py-3 px-2.5'
              type='text'
              placeholder='Masukkan Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleEnterKeyDown}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm font-bold'>Email</p>
            <input
              className='flex border-abugelap justify-center items-center w-[280px] h-[40px] gap-3 rounded-lg border py-3 px-2.5'
              type='email'
              placeholder='Masukkan Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleEnterKeyDown}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm font-bold'>Password</p>
            <input
              className='flex border-abugelap justify-center items-center w-[280px] h-[40px] gap-3 rounded-lg border py-3 px-2.5'
              type='password'
              placeholder='Masukkan Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleEnterKeyDown}
            />
          </div>

          {showError()}

          <CustomButton
            backgroundColor={'bg-gradient-blue'}
            shadowColor={'shadow-button-blue'}
            onClick={handleSignUp}
          >
            Daftar
          </CustomButton>

          <p className='text-center text-xs font-bold'>
            Sudah Punya Akun?{' '}
            <a className='text-blue' href='/signin'>
              Masuk
            </a>
          </p>
        </div>
        <div className='flex items-center self-stretch gap-2'>
          <hr className='flex w-full h-px border-abugelap' />
          <p className='text-abugelap'>atau</p>
          <hr className='w-full h-px border-abugelap' />
        </div>
        <button className='flex border-abugelap font-bold justify-center items-center w-[280px] h-[40px] gap-3 rounded-lg border'>
          <Image
            src='/google.svg'
            width={18}
            height={18}
            alt='Logo Codingin'
            priority
          />
          Daftar dengan Google
        </button>
      </div>
    </div>
  );
}
