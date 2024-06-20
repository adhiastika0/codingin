import { db } from '@/firebase/clientApp';
import {
  collection,
  getDocs,
  updateDoc,
  increment,
  query,
  where,
} from 'firebase/firestore';

export default async function HealthUpdater() {
  try {
    const usersCollectionRef = collection(db, 'users');
    const q = query(usersCollectionRef, where('health', '<', 5));
    const usersSnapshot = await getDocs(q);

    const updatePromises = usersSnapshot.docs.map((userDoc) => {
      return updateDoc(userDoc.ref, {
        health: increment(1),
      });
    });

    await Promise.all(updatePromises);
  } catch (error) {
    console.error('Error updating health:', error);
  }
}
