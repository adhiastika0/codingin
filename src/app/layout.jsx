import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Codingin',
  description: 'Coding with gamification',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='p-6'>{children}</main>
      </body>
    </html>
  );
}