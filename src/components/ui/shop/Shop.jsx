import { FilterAlt } from '@mui/icons-material';
import React, { useRef, useState } from 'react';
import Card from './Card';
import Filter from './Filter';

export default function Shop() {
  const [filterOpened, setFilterOpened] = useState(false);
  const filterIconRef = useRef('');
  const [initialIconRender, setInitialIconRender] = useState(true);

  // function toggleFilter() {
  //   setFilterOpened(!filterOpened);
  //   if (filterOpened === false) {
  //     filterIconRef.current.classList?.replace(
  //       'translate-x-0',
  //       'translate-x-64'
  //     );
  //   } else if (filterOpened === true) {
  //     filterIconRef.current.classList?.replace(
  //       'translate-x-64',
  //       'translate-x-0'
  //     );
  //   }
  // }

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
  console.log(filterOpened);

  return (
    <>
      <div className="w-full h-screen bg-primary-gray relative pt-20">
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
          <div className="items w-full h-auto relative flex justify-between flex-wrap">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
