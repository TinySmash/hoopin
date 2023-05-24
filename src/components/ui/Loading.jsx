import { SportsBasketball } from '@mui/icons-material';
import React from 'react';

export default function Loading() {
  return (
    <div class="w-full h-screen bg-primary-gray flex justify-center items-center">
      <div class="container p-2 w-20 h-20 md:w-30 md:h-30 border-2 border-primary-blue rounded-full flex justify-center items-center animate-spin animate-bounce">
        <div class="w-full h-full bg-primary-gray border-2 border-primary-blue pt-[75%] rounded-[50%] flex justify-center items-center shadow-black shadow-inner">
          <SportsBasketball sx={{ fontSize: '60px' }}></SportsBasketball>
        </div>
      </div>
    </div>
  );
}
