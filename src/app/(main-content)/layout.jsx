'use client';

import MobileHeader from '@/components/mobile/MobileHeader';
import WebHeader from '@/components/web/WebHeader';
import WebSidebar from '@/components/web/WebSidebar';
import { ChapterProvider } from '@/hooks/ChapterContext';
import { usePathname } from 'next/navigation';

export default function MainLayout({ children }) {
  const pathname = usePathname();

  if (pathname.includes('/level')) {
    return (
      <ChapterProvider>
        <section className='flex flex-col bg-white size-full gap-6'>
          {children}
        </section>
      </ChapterProvider>
    );
  } else {
    return (
      <ChapterProvider>
        <MobileHeader />
        <WebHeader />
        <WebSidebar />
        <section className='lg:pl-[360px] lg:pt-[120px] pt-28 h-full'>
          <div className='px-6 py-6 min-h-full'>{children}</div>
        </section>
      </ChapterProvider>
    );
  }
}
