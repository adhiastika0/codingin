'use client';

import { db } from '@/firebase/clientApp';
import { getUserByCookies } from '@/lib/Users';
import { collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserCollection = async () => {
      const userRef = collection(db, 'users');

      const user = await getUserByCookies(userRef);
      setUser(user);
    };

    fetchUserCollection();
  }, []);

  if (user) {
    return (
      <div>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>friend_count: {user.friend_count}</p>
        <p>health: {user.health}</p>
        <p>profile_picture: {user.profile_picture}</p>
        <p>rank: {user.rank}</p>
        <p>xp: {user.xp}</p>
      </div>
    );
  }

  return <div></div>;
}
