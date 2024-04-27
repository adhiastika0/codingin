'use client';
import { db } from '@/firebase/clientApp';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react'; // Import useEffect and useState

export default function Home() {
  const [users, setUsers] = useState([]); // State to hold fetched users

  useEffect(() => {
    const fetchUserCollection = async () => {
      const fetchedUsers = await getUserCollection();
      setUsers(fetchedUsers);
    };

    fetchUserCollection();
  }, []); // Run once on component mount

  return (
    <div>
      {/* Display fetched users here */}
      {users.map((user) => (
        <div key={user.id}>
          {/* Access user properties here, e.g., user.name, user.email */}
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>friend_count: {user.friend_count}</p>
          <p>health: {user.health}</p>
          <p>profile_picture: {user.profile_picture}</p>
          <p>rank: {user.rank}</p>
          <p>xp: {user.xp}</p>

          {/* Add more user details as needed */}
        </div>
      ))}
    </div>
  );
}

async function getUserCollection() {
  const users = await getUser();
  return users;
}

async function getUser() {
  const cookie = getCookie('userEmail');
  console.log(cookie)
  const docRef = collection(db, 'users');
  const q = query(docRef, where('email', '==', cookie));
  const docSnap = await getDocs(q);

  const users = docSnap.docs.map((doc) => doc.data());
  return users;
}
