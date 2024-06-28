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

  const modules = chapter.modules || [];
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
          className='rounded-lg m-auto w-[100%] min-h-52 lg:w-[86.5%] lg:min-h-80 md:w-[80%] md:min-h-92 sm:min-h-80 xl:w-[91.5%] xl:min-h-[500px] min-[1440px]:min-h-[512px] bg-lightgray'
        />
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <h2 className='text-blue'>Modul Ajar Bacaan</h2>
        <h3 className='text-pretty text-justify'>{modules.desc}</h3>
        <h3 className='text-pretty text-justify'>{modules.opening}</h3>
        <ol className='list-inside pr-6'>
          {modules.contents.map((content, index) => (
            <div key={index} className='w-full flex flex-col gap-2 mb-6 ml-6'>
              {content.title ? (
                <li className='text-pretty text-justify'>{content.title}</li>
              ) : (
                ''
              )}
              <h3 className='text-pretty text-justify'>{content.body}</h3>
              {content.image && (
                <div className='w-full m-auto bg-[url(/background_jitter.svg)] bg-clip-border bg-contain flex border p-10'>
                  {typeof content.image === 'string' &&
                    imageUrls[content.image] && (
                      <Image
                        src={imageUrls[content.image]}
                        alt={`Image for module ${content.image}`}
                        width={300}
                        height={200}
                        className='m-auto size-auto'
                      />
                    )}
                  {Array.isArray(content.image) &&
                    content.image.map((img, imgIndex) => (
                      <React.Fragment key={`${img}-${imgIndex}`}>
                        {imageUrls[img] && (
                          <Image
                            src={imageUrls[img]}
                            alt={`Image for module ${img}`}
                            width={300}
                            height={200}
                            className='m-auto size-auto'
                          />
                        )}
                      </React.Fragment>
                    ))}
                </div>
              )}
            </div>
          ))}
        </ol>
        <h3 className='text-pretty'>{modules.ending}</h3>
      </div>
    </section>
  );
}

export default Module;
