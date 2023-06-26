import {
  Favorite,
  FavoriteBorder,
  ShoppingBagOutlined
} from '@mui/icons-material';
import React, { useState } from 'react';

export default function Card(props) {
  const [favProduct, setFavProduct] = useState(false);

  const { pictures, name, price } = props;

  return (
    <div className="w-32 h-48 md:w-40 md:h-56 border-2 border-black rounded-lg px-2 pt-3 pb-1 cursor-pointer mb-4 mr-3 overflow-hidden">
      <img
        src={pictures?.[0]}
        alt=""
        className="border border-black w-full h-[70%] rounded-md"
      />
      <label className="text-sm font-semibold mb-2 whitespace-nowrap text-ellipsis overflow-hidden">
        {name}
      </label>
      <div className="w-full h-max flex justify-end mt-1">
        <Favorite
          sx={{ color: favProduct ? 'red' : 'gray', marginRight: '6px' }}
        ></Favorite>
        <ShoppingBagOutlined></ShoppingBagOutlined>
      </div>
    </div>
  );
}
