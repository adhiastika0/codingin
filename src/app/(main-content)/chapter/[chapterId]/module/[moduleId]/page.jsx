'use client';

import BackButton from '@/components/common/button/BackButton';
import CustomLink from '@/components/common/button/CustomLink';
import { useChapters } from '@/hooks/ChapterContext';
import { getModuleImagesUrl } from '@/utils/getImageUrl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Module({ params }) {
  const pathname = usePathname();
  const { chapterId } = params;
  const { chapters, isLoading, error } = useChapters();

  const chapterIndex = chapters.findIndex(
    (chapter) => chapter.id === chapterId
  );
  const chapter = chapters[chapterIndex];

  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    if (chapter) {
      const fetchImageUrls = async () => {
        const result = await getModuleImagesUrl(chapter);
        setImageUrls(result);
      };
      fetchImageUrls();
    }
  }, [chapter]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  const contents = chapter.modules.contents || [];
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
          src=''
          allowFullScreen
          className='rounded-lg m-auto w-[100%] min-h-52 lg:w-[86.5%] lg:min-h-80 md:w-[80%] md:min-h-92 sm:min-h-80 xl:w-[91.5%] xl:min-h-[500px] min-[1440px]:min-h-[512px]'
        />
      </div>
      <div className='flex flex-col gap-1 w-full'>
        <h2 className='text-blue'>Modul Ajar Bacaan</h2>
        {contents.map((content, index) => (
          <div key={index} className='w-full'>
            <h3 className='text-pretty'>{content.body}</h3>
            {content.image && (
              <div className='m-auto'>
                {typeof content.image === 'string' &&
                  imageUrls[content.image] && (
                    <Image
                      src={imageUrls[content.image]}
                      alt={`Image for module ${content.image}`}
                      width={150}
                      height={150}
                      className='m-auto'
                    />
                  )}
                {Array.isArray(content.image) &&
                  content.image.map((img, imgIndex) => (
                    <React.Fragment key={`${img}-${imgIndex}`}>
                      {imageUrls[img] && (
                        <Image
                          src={imageUrls[img]}
                          alt={`Image for module ${img}`}
                          width={150}
                          height={150}
                          className='m-auto'
                        />
                      )}
                    </React.Fragment>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Module;
