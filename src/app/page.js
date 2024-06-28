import { db } from '@/firebase/clientApp';
import { collection, getDocs } from 'firebase/firestore';

export default async function App() {
  const users = await getUser();

  return (
    <div>
      {/* Display fetched users here */}
      {users.map((user) => (
        <div key={user.id}>
          {/* Access user properties here, e.g., user.name, user.email */}
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      ))}
      <ol>
        <li>1. aku gg</li>
      </ol>
    </div>
  );
}

async function getUser() {
  const docRef = collection(db, 'users');
  const docSnap = await getDocs(docRef);

  const users = docSnap.docs.map((doc) => doc.data());
  return users;
}
