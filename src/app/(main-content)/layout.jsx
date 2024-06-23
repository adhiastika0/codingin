import MobileHeader from '@/components/mobile/MobileHeader';
import WebHeader from '@/components/web/WebHeader';
import WebSidebar from '@/components/web/WebSidebar';
import { ChapterProvider } from '@/hooks/ChapterContext';

export default function MainLayout({ children }) {
  return (
    <ChapterProvider>
      <MobileHeader />
      <WebHeader />
      <WebSidebar />
      <div className='flex lg:pl-[360px] lg:pt-[120px] pt-28 h-full'>
        <section className='px-6 py-4 size-full'>{children}</section>
      </div>
    </ChapterProvider>
  );
}
