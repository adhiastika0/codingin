'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '@/firebase/clientApp';
import CustomButton from '@/components/button';
import { setCookie } from 'cookies-next';
import { ubuntu } from '@/app/fonts/font';


export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account',
  });

  const getUserCollection = async (userEmail) => {
    if (!userEmail) {
      return null;
    }

    try {
      const collectionRef = collection(db, 'users');
      const q = query(collectionRef, where('email', '==', userEmail));
      const querySnapshot = await getDocs(q);

      return querySnapshot;
    } catch (error) {
      console.error('Error getting user collection:', error);
      return null;
    }
  };

  const handleSignIn = async (e) => {
    // Basic email format validation (can be improved with regular expressions)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Masukkan format email yang benar. Contoh: user@example.com');
      return; // Exit the function if email is invalid
    }

    if (!email || !password) {
      setError('Masukkan email dan password');
      return; // Exit the function if required fields are empty
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const userEmail = userCredential.user.email;
        console.log(userEmail);
        setCookie('userEmail', userEmail);
        alert('berhasil login');
        router.push('/beranda');

        getUserCollection(userEmail)
          .then((querySnapshot) => {
            if (querySnapshot) {
              console.log('User collection:', querySnapshot);
              querySnapshot.forEach((doc) => {
                // Akses data dokumen
                const docData = doc.data();

                // Tampilkan nilai dari key 'email' dan 'rank'
                console.log('Email:', docData.email);
                console.log('Rank:', docData.rank);

                // Lakukan operasi lain dengan data dokumen jika diperlukan
              });
              // Lakukan operasi lain dengan querySnapshot jika diperlukan
            }
          })
          .catch((error) => {
            console.error('Error getting user collection:', error);
            setError(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(
          'Terdapat kesalahan pada email atau password. Silahkan coba lagi'
        );
      });
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Autentikasi berhasil, lakukan sesuatu seperti redirect atau menampilkan pesan sukses
      const user = result.user;
      console.log('Login berhasil dengan Google:', user);
      setCookie('userEmail', user.email);

      console.log(user.email);

      // Lakukan redirect atau operasi lainnya
      router.push('/home');

      getUserCollection(user.email)
        .then((querySnapshot) => {
          if (querySnapshot) {
            console.log('User collection:', querySnapshot);
            querySnapshot.forEach((doc) => {
              // Akses data dokumen
              const docData = doc.data();

              // Tampilkan nilai dari key 'email' dan 'rank'
              console.log('Email:', docData.email);
              console.log('Rank:', docData.rank);

              // Lakukan operasi lain dengan data dokumen jika diperlukan
            });
            // Lakukan operasi lain dengan querySnapshot jika diperlukan
          }
        })
        .catch((error) => {
          console.error('Error getting user collection:', error);
          setError(error);
        });
    } catch (error) {
      // Tangani error
      console.error('Error saat login dengan Google:', error);
      setError(error);
    }
  };

  function showError() {
    if (error) {
      return (
        <p className="flex text-red-600 text-xs font-semibold self-stretch">
          {error}
        </p>
      );
    }
    return null;
  }

  return (
    <div className="App flex flex-col items-center justify-center gap-6 h-screen">
      <div className="flex flex-col justify-center items-center gap-6 w-[280px]">
        <div className="flex gap-2">
          <Image
            src="/logo.svg"
            width={37.5}
            height={30}
            alt="Logo Codingin"
            priority
          />
          <p className={`${ubuntu.className} text-2xl font-bold`}>Codingin</p>
        </div>
        <p className="font-bold">Masuk Akun Codingin</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Email</label>
            <input
              className="flex border-darkgray justify-center items-center w-[280px] h-[40px] gap-3 rounded-lg border py-3 px-2.5"
              type="email"
              placeholder="Masukkan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Password</label>
            <input
              className="flex border-darkgray justify-center items-center w-[280px] h-[40px] gap-3 rounded-lg border py-3 px-2.5"
              type="password"
              placeholder="Masukkan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a
              className="text-blue text-right text-xs font-bold"
              href="/forgot-password"
            >
              Lupa Password?
            </a>
          </div>

          {showError()}

          <CustomButton
            backgroundColor={'bg-gradient-blue'}
            shadowColor={'shadow-button-blue'}
            onClick={handleSignIn}
          >
            Masuk Akun
          </CustomButton>

          <p className="text-center text-xs font-bold">
            Belum Punya Akun?{' '}
            <a className="text-blue" href="/signup">
              Daftar
            </a>
          </p>
        </div>
        <div className="flex items-center self-stretch gap-2">
          <hr className="flex w-full h-px border-darkgray" />
          <p className="text-darkgray">atau</p>
          <hr className="w-full h-px border-darkgray" />
        </div>
        <button
          onClick={handleSignInWithGoogle}
          className="flex border-darkgray font-bold justify-center items-center w-[280px] h-[40px] gap-3 rounded-lg border hover:bg-lightgray active:bg-lightgray"
        >
          <Image
            src="/google.svg"
            width={18}
            height={18}
            alt="Logo Codingin"
            priority
          />
          Masuk dengan Google
        </button>
      </div>
    </div>
  );
}
