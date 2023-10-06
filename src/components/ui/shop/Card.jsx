import {
  Favorite,
  FavoriteBorder,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLikeProduct } from "../../reducers/userSlice";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { primaryPicture, name, price, id } = props;
  const savedProducts = useSelector((state) => state.user.savedProducts);
  const [favProduct, setFavProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setFavProduct(savedProducts?.liked?.includes(id));
  }, [savedProducts]);

  return (
    <div className="relative w-32 h-48 md:w-40 md:h-56 bg-primary-gray border-2 border-primary-blue rounded-lg px-2 pt-3 pb-1 mb-4 mr-3 overflow-hidden">
      <Link to={`/shop/product-/${id}`} className="cursor-pointer">
        <img
          src={primaryPicture}
          alt=""
          className=" border-black w-full h-[70%] rounded-md"
          loading="lazy"
        />
        <label className="text-sm font-semibold mb-2 whitespace-nowrap text-ellipsis overflow-hidden">
          {name}
        </label>
      </Link>
      <h2 className="absolute mt-2">{price}$</h2>
      <div className="w-full h-max flex justify-end mt-1">
        <Favorite
          className={`${favProduct ? "liked-product" : "text-gray-500"}`}
          sx={{
            marginRight: "6px",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e?.preventDefault();
            dispatch(toggleLikeProduct(id));
          }}
        ></Favorite>
        <ShoppingBagOutlined></ShoppingBagOutlined>
      </div>
    </div>
  );
}
