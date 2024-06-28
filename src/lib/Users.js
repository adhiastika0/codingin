import {
  where,
  getDocs,
  query,
  collection,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { getCookie } from 'cookies-next';
import { db } from '@/firebase/clientApp';

async function getUserByCookies() {
  try {
    const usersCollectionRef = collection(db, 'users');

    const userEmail = getCookie('userEmail');

    const userQuery = query(
      usersCollectionRef,
      where('email', '==', userEmail)
    );
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.empty) {
      return null;
    }

    const user = querySnapshot.docs[0].data();
    if (user === null) {
      throw new Error("User doesn't have account");
    }

    return { id: querySnapshot.docs[0].id, ...user };
  } catch (error) {
    console.error('Error fetching user by cookie:', error);
    return null;
  }
}

async function decreaseUserHealth(userId, newHealth) {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, { health: newHealth });
}

async function increaseUserXp(userId, newXp) {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, { xp: newXp });
}

async function increaseUserCoin(userId, newCoin) {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, { coin: newCoin });
}

export {
  getUserByCookies,
  decreaseUserHealth,
  increaseUserCoin,
  increaseUserXp,
};
