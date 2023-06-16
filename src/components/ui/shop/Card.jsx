import {
  Favorite,
  FavoriteBorder,
  ShoppingBagOutlined
} from '@mui/icons-material';
import React, { useState } from 'react';

export default function Card() {
  const [favProduct, setFavProduct] = useState(false);

  return (
    <div className="w-32 h-48 border-2 border-black rounded-lg px-2 pt-3 pb-1 cursor-pointer">
      <img src="" alt="" className="border border-black h-[70%] rounded-md" />
      <label className="text-sm font-semibold mb-2">Product name</label>
      <div className="w-full h-max flex justify-end mt-1">
        <Favorite
          sx={{ color: favProduct ? 'red' : 'gray', marginRight: '6px' }}
        ></Favorite>
        <ShoppingBagOutlined></ShoppingBagOutlined>
      </div>
    </div>
  );
}
