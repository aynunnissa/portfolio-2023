'use client';

import Image from 'next/image';
import LinkItem from './LinkItem';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const MENU = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Experience',
    url: '/experience',
  },
  {
    title: 'Achievement',
    url: '/achievement',
  },
  {
    title: 'Projects',
    url: '/project',
  },
];

const Header = () => {
  const pathname = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    setIsNavbarOpen(false);
  }, [pathname]);

  const LinkItems = () => {
    return MENU.map((menu, index) => (
      <li key={`header-item-${index}`} className="w-auto">
        <LinkItem title={menu.title} url={menu.url} className="!w-full" />
      </li>
    ));
  };

  function toggleNavbarHandler() {
    setIsNavbarOpen(prev => !prev);
  }

  return (
    <nav className="header flex items-center h-[80px] px-8 sm:px-16 md:px-22 lg:px-44">
      <div className="flex items-center justify-between relative gap-4 w-full">
        <Image
          src="/main/icon.svg"
          alt="Header icon"
          width={50}
          height={50}
          priority
        />
        <div
          onmouse
          className={`navigation-link z-40 ease-in-out duration-500 ${
            isNavbarOpen ? 'right-0' : 'right-[-100%]'
          } flex items-center`}
        >
          <div className="flex-1">
            <ul className="flex flex-col md:flex-row items-center justify-center gap-8">
              <LinkItems />
            </ul>
          </div>
          <div className="flex gap-4">
            <a href="mailto:nissasetiawan4@gmail.com" target="_blank">
              <i class="ease-in-out duration-300 hover:text-blue-primary bi bi-envelope-fill text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aynun-n-7b9b17134/"
              target="_blank"
            >
              <i class="ease-in-out duration-300 hover:text-blue-primary bi bi-linkedin text-xl"></i>
            </a>
            <a href="https://github.com/aynunnissa" target="_blank">
              <i class="ease-in-out duration-300 hover:text-blue-primary bi bi-github text-xl"></i>
            </a>
            <a href="https://medium.com/@aynunnissa__" target="_blank">
              <i class="ease-in-out duration-300 hover:text-blue-primary bi bi-medium text-xl"></i>
            </a>
          </div>
        </div>
        <div></div>
        <button
          onClick={toggleNavbarHandler}
          className="z-50 absolute right-0 inline md:hidden"
        >
          <i
            className={`bi bi-list ease-in-out duration-300 text-2xl ${
              isNavbarOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></i>
        </button>
        <button
          onClick={toggleNavbarHandler}
          className="z-50 fixed right-[32px] inline md:hidden"
        >
          <i
            className={`bi bi-x-lg ease-in-out duration-300 text-2xl ${
              isNavbarOpen ? 'opacity-100' : 'opacity-0'
            }`}
          ></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
