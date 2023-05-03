import React from 'react';
import { Link } from 'react-router-dom';
import { Person, ShoppingCartRounded } from '@mui/icons-material';

export default function Navbar() {
  return (
    <header className="w-11/12 mx-[4.33333%] fixed flex justify-between items-center px-4 sm:px-12 py-[0.4rem] h-16 md:h-20 border-b-2 border-black z-50">
      <h1 className="text-3xl md:text-4xl font-bold">Hoopin'</h1>
      <nav className="w-3/4 sm:w-2/3 lg:w-1/2 h-4/5 flex items-center justify-start md:justify-between">
        <ul className="list-none hidden w-3/5 md:flex justify-between text-xl font-semibold mr-[5%]">
          <li>
            <Link>Categories</Link>
          </li>
          <li>
            <Link>Offers</Link>
          </li>
          <li>
            <Link>Support</Link>
          </li>
        </ul>
        <button className=" w-8 sm:w-10 ml-[20%] sm:ml-[30%] md:hidden h-8 sm:h-full border-2 border-black rounded-md"></button>
        <div className="w-1/3 md:w-2/5 h-full absolute right-4 sm:right-12 flex justify-end py-3">
          <div className="flex items-center justify-center w-10 md:w-[3.3rem] h-full rounded-full bg-primary-gray cursor-pointer mr-4 sm:mr-8">
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
