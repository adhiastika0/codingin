import MobileHeader from '@/components/MobileHeader';
import WebHeader from '@/components/WebHeader';
import WebSidebar from '@/components/WebSidebar';

export default function ChapterLayout({ children }) {
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50'>
        <WebHeader />
        <MobileHeader />
      </div>

      <div className='flex flex-col mt-[150px]'>
        <div className='flex'>
          <WebSidebar className='hidden md:flex lg:w-[360px] md:w-[280px]' />
          <div className='w-full lg:pl-[384px] md:pl-[304px] pl-6 py-4 pr-6'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
