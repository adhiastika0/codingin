import MobileHeader from '@/components/mobile/MobileHeader';
import WebHeader from '@/components/web/WebHeader';
import WebSidebar from '@/components/web/WebSidebar';

export default function MainLayout({ children }) {
  return (
    <>
      <MobileHeader />
      <WebHeader />
      <WebSidebar
        className={'hidden lg:flex lg:mt-[162px] lg:w-[360px] lg:fixed h-full'}
      />
      <div className='h-full lg:pl-[360px] !pt-[162px]'>
        <div className='px-6 py-4 h-full'>{children}</div>
      </div>
    </>
  );
}
