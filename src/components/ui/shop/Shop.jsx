import { FilterAlt } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import Filter from './Filter';
import productsData from '../../../data/productsData.json';
import { useSelector, useDispatch } from 'react-redux';

export default function Shop() {
  const [filterOpened, setFilterOpened] = useState(false);
  const filterIconRef = useRef('');
  const [initialIconRender, setInitialIconRender] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState(['All']);
  const [searchInput, setSearchInput] = useState('');
  const [priceR, setPriceR] = useState({
    enabled: false,
    min: 0,
    max: 9999999
  });
  const [sortingMethod, setSortingMethod] = useState('BY_ID');

  const filterCategories = useSelector(
    state => state.Products.filterProducts.byCategory.categories
  );
  const filterSearchInput = useSelector(
    state => state.Products.filterProducts.bySearchInput
  );
  const filterPriceRange = useSelector(
    state => state.Products.filterProducts.priceRange
  );
  const itemsSortedBy = useSelector(
    state => state.Products.filterProducts.sorted
  );

  function toggleFilter() {
    setFilterOpened(prevFilterOpened => {
      if (!prevFilterOpened) {
        document.body.style.overflowY = 'hidden';
        filterIconRef.current.classList.replace(
          'translate-x-0',
          'filter-icon-on'
        );
      } else {
        document.body.style.overflowY = 'auto';
        filterIconRef.current.classList.replace(
          'filter-icon-on',
          'translate-x-0'
        );
      }
      return !prevFilterOpened;
    });
  }

  useEffect(() => {
    setSelectedCategories(filterCategories);
    setSearchInput(filterSearchInput.input);
    setPriceR(filterPriceRange);
    setSortingMethod(itemsSortedBy);
  }, [
    filterCategories,
    filterSearchInput.input,
    filterPriceRange,
    itemsSortedBy
  ]);

  return (
    <div className="w-full h-auto min-h-screen bg-primary-gray pt-20 bg-shop">
      <div className="md:flex">
        <Filter isOpened={filterOpened} />
        <div className="w-[95%] h-auto p-4  mx-auto">
          <div
            className="flex cursor-pointer mb-5 md:hidden translate-x-0 transition-all duration-300"
            onClick={toggleFilter}
            ref={filterIconRef}
          >
            <FilterAlt></FilterAlt>
            <h1>Filter</h1>
          </div>
          <div className="items w-full h-auto relative flex justify-start flex-wrap">
            {productsData.products
              .filter(e => {
                return (
                  ((selectedCategories.includes(e.category) ||
                    selectedCategories.includes('All')) &&
                    (e.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                      !filterSearchInput.enabled) &&
                    e.price > priceR.min &&
                    e.price < priceR.max) ||
                  !priceR.enabled
                );
              })
              .sort((a, b) => {
                switch (sortingMethod) {
                  case 'BY_ALPHABET':
                    return a.name.localeCompare(b.name);
                  case 'BY_HIGHEST_PRICE':
                    return b.price - a.price;
                  case 'BY_LOWEST_PRICE':
                    return a.price - b.price;
                  case 'BY_RATING':
                    return b.rating - a.rating;
                  case 'BY_ID':
                    return a.id - b.id;
                  default:
                    return;
                }
              })
              .map(e => {
                // if (
                //   ((selectedCategories.includes(e?.category) ||
                //     selectedCategories.includes('All')) &&
                //     (e.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                //       filterSearchInput.enabled == false) &&
                //     e.price > priceR.min &&
                //     e.price < priceR.max) ||
                //   priceR.enabled == false
                // ) {
                return (
                  <Card
                    primaryPicture={e?.pictures?.[0]}
                    key={e?.id}
                    name={e?.name}
                    price={e?.price}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
