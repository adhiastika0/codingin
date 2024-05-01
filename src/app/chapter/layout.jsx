import MobileHeader from '@/components/MobileHeader';
import WebHeader from '@/components/WebHeader';
import WebSidebar from '@/components/WebSidebar';

export default function ChapterLayout({ children }) {
  return (
    <>
      <MobileHeader />
      <WebHeader />
      <WebSidebar
        className={
          'hidden lg:flex lg:mt-[148.63px] lg:w-[360px] lg:fixed h-full'
        }
      />
      <main className='h-full lg:pl-[360px] lg:pt-[148.63px] max-sm:pt-[148.63px]'>
        <div className='px-6 py-4 h-full'>{children}</div>
      </main>
    </>
  );
}
