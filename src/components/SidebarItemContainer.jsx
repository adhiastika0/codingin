import React from 'react';
import SidebarItem from './SidebarItem';

function SidebarItemContainer() {
  const sidebarItems = [
    { icon: <h1>🏠</h1>, text: 'Beranda', href: '/home' },
    { icon: <h1>🧘🏻</h1>, text: 'Profil', href: '/profil' },
    { icon: <h1>🏅</h1>, text: 'Leaderboard', href: '/leaderboard' },
    { icon: <h1>📆</h1>, text: 'Hadiah Harian', href: '/hadiah-harian' },
    { icon: <h1>🎯</h1>, text: 'Misi Mingguan', href: '/misi-mingguan' },
  ];

  return (
    <div className='flex flex-col gap-2 justify-center px-6 pt-4'>
      {sidebarItems.map((item) => {
        return (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            href={item.href}
          />
        );
      })}
    </div>
  );
}

export default SidebarItemContainer;
