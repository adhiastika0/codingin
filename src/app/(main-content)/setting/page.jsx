'use client';

import { auth } from '@/firebase/clientApp';
import { useRouter } from 'next/navigation';
import React from 'react';

function Setting() {
  const router = useRouter();
  const logout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
      router.push('/signin');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return <button onClick={logout}>Log out</button>;
}

export default Setting;
