import { ArrowDropDownSharp, ArrowDropUpSharp } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import productsData from "../../../../../data/productsData.json";

function Saved() {
  const [cartItemsOpened, setCartItemsOpened] = useState(false);
  const [likedItemsOpened, setLikedItemsOpened] = useState(false);

  const userSavedItems = useSelector((state) => state.user.savedProducts);
  let priceSum = 0;

  return (
    <div className="w-full min-h-screen px-6 py-8 pt-16 md:pl-52">
      <div className="w-full h-auto mb-5">
        <h1
          className="pl-6 text-xl cursor-pointer w-full border-b border-gray-500"
          onClick={() => setCartItemsOpened(!cartItemsOpened)}
        >
          Cart items
          {cartItemsOpened ? <ArrowDropUpSharp /> : <ArrowDropDownSharp />}
        </h1>
        <div
          className={`relative max-w-full transition-all duration-200 mt-3 ${
            cartItemsOpened ? "h-72" : "cart-close"
          }`}
        >
          {userSavedItems.cart.length !== 0 ? (
            <ul
              className={`relative max-h-min overflow-x-auto flex flex-nowrap gap-2 list-none transition-all duration-200 ${
                !cartItemsOpened ? "hidden" : null
              }`}
            >
              {userSavedItems.cart.map((e) => {
                return (
                  <CartItem cartProduct={e} openedCart={cartItemsOpened} />
                );
              })}
            </ul>
          ) : (
            <h1
              className={`text-3xl text-gray-600 transition-all duration-200 ${
                !cartItemsOpened ? "hidden" : null
              }`}
            >
              Your cart is empty
            </h1>
          )}
          {userSavedItems?.cart?.length > 0 ? (
            <button
              className={`w-fit px-4 py-2 text-primary-white bg-emerald-500 mt-3 text-2xl font-semibold rounded-lg transition-all duration-200 ${
                !cartItemsOpened ? "hidden" : null
              }`}
            >
              Buy Cart:{" "}
              {userSavedItems?.cart?.map((e, index) => {
                const product = productsData.products.find(
                  (p) => p.id === e?.productId
                );
                const itemPrice = product ? product.price : 0; // Handle the case where the product is not found
                priceSum = priceSum + itemPrice;
              })}
              {priceSum.toFixed(2)} $
            </button>
          ) : null}
        </div>
      </div>
      <div className="w-full h-auto">
        <h1
          className="pl-6 text-xl cursor-pointer w-full border-b border-gray-500 transition-all duration-150"
          onClick={() => setLikedItemsOpened(!likedItemsOpened)}
        >
          Liked items
          {likedItemsOpened ? <ArrowDropUpSharp /> : <ArrowDropDownSharp />}
        </h1>
        <div
          className={`w-full overflow-x-auto transition-all duration-150 ${
            likedItemsOpened ? "h-56" : "h-0"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Saved;
