import { ArrowDropDownSharp, ArrowDropUpSharp } from "@mui/icons-material";
import { useState } from "react";

function Saved() {
  const [cartItemsOpened, setCartItemsOpened] = useState(false);
  const [likedItemsOpened, setLikedItemsOpened] = useState(false);

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
          className={`w-full overflow-x-auto transition-all duration-150 ${
            cartItemsOpened ? "h-56" : "h-0"
          }`}
        ></div>
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
