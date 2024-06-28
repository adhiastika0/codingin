'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { auth, db } from '@/firebase/clientApp'; // Assuming db is your Firestore instance
import CustomButton from '@/components/button';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { ubuntu } from '@/app/fonts/font';

async function setUser(username, email) {
  try {
    // Check if a user with the same email already exists
    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      throw new Error('Email sudah terdaftar');
    }

    // If no existing user found, proceed to add a new document
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
  } catch (error) {
    console.error('Error saving user data:', error);
    throw error; // Propagate the error to handle it in the signup process
  }
}

async function getUserCollection(email) {
  try {
    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error('Error getting user collection:', error);
    throw error;
  }
}

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account',
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !username) {
      setError('Masukkan email, password, dan username');
      return; // Exit the function if required fields are empty
    }

    // Basic email format validation (can be improved with regular expressions)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Masukkan email yang valid');
      return; // Exit the function if email is invalid
    }

    try {
      // Attempt to create user with email and password
      const res = await createUserWithEmailAndPassword(email, password);

      // If successful, attempt to add user data to Firestore
      await setUser(username, email);

      // Clear form fields and errors upon successful signup
      setUsername('');
      setEmail('');
      setPassword('');
      setError('');

      // Inform user and navigate to signin page
      alert('Berhasil Membuat Akun');
      router.push('/signin');
    } catch (error) {
      // Handle specific error for existing email
      if (error.message === 'Email sudah terdaftar') {
        setError(
          'Email sudah terdaftar. Gunakan email lain atau masuk ke akun yang sudah ada.'
        );
      } else {
        console.error('ERROR', error);
      }
    }
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

  const handleSignInWithGoogle = async () => {
    try {
      setError('');
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const q = query(
        collection(db, 'users'),
        where('email', '==', user.email)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        throw new Error('Email sudah terdaftar');
      }

      // If email is not registered, proceed to add user to Firestore
      await setUser('user', user.email);

      // Redirect or perform other operations
      router.push('/signin');

      // Retrieve user collection data if needed
      const userData = await getUserCollection(user.email);
    } catch (error) {
      // Handle errors
      console.error('Error saat login dengan Google:', error);
      if (error.message === 'Email sudah terdaftar') {
        setError(
          'Email sudah terdaftar. Gunakan email lain atau masuk ke akun yang sudah ada.'
        );
      } else {
        setError('Gagal masuk dengan Google. Silakan coba lagi.');
      }
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
          <p className={`${ubuntu.className} text-2xl font-bold`}>Codingin</p>
        </div>
        <p className='font-bold'>Daftar Akun Codingin</p>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-bold'>Username</label>
            <input
              className='flex border-darkgray justify-center items-center w-[280px] h-[40px] gap-3 rounded-lg border py-3 px-2.5'
              type='text'
              placeholder='Masukkan Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-bold'>Email</label>
            <input
              className='flex border-darkgray justify-center items-center w-[280px] h-[40px] gap-3 rounded-lg border py-3 px-2.5'
              type='email'
              placeholder='Masukkan Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-bold'>Password</label>
            <input
              className='flex border-darkgray justify-center items-center w-[280px] h-[40px] gap-3 rounded-lg border py-3 px-2.5'
              type='password'
              placeholder='Masukkan Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='w-[280px]'>{showError()}</div>

          <CustomButton
            backgroundColor={'bg-gradient-blue'}
            shadowColor={'shadow-button-blue'}
            onClick={handleSignUp}
          >
            Buat Akun
          </CustomButton>

          <p className='text-center text-xs font-bold'>
            Sudah Punya Akun?{' '}
            <a className='text-blue' href='/signin'>
              Masuk
            </a>
          </p>
        </div>
        <div className='flex items-center self-stretch gap-2'>
          <hr className='flex w-full h-px border-darkgray' />
          <p className='text-darkgray'>atau</p>
          <hr className='w-full h-px border-darkgray' />
        </div>
        <button
          onClick={handleSignInWithGoogle}
          className='flex border-darkgray font-bold justify-center items-center w-[280px] h-[40px] gap-3 rounded-lg border hover:bg-lightgray active:bg-lightgray'
        >
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
