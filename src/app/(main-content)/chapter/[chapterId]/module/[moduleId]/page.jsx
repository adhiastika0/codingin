'use client';

import BackButton from '@/components/common/button/BackButton';
import CustomLink from '@/components/common/button/CustomLink';
import { db } from '@/firebase/clientApp';
import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Module({ params }) {
  const pathname = usePathname();

  const { chapterId } = params;
  const [chapter, setChapter] = useState({});

  useEffect(() => {
    if (!chapterId) return;

    const getChapterDetails = async () => {
      const docRef = doc(db, 'chapters', chapterId);
      const result = await getDoc(docRef);
      if (result.exists()) {
        setChapter({
          modules: result.get('modules'),
          chapterTitle: result.get('title'),
        });
      } else {
        console.error('Chapter not found');
      }
    };

    getChapterDetails();
  }, [chapterId]);

  const contents = chapter.modules ? chapter.modules.contents || [] : [];
  return (
    <section className='flex flex-col gap-4'>
      <BackButton>
        <div className='flex gap-2 items-center'>
          <CustomLink borderColor={'border-darkgray'} href={`${pathname}`}>
            <h2>📖</h2>
          </CustomLink>
          <h2>Modul Belajar</h2>
        </div>
      </BackButton>
      <div className='flex flex-col gap-2 sm:gap-3 lg:gap-4'>
        <h2 className='text-blue'>Modul Ajar Video</h2>
        <iframe
          title='Video for learn --'
          src='https://www.youtube.com/embed/B9JA53mZdoQ?si=7bpOlO9rjMpY6OBB'
          allowFullScreen
          className='rounded-lg m-auto w-[100%] min-h-52 lg:w-[86.5%] lg:min-h-80 md:w-[80%] md:min-h-92 sm:min-h-80 xl:w-[91.5%] xl:min-h-[500px] min-[1440px]:min-h-[512px]'
        />
      </div>
      <div className='flex flex-col gap-1 w-full'>
        <h2 className='text-blue'>Modul Ajar Bacaan</h2>
        {contents.map((content, index) => {
          return (
            <div key={index} className='w-full'>
              <h3>{content.title}</h3>
              {content.img && (
                <Image
                  src={`/${chapter.chapterTitle}_${content.img}.svg`}
                  alt='image for module codingin'
                  width={500}
                  height={500}
                  className='m-auto'
                />
              )}
              <h3 className='text-pretty'>{content.body}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Module;
