'use client';

import { auth } from '@/firebase/clientApp';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { deleteCookie } from 'cookies-next';

function Setting() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
      deleteCookie('userEmail');
      console.log('User signed out');
      router.push('/signin');
    } catch (error) {
      console.error('Error signing out: ', error);
      setError('Failed to sign out. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={logout} disabled={loading}>
        {loading ? 'Logging out...' : 'Log out'}
      </button>
    </div>
  );
}

export default Setting;
