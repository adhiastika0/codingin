'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CustomLink from '@/components/common/button/CustomLink';
import { useChapters } from '@/hooks/ChapterContext';
import { getImageUrl } from '@/utils/getImageUrl';
import variablePic from '../../../../public/chap_variable.svg';

export default function Chapter() {
  const { chapters, isLoading, error } = useChapters();
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls = {};
      for (const chapter of chapters) {
        if (chapter.cover) {
          const url = await getImageUrl(chapter.cover);
          urls[chapter.id] = url;
        }
      }
      setImageUrls(urls);
    };
    fetchImageUrls();
  }, [chapters]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={`grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10 xl:gap-12 md:gap-8 gap-6 row-auto w-full`}
    >
      {chapters.map((chapter, index) => (
        <div
          key={chapter.id}
          className='border border-darkgray shadow-card rounded-lg flex flex-col gap-4'
        >
          <Image
            src={imageUrls[chapter.id] || variablePic}
            alt={`chapter ${index + 1} cover`}
            width={313}
            height={167}
            priority
            className='rounded-lg w-auto h-auto'
          />
          <div className='flex flex-col gap-4 p-4 border-t border-darkgray '>
            <h2 className='font-bold text-blue'>Chapter {index + 1}</h2>
            <div>
              <h2 className='font-bold'>{chapter.title}</h2>
              <h3 className='line-clamp-2 text-ellipsis overflow-hidden'>
                {chapter.desc}
              </h3>
            </div>
            <CustomLink
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
              <h2>Mulai</h2>
            </CustomLink>
          </div>
        </div>
      ))}
    </div>
  );
}
