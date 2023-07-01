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

  const filterCategories = useSelector(
    state => state.Products.filterProducts.byCategory.categories
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
  }, [filterCategories]);

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
            {productsData.products.map(e => {
              if (
                selectedCategories.includes(e?.category) ||
                selectedCategories.includes('All')
              ) {
                return (
                  <Card
                    primaryPicture={e?.pictures?.[0]}
                    key={e?.id}
                    name={e?.name}
                    price={e?.price}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
