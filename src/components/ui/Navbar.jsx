import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Person, ShoppingCartRounded, Menu } from '@mui/icons-material';

export default function Navbar() {
  const navbarRef = useRef('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        navbarRef.current?.classList?.replace(
          'bg-transparent',
          'bg-nav-primary-gray'
        );
        navbarRef.current?.classList?.replace('w-11/12', 'w-full');
        navbarRef.current?.classList?.remove('mx-[4.33333%]');
        navbarRef.current?.classList?.add('backdrop-blur-md');
      } else {
        navbarRef.current?.classList?.replace(
          'bg-nav-primary-gray',
          'bg-transparent'
        );
        navbarRef.current?.classList?.replace('w-full', 'w-11/12');
        navbarRef.current?.classList?.add('mx-[4.33333%]');
        navbarRef.current?.classList?.remove('backdrop-blur-md');
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="w-11/12 mx-[4.33333%] fixed flex justify-between items-center px-4 sm:px-12 py-[0.4rem] h-16 md:h-20 bg-transparent border-b-2 border-black z-50 transition-all duration-300"
      ref={navbarRef}
    >
      <h1 className="text-3xl md:text-4xl font-bold">Hoopin'</h1>
      <nav className="w-3/4 sm:w-2/3 lg:w-1/2 h-4/5 flex items-center justify-start md:justify-between">
        <ul className="list-none hidden w-3/5 md:flex justify-between text-xl font-semibold mr-[5%]">
          <li>
            <Link className="cursor-pointer">Shop</Link>
          </li>
          <li>
            <Link className="cursor-pointer">Offers</Link>
          </li>
          <li>
            <Link className="cursor-pointer">Support</Link>
          </li>
        </ul>
        <button className=" w-8 sm:w-10 ml-[20%] sm:ml-[30%] md:hidden h-8 sm:h-full border-2 border-black rounded-md">
          <Menu sx={{ fontSize: '25px' }}></Menu>
        </button>
        <div className="w-1/3 md:w-2/5 h-full absolute right-4 sm:right-12 flex justify-end py-3 pl-5 sm:pl-auto">
          <div className="flex items-center justify-center w-10 md:w-[3.3rem] h-full rounded-full bg-primary-gray cursor-pointer mr-3 sm:mr-8">
            <ShoppingCartRounded></ShoppingCartRounded>
          </div>
          <div className="flex items-center justify-center  w-10 md:w-[3.3rem] h-full rounded-full bg-primary-gray cursor-pointer">
            <Person sx={{ fontSize: '30px' }}></Person>
          </div>
        </div>
      </nav>
    </header>
  );
}
