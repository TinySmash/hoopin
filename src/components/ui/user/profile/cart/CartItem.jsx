import { useSelector } from "react-redux";
import productsData from "../../../../../data/productsData.json";
import { useNavigate } from "react-router";

function CartItem(props) {
  const { cartProduct, openedCart } = props;
  const userSavedItems = useSelector((state) => state.user.savedProducts);
  const thisProduct = productsData.products.filter(
    (p) => p.id === cartProduct.productId
  )?.[0];
  const navigate = useNavigate();
  console.log(thisProduct?.pictures?.[cartProduct.color]);

  return (
    <li
      key={userSavedItems.cart?.indexOf(cartProduct)}
      className="relative w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/4 min-h-full border-2 border-black p-2 rounded-sm flex-shrink-0"
    >
      <div className="flex w-full justify-between gap-2 mb-14">
        <div className="w-7/12 h-full">
          <h1 className="mb-2">{thisProduct?.name}</h1>
          <h2 className="text-xl font-semibold">
            Size:{"  "}
            <span className="text-primary-blue text-xl">
              {cartProduct?.size}
            </span>
          </h2>
          <h2 className="text-xl font-semibold">
            Qty:{"  "}
            <span className="text-primary-blue text-xl">
              {cartProduct?.qty}
            </span>
          </h2>
          {cartProduct?.color !== null ? (
            <h2 className="text-xl font-semibold">
              Color:{"  "}
              <span className="text-primary-blue text-xl">
                {thisProduct.colors?.[cartProduct?.color]}
              </span>
            </h2>
          ) : null}
        </div>

        <img
          src={
            cartProduct?.color !== null
              ? thisProduct?.pictures?.[cartProduct.color]
              : thisProduct?.pictures[0]
          }
          alt="Picture"
          className="w-5/12 h-fit p-1 border-2 border-dark-yellow rounded-md  cursor-pointer"
          onClick={() => navigate(`/shop/product-/${cartProduct?.productId}`)}
        />
      </div>

      <div className="w-full mx-auto py-2 flex justify-evenly absolute bottom-0">
        <h1 className="text-xl font-bold">
          Total:{" "}
          <span className="text-xl text-primary-blue">
            {" "}
            {thisProduct.price * cartProduct?.qty}$
          </span>
        </h1>
        <button className=" text-primary-white text-xl font-bold px-5 py-1 bg-emerald-500 rounded-md">
          Buy
        </button>
      </div>
    </li>
  );
}

export default CartItem;
