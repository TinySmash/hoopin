import { Cancel } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterProductsByCategory,
  unfilterProductsByCategory,
  filterBySearchInput,
  unfilterBySearchInput,
  filterByPriceRange,
  sortBy
} from '../../reducers/productSlice';


export default function Filter(props) {
  const filterRef = useRef('');
  const [initialRender, setInitialRender] = useState(true);
  const categoryButtonRefs = useRef([]);

  const filterProducts = useSelector(state => state.Products.filterProducts);
  const dispatch = useDispatch();

  //   FILTER BY CATEGORY

  const filterByCategory = (category, index) => {
    console.log('filter by category function done ')
    if (filterProducts.byCategory.categories.includes(category) == false) {
      categoryButtonRefs.current[index]?.classList?.replace('px-5', 'px-10');
      dispatch(filterProductsByCategory(category));
    } else {
      categoryButtonRefs.current[index]?.classList?.replace('px-10', 'px-5');
      dispatch(unfilterProductsByCategory(category));
    }
    categoryButtonRefs.current[index]?.classList?.toggle('border-dark-yellow');
  };

  // FILTER BY SEARCH INPUT

  const [searchInput, setSearchInput] = useState('');

  let inputValue = '';

  const filterBySearch = e => {
    console.log('filter by search function done ')
    inputValue = e.target.value;
    setSearchInput(e.target.value);
    if (inputValue !== '') {
      dispatch(filterBySearchInput(inputValue));
    } else if (inputValue == '') {
      dispatch(unfilterBySearchInput());
    }
  };

  const searchInputRef = useRef('');

  const clearSearchInput = () => {
    searchInputRef.current.value = '';
    setSearchInput('');
    inputValue = '';
    dispatch(unfilterBySearchInput());
  };

  //  FILTER BY PRICE RANGE

  const [priceRange, setPriceRange] = useState({ min: 0, max: 9999999 });

  const filterByPrice = (e, pole) => {
    console.log('filter by price function done ')
    const priceInputValue = e.target.value;
    if (pole == 'min') {
      if (priceInputValue == '') {
        setPriceRange({ ...priceRange, min: 0 });
        dispatch(filterByPriceRange({ min: 0, max: priceRange.max }));
      } else {
        setPriceRange({ ...priceRange, min: priceInputValue });
        dispatch(
          filterByPriceRange({ min: priceInputValue, max: priceRange.max })
        );
      }
    } else if ((pole = 'max')) {
      if (priceInputValue == '') {
        setPriceRange({ ...priceRange, max: 9999999 });
        dispatch(filterByPriceRange({ min: priceRange.min, max: 9999999 }));
      } else {
        setPriceRange({ ...priceRange, max: priceInputValue });
        dispatch(
          filterByPriceRange({ min: priceRange.min, max: priceInputValue })
        );
      }
    }
  };

  //   SORT BY

  const sortItems = by => {
    console.log('filter by sorting method function done ')
    dispatch(sortBy(by));
  };

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return; // Skip the effect on the initial render
    }

    if (props?.isOpened === true) {
      filterRef.current.classList?.remove('-translate-x-full');
    } else if (props?.isOpened === false) {
      filterRef.current.classList?.add('-translate-x-full');
    }
  }, [props]);

  return (
    <div
      className="w-56 sm:w-64 fixed md:relative border-2 border-black border-l-0 md:border-t-0 h-screen md:h-auto bg-primary-gray z-30 rounded-md backdrop-blur-lg py-4 px-1 -translate-x-full md:-translate-x-0 transition-all duration-300"
      ref={filterRef}
    >
      <div className="search-bar w-5/6 h-7 border border-black rounded-md mx-auto mb-6">
        <input
          type="text"
          className="w-5/6 h-full active:outline-none outline-none bg-transparent p-1"
          placeholder="search product name"
          ref={searchInputRef}
          value={searchInput}
          onChange={e => filterBySearch(e)}
        />
        {searchInput !== '' ? (
          <button
            className="w-1/6 h-full bg-transparent cursor-pointer outline-none"
            onClick={clearSearchInput}
          >
            <Cancel sx={{ fontSize: 20, color: 'gray' }}></Cancel>
          </button>
        ) : null}
      </div>
      <h1 className="ml-3 text-xl font-bold mb-3 text-primary-blue">
        Categories
      </h1>
      <ul className="w-full h-auto list-none mb-6">
        <li
          className="w-full h-auto relative px-5 py-1 rounded-lg mb-2 border-2 border-black transition-all duration-150 hover:px-10 hover:border-dark-yellow cursor-pointer"
          ref={e => (categoryButtonRefs.current[0] = e)}
          onClick={() => filterByCategory('shoes', 0)}
        >
          Shoes
        </li>
        <li
          className="w-full h-auto relative px-5 py-1 rounded-lg mb-2 border-2 border-black transition-all duration-150 hover:px-10 hover:border-dark-yellow cursor-pointer"
          ref={e => (categoryButtonRefs.current[1] = e)}
          onClick={() => filterByCategory('basketballs', 1)}
        >
          Basketballs
        </li>
        <li
          className="w-full h-auto relative px-5 py-1 rounded-lg mb-2 border-2 border-black transition-all duration-150 hover:px-10 hover:border-dark-yellow cursor-pointer"
          ref={e => (categoryButtonRefs.current[2] = e)}
          onClick={() => filterByCategory('jerseys', 2)}
        >
          Jerseys
        </li>
        <li
          className="w-full h-auto relative px-5 py-1 rounded-lg mb-2 border-2 border-black transition-all duration-150 hover:px-10 hover:border-dark-yellow cursor-pointer"
          ref={e => (categoryButtonRefs.current[3] = e)}
          onClick={() => filterByCategory('clothes & equipment', 3)}
        >
          clothes & equipment
        </li>
      </ul>
      <h1 className="ml-3 text-xl font-bold mb-3 text-primary-blue">Price</h1>
      <div className="w-full h-auto flex justify-evenly mb-6">
        <input
          type="text"
          className="w-24 h-auto border border-black bg-transparent px-2 placeholder:text-neutral-600 outline-none rounded-md"
          placeholder="min"
          onChange={e => filterByPrice(e, 'min')}
        />
        <input
          type="text"
          className="w-24 h-auto border border-black bg-transparent px-2 placeholder:text-neutral-600 outline-none rounded-md"
          placeholder="max"
          onChange={e => filterByPrice(e, 'max')}
        />
      </div>
      <h1 className="ml-3 text-xl font-bold mb-3 text-primary-blue">Sort by</h1>
      <select
        className="text-center w-full h-auto bg-transparent outline-none border border-black rounded-md"
        onChange={e => sortItems(e.target.value)}
      >
        <option value="BY_ID">None</option>
        <option value="BY_ALPHABET">Alphabet</option>
        <option value="BY_HIGHEST_PRICE">highest Price</option>
        <option value="BY_LOWEST_PRICE">Lowest Price</option>
        <option value="BY_RATING">Rating</option>
      </select>
    </div>
  );
}
