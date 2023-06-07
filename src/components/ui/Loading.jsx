import React from 'react';
import BasketballIcon from '../images/ball-basketball.png';

export default function Loading() {
  return (
    <div class="w-full h-screen bg-primary-gray flex justify-center items-center">
      <div class="container p-2 w-20 h-20 md:w-30 md:h-30 border-2 border-primary-blue rounded-full flex justify-center items-center animate-spin">
        <div class="w-full h-full  bg-primary-gray border-2 border-primary-blue rounded-full shadow-black shadow-inner">
          <img src={BasketballIcon} className="w-full h-full "></img>
        </div>
      </div>
    </div>
  );
}
