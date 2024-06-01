import { where, getDocs, query } from 'firebase/firestore';
import { getCookie } from 'cookies-next';

async function getUserByCookies(usersCollectionRef) {
  try {
    const userEmail = getCookie('userEmail');

    const userQuery = query(
      usersCollectionRef,
      where('email', '==', userEmail)
    );
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.empty) {
      console.log('No matching user found');
      return null;
    }

    const user = querySnapshot.docs[0].data();
    if (user === null) {
      throw new Error("User doesn't have account");
    }

    return user;
  } catch (error) {
    console.error('Error fetching user by cookie:', error);
    return null;
  }
}

export { getUserByCookies };
