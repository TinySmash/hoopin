import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="w-full h-auto relative px-5 py-10 bg-gray-900">
      <div className="w-full h-auto relative flex flex-wrap justify-evenly mb-5">
        <ul className="list-none mb-6 mr-10 w-fit relative">
          <li className="title-footer text-slate-200 text-xl">Shop</li>
          <li className="text-slate-400 mt-1 left-2 transition-all duration-150 relative hover:left-3 hover:text-slate-200">
            <Link>All</Link>
          </li>
          <li className=" text-slate-400 mt-1 left-2 transition-all duration-150 relative hover:left-3 hover:text-slate-200">
            <Link>Shoes</Link>
          </li>
          <li className="text-slate-400 mt-1 left-2 transition-all duration-150 relative hover:left-3 hover:text-slate-200">
            <Link>Jerseys</Link>
          </li>
        </ul>
        <ul className="list-none mb-6 mr-10">
          <li className="title-footer text-slate-200 text-xl">Offers</li>
          <li className=" text-slate-400 mt-1 left-2 transition-all duration-150 relative hover:left-3 hover:text-slate-200">
            <Link>Curently</Link>
          </li>
          <li className=" text-slate-400 mt-1 left-2 transition-all duration-150 relative hover:left-3 hover:text-slate-200">
            <Link>Soon</Link>
          </li>
        </ul>
        <ul className="list-none mb-6 mr-10 w-fit">
          <li className="title-footer text-slate-200 text-xl">Support</li>
          <li className=" text-slate-400 mt-1 left-2 transition-all duration-150 relative hover:left-3 hover:text-slate-200">
            <Link>FAQ</Link>
          </li>
          <li className=" text-slate-400 mt-1 left-2 transition-all duration-150 relative hover:left-3 hover:text-slate-200">
            <Link>Contact us</Link>
          </li>
          <li className=" text-slate-400 mt-1 left-2 transition-all duration-150 relative hover:left-3 hover:text-slate-200">
            <Link>Feedback</Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-auto sm:flex sm:justify-between pr-10">
        <div className="w-full sm:w-1/2 md:w-1/3 h-auto flex justify-evenly mb-5">
          <Instagram
            sx={{ fontSize: '50px', color: 'gray', cursor: 'pointer' }}
          ></Instagram>
          <Twitter
            sx={{ fontSize: '50px', color: 'gray', cursor: 'pointer' }}
          ></Twitter>
          <Facebook
            sx={{ fontSize: '50px', color: 'gray', cursor: 'pointer' }}
          ></Facebook>
        </div>
        <div className="w-full mx-auto sm:mx-0 sm:w-1/2 md:w-1/3 border-t-2 border-primary-gray flex justify-between pt-2">
          <h1 className="text-slate-400">Hoopin'© 2021</h1>
          <h1 className="text-slate-400">All rights resevered</h1>
        </div>
      </div>
    </footer>
  );
}
