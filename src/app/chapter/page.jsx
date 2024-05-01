'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import CustomButton from '@/components/CustomButton';

export default function Chapter() {
  const [chapters, setChapters] = useState([]);
  // const [heart, setheart] = useState();
  // const [coin, setCoin] = useState();
  // const [xp, setXp] = useState();

  useEffect(() => {
    const q = query(collection(db, 'chapters'));
    onSnapshot(q, (querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      console.log(arr);
      setChapters(arr);
    });
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-12 md:gap-8 row-auto w-full'>
      {chapters.map((chapter, index) => (
        <div
          key={chapter.id}
          className='border border-darkgray shadow-card rounded-lg flex flex-col gap-2'
        >
          <Image
            src={'/chap_variable.svg'}
            alt='chapter "variable" for learn how to use variable in programming'
            width={313}
            height={167}
            className='w-full rounded-lg'
          />
          <div className='flex flex-col gap-2 p-4 border-t border-darkgray '>
            <h2 className='font-bold text-blue'>Chapter {index + 1}</h2>
            <h2 className='font-bold'>{chapter.title}</h2>
            <h3 className='line-clamp-2 text-ellipsis overflow-hidden'>
              {chapter.desc}
            </h3>
            <CustomButton
              href={`/chapter/${chapter.id}`}
              backgroundColor={'bg-gradient-blue'}
              shadowColor={'shadow-button-blue'}
              borderColor={'border-blue'}
            >
              <Image
                src={'/ph_play-fill.svg'}
                alt='start button for enter a chapter in codingin'
                width={14}
                height={14}
                className='sm:w-4 sm:h-4 xl:w-5 xl:h-5'
              />
              Mulai
            </CustomButton>
          </div>
        </div>
      ))}
    </div>
  );
}
