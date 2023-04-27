import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from './images/shopping-cart.png';
import person from './images/person.png';

export default function Navbar() {
  return (
    <header className="w-11/12 mx-[4.33333%] fixed flex justify-between items-center px-12 py-[0.4rem] h-16 md:h-20 border-b-2 border-black z-50">
      <h1 className="text-4xl font-bold">Hoopin'</h1>
      <nav className="w-3/4 sm:w-2/3 lg:w-1/2 h-4/5 flex items-center justify-evenly md:justify-between">
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
        <button className="w-10 md:hidden md:w-16 h-full border-2 border-black rounded-md"></button>
        <div className="w-[30%] md:w-2/5 h-full flex justify-end relative">
          <div className="w-[3.2rem] h-full rounded-full bg-primary-gray mr-[20%] border-2 cursor-pointer p-2">
            <img src={shoppingCart} alt="" />
          </div>
          <div className="w-[3.2rem] h-full rounded-full bg-primary-gray border-2 cursor-pointer p-2">
            <img src={person} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
}
