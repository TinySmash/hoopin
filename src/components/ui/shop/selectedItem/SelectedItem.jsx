import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import productsData from "../../../../data/productsData.json";
import { Rating } from "@mui/material";
import { CheckCircle, DisabledByDefault, Favorite } from "@mui/icons-material";
import SimilarProducts from "./SimilarProducts";
import { useSelector, useDispatch } from "react-redux";
import { toggleLikeProduct, addToCart } from "../../../reducers/userSlice";
import ProductReviews from "./ProductReviews";
import Alert from "../../Alert";

export default function SelectedItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCartAlertRef = useRef("");

  const user = useSelector((state) => state.user);

  const [currentProduct, setCurrentProduct] = useState({ rating: 0 });

  const [userActions, setUserActions] = useState({
    productImages: [],
    sizeUnit: [],
    pickedSize: 7.5,
    pickedQuantity: 1,
    pickedColor: 0,
    similarProducts: [],
  });

  const productColorsConvert = (e) => {
    switch (e) {
      case "red":
        return "bg-red-500";
      case "black & red":
        return "bg-black-and-red";
      case "blue":
        return "bg-blue-600";
      case "purple":
        return "bg-purple-600";
      case "yellow":
        return "bg-yellow-500";
      case "black":
        return "bg-black";
      case "white":
        return "bg-white";
      default:
        return e;
    }
  };

  useEffect(() => {
    const product = productsData.products.find(
      (product) => product.id === parseInt(id)
    );

    if (!product) {
      // Product not found, navigate to PageNotFound route
      navigate("/notFound");
      return;
    }

    setCurrentProduct(product);
    const newSimilarItem = productsData.products.filter((e) => {
      return e.category !== product.category;
    });
    const newSize = product?.category === "jerseys" ? "M" : 8;
    const newSizeUnit =
      product?.category === "jerseys"
        ? productsData?.sizes?.jerseys
        : productsData?.sizes?.shoes;

    const filteredCategoryProducts = productsData.products.filter((e) => {
      return e.category === product.category && e.id !== product.id;
    });
    filteredCategoryProducts.push(
      newSimilarItem[Math.floor(Math.random() * newSimilarItem.length)]
    );

    setUserActions({
      ...userActions,
      pickedQuantity: 1,
      pickedColor: 0,
      pickedSize: newSize,
      sizeUnit: newSizeUnit,
      productImages: [...product?.pictures],
      similarProducts: filteredCategoryProducts,
    });
  }, [id]);

  //    USER ACTIONS

  // console.log(userActions.sizeUnit?.indexOf(userActions.pickedSize));

  const incrementSize = () => {
    let sizeIndex = userActions.sizeUnit?.indexOf(userActions.pickedSize);
    if (userActions.sizeUnit[sizeIndex + 1] != undefined) {
      setUserActions({
        ...userActions,
        pickedSize: userActions.sizeUnit[sizeIndex + 1],
      });
    }
  };

  const decrementSize = () => {
    let sizeIndex = userActions.sizeUnit?.indexOf(userActions.pickedSize);
    if (userActions.sizeUnit[sizeIndex - 1] != undefined) {
      setUserActions({
        ...userActions,
        pickedSize: userActions.sizeUnit[sizeIndex - 1],
      });
    }
  };

  const incrementQty = () => {
    let qty = userActions?.pickedQuantity;
    if (qty < 6) {
      setUserActions({
        ...userActions,
        pickedQuantity: qty + 1,
      });
    }
  };

  const decrementQty = () => {
    let qty = userActions?.pickedQuantity;
    if (qty > 1) {
      setUserActions({
        ...userActions,
        pickedQuantity: qty - 1,
      });
    }
  };

  const swapElements = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };

  const pickProductDisplay = (pic) => {
    let picIndex = currentProduct?.pictures?.indexOf(pic);
    if (
      picIndex > currentProduct?.colors?.length ||
      pic == userActions?.productImages?.[0]
    ) {
      return;
    } else {
      let currentImages = userActions?.productImages;
      swapElements(currentImages, 0, currentImages?.indexOf(pic));
      setUserActions({ ...userActions, productImages: currentImages });
      if (
        currentProduct?.pictures?.indexOf(pic) >
        currentProduct?.colors?.length - 1
      ) {
        setUserActions({ ...userActions, pickedColor: 0 });
      } else {
        setUserActions({ ...userActions, pickedColor: picIndex });
      }
    }
  };

  //   ADD TO CART

  const [addToCartSuccess, setAddToCartSuccess] = useState(true);
  const [addToCartItem, setAddToCartItem] = useState({
    productId: currentProduct?.id,
    size: userActions.pickedSize,
    qty: userActions.pickedQuantity,
    color: currentProduct?.colors != undefined ? userActions.pickedColor : null,
  });

  useEffect(() => {
    setAddToCartItem({
      productId: currentProduct?.id,
      size: userActions.pickedSize,
      qty: userActions.pickedQuantity,
      color:
        currentProduct?.colors != undefined ? userActions.pickedColor : null,
    });
  }, [id, userActions, currentProduct]);

  //  ADD TO CART

  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertParams, setAlertsParams] = useState({ type: "", message: "" });

  const addProductToCart = () => {
    try {
      dispatch(addToCart(addToCartItem));

      setDisplayAlert(false);
      setTimeout(() => {
        setAlertsParams({ type: "success", message: "item added to cart" });
        setDisplayAlert(true);
        setTimeout(() => {
          setDisplayAlert(false);
        }, 4000);
      }, 200);
    } catch (e) {
      setDisplayAlert(false);
      setTimeout(() => {
        setAlertsParams({
          type: "error",
          message: "Error while adding to cart",
        });
        setDisplayAlert(true);
        setTimeout(() => {
          setDisplayAlert(false);
        }, 4000);
      }, 200);
    }
  };

  //  FAVORITE PRODUCT

  const [favProduct, setFavProduct] = useState(false);

  useEffect(() => {
    if (user?.savedProducts?.liked?.includes(id)) {
      setFavProduct(true);
    } else {
      setFavProduct(false);
    }
  }, [user, id]);

  return (
    <div className="bg-product-page w-full h-auto min-h-screen px-7 sm:px-10 lg:px-20 pt-20">
      {displayAlert && (
        <Alert type={alertParams.type} message={alertParams.message} />
      )}
      <h1
        className="w-fit h-36 flex items-start gap-3 px-3 py-2 fixed -bottom-40 right-3 border-2 border-emerald-800 bg-emerald-500 text-3xl text-primary-white font-bold rounded-md z-50 transition-all duration-300"
        ref={addToCartAlertRef}
      >
        {addToCartSuccess ? (
          <CheckCircle sx={{ fontSize: "120%" }} />
        ) : (
          <DisabledByDefault sx={{ fontSize: "120%" }} />
        )}
        {addToCartSuccess ? "Added to cart" : "Cart Update Failed"}
      </h1>
      <section className="w-full h-auto min-h-screen lg:flex lg:mt-5 lg:gap-5">
        <div className="mb-6 md:mt-4 lg:w-1/2">
          <div className="w-[95%] h-auto sm:h-80 md:h-auto sm:w-auto md:w-3/5 lg:w-[95%] mx-auto md:w-50%  mb-4">
            <img
              className="w-full sm:w-auto md:w-full lg:w-4/5 h-auto max-h-80 md:max-h-96 border-[3px] border-black rounded-lg mx-auto p-2 "
              src={userActions?.productImages?.[0]}
              loading="lazy"
            ></img>
          </div>
          {currentProduct?.pictures?.length > 1 ? (
            <ul className="w-[18rem] h-24 flex items-center gap-2 mx-auto">
              {userActions?.productImages?.slice(1)?.map((imgLink) => {
                return (
                  <li
                    className="w-1/3 h-full border-2 border-black rounded-md p-1 cursor-pointer"
                    key={imgLink}
                    onClick={() => {
                      pickProductDisplay(imgLink);
                    }}
                  >
                    <img src={imgLink} alt="" className="w-full h-full" />
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
        <div className="details pb-4 lg:w-1/2 lg:pt-3">
          <Favorite
            className={`${favProduct ? "liked-product" : "text-gray-500"}`}
            sx={{
              marginRight: "6px",
              fontSize: "200%",
              marginBottom: "7px",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch(toggleLikeProduct(id));
            }}
          />
          <h1 className="font-bold text-3xl mb-1">{currentProduct?.name}</h1>
          <div className="bg-primary-gray flex w-fit gap-2 items-center inset-0 rounded-lg backdrop-blur-3xl shadow-md shadow-primary-gray mb-2">
            <Rating
              name="half-rating-read"
              value={currentProduct?.rating}
              precision={0.1}
              readOnly
            ></Rating>
            <h1 className="text-lg">{currentProduct?.rating}</h1>
          </div>
          <h1 className="font-bold text-2xl text-primary-blue mb-2">
            {currentProduct?.price}$
          </h1>
          <p className="text-lg">{currentProduct?.description}</p>

          <div className="mt-5">
            <h1 className="text-primary-blue font-bold text-4xl underline my-3">
              Get this item
            </h1>
            <div className="w-full h-auto md:flex md:justify-between my-3 pt-3">
              <div className="add-to-cart flex gap-2 w-fit mx-auto mb-3 md:mb-0 items-center">
                <h1 className="text-2xl font-semibold">Size: </h1>
                <button
                  className="bg-primary-gray w-9 h-9 text-4xl font-bold border-4 border-gray-300 shadow-inner-lg text-center rounded-md flex items-center justify-center"
                  onClick={decrementSize}
                >
                  -
                </button>
                <h1 className="bg-primary-gray w-16 h-9 text-2xl font-bold border-4 border-gray-300 shadow-inner-lg text-center rounded-md flex items-center justify-center">
                  {userActions?.pickedSize}
                </h1>
                <button
                  className="bg-primary-gray w-9 h-9 text-4xl font-bold border-4 border-gray-300 shadow-inner-lg text-center rounded-md flex items-center justify-center"
                  onClick={incrementSize}
                >
                  +
                </button>
              </div>
              <div className="add-to-cart flex gap-2 w-fit mx-auto items-center">
                <h1 className="text-2xl font-semibold">Qty : </h1>
                <button
                  className="bg-primary-gray w-9 h-9 text-4xl font-bold border-4 border-gray-300 shadow-inner-lg text-center rounded-md flex items-center justify-center"
                  onClick={decrementQty}
                >
                  -
                </button>
                <h1 className="bg-primary-gray w-16 h-9 text-2xl font-bold border-4 border-gray-300 shadow-inner-lg text-center rounded-md flex items-center justify-center">
                  {userActions?.pickedQuantity}
                </h1>
                <button
                  className="bg-primary-gray w-9 h-9 text-4xl font-bold border-4 border-gray-300 shadow-inner-lg text-center rounded-md flex items-center justify-center"
                  onClick={incrementQty}
                >
                  +
                </button>
              </div>
            </div>
            {currentProduct?.colors != undefined ? (
              <div className="mt-2">
                <h1 className="text-primary-blue font-bold text-3xl underline my-3">
                  Colors
                </h1>
                <ul className="list-none h-20 flex gap-3 items-center">
                  {currentProduct?.colors?.map((e) => {
                    const colorClassName = productColorsConvert(e);
                    // console.log(currentProduct?.pictures?.[currentProduct?.colors?.indexOf(e)])
                    return (
                      <li
                        className={`w-14 h-14 p-1 transition-all duration-100 cursor-pointer ${
                          currentProduct?.colors?.indexOf(e) !=
                          userActions?.pickedColor
                            ? "w-14 h-14 border-2 border-black"
                            : "w-[60px] h-[60px] border-4 border-dark-yellow"
                        } rounded-md`}
                        key={e}
                        onClick={() => {
                          pickProductDisplay(
                            currentProduct?.pictures?.[
                              currentProduct?.colors?.indexOf(e)
                            ]
                          );
                        }}
                      >
                        <div
                          className={`w-full h-full ${colorClassName} rounded-md`}
                        ></div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}

            <div className="w-4/5 sm:w-3/5 md:w-full mx-auto md:flex md:gap-3 md:my-5">
              <button
                className="bg-emerald-500 my-6 md:my-0 w-full lg:my-0 text-primary-white text-3xl xl:text-4xl font-bold px-8 py-3 rounded-xl lg:w-1/2"
                onClick={() => {
                  user.loginInfo.isConnected
                    ? addProductToCart()
                    : navigate("/Login");
                }}
              >
                Add to cart
              </button>
              <button
                className=" bg-primary-blue text-primary-white text-4xl font-bold px-10 py-3 rounded-xl w-full lg:w-1/2"
                onClick={() => {
                  !user.loginInfo.isConnected
                    ? navigate("/Login")
                    : navigate(`user-cart`);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-auto min-h-screen py-10 ">
        <div className="w-full md:flex gap-5 mb-6">
          <SimilarProducts products={userActions?.similarProducts} />
        </div>
        <ProductReviews />
      </section>
    </div>
  );
}
