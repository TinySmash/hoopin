import { Search } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react';

export default function Filter(props) {
  const filterRef = useRef('');
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    console.log(props.isOpened);
    if (initialRender) {
      setInitialRender(false);
      return; // Skip the effect on the initial render
    }

    if (props?.isOpened === true) {
      filterRef.current.classList?.replace(
        '-translate-x-full',
        '-translate-x-0'
      );
    } else if (props?.isOpened === false) {
      filterRef.current.classList?.replace(
        '-translate-x-0',
        '-translate-x-full'
      );
    }
  }, [props]);

  return (
    <div
      className="w-64 fixed border-2 border-black border-l-0 md:border-t-0 h-screen bg-primary-gray z-50 rounded-md backdrop-blur-lg py-4 px-1 -translate-x-full md:-translate-x-0 transition-all duration-300"
      ref={filterRef}
    >
      <div className="search-bar w-5/6 h-7 border border-black rounded-md mx-auto mb-6">
        <input
          type="text"
          className="w-5/6 h-full active:outline-none outline-none bg-transparent p-1"
          placeholder="search product name"
        />
        <button className="w-1/6 h-full bg-transparent cursor-pointer">
          <Search sx={{ fontSize: 23 }}></Search>
        </button>
      </div>
      <h1 className="ml-3 text-xl font-bold mb-3 text-primary-blue">
        Categories
      </h1>
      <ul className="w-full h-auto list-none mb-6">
        <li className="w-full h-auto relative px-5 py-1 rounded-lg mb-2 border-2 border-black transition-all duration-150 hover:px-10 hover:border-dark-yellow cursor-pointer">
          Shoes
        </li>
        <li className="w-full h-auto relative px-5 py-1 rounded-lg mb-2 border-2 border-black transition-all duration-150 hover:px-10 hover:border-dark-yellow cursor-pointer">
          Basketballs
        </li>
        <li className="w-full h-auto relative px-5 py-1 rounded-lg mb-2 border-2 border-black transition-all duration-150 hover:px-10 hover:border-dark-yellow cursor-pointer">
          Jerseys
        </li>
        <li className="w-full h-auto relative px-5 py-1 rounded-lg mb-2 border-2 border-black transition-all duration-150 hover:px-10 hover:border-dark-yellow cursor-pointer">
          clothes & equipement
        </li>
      </ul>
      <h1 className="ml-3 text-xl font-bold mb-3 text-primary-blue">Price</h1>
      <div className="w-full h-auto flex justify-evenly mb-6">
        <input
          type="text"
          className="w-24 h-auto border border-black bg-transparent px-2 placeholder:text-neutral-600 outline-none rounded-md"
          placeholder="min"
        />
        <input
          type="text"
          className="w-24 h-auto border border-black bg-transparent px-2 placeholder:text-neutral-600 outline-none rounded-md"
          placeholder="max"
        />
      </div>
      <h1 className="ml-3 text-xl font-bold mb-3 text-primary-blue">Sort by</h1>
      <select className="text-center w-full h-auto bg-transparent outline-none border border-black rounded-md">
        <option className="active:bg-black" value="option1">
          Alphabet
        </option>
        <option value="option2">highest Price</option>
        <option value="option3">Lowest Price</option>
        <option value="option4">Rating</option>
      </select>
    </div>
  );
}
