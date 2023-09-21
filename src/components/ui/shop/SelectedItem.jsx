import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import productsData from "../../../data/productsData.json";
import { Rating } from "@mui/material";
import { ElectricBolt, LocalShipping, People } from "@mui/icons-material";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../reducers/userSlice";

export default function SelectedItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [currentProduct, setCurrentProduct] = useState({ rating: 0 });
  const randomDaysAgo = [
    Math.floor(Math.random() * 365),
    Math.floor(Math.random() * 365),
    Math.floor(Math.random() * 365),
  ]; // Review Date
  const [userActions, setUserActions] = useState({
    productImages: [],
    sizeUnit: [],
    pickedSize: 7.5,
    pickedQuantity: 1,
    pickedColor: 0,
    similarProducts: [],
    reviews: [
      {
        userName: "Charles",
        time:
          randomDaysAgo[0] > 60
            ? Math.floor(randomDaysAgo[0] / 30) + " months ago"
            : randomDaysAgo[0] + " days ago",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        rating: (Math.random() * 5).toFixed(1),
      },
      {
        userName: "Achraf Essousy",
        time:
          randomDaysAgo[1] > 60
            ? Math.floor(randomDaysAgo[1] / 30) + " months ago"
            : randomDaysAgo[1] + " days ago",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        rating: (Math.random() * 5).toFixed(1),
      },
      {
        userName: "Steph Curry",
        time:
          randomDaysAgo[2] > 60
            ? Math.floor(randomDaysAgo[2] / 30) + " months ago"
            : randomDaysAgo[2] + " days ago",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        rating: (Math.random() * 5).toFixed(1),
      },
    ],
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

  // Reviews

  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="bg-product-page w-full h-auto min-h-screen px-7 sm:px-10 lg:px-20 pt-20">
      <section className="w-full h-auto lg:flex lg:mt-5 lg:gap-5">
        <div className="mb-6 md:mt-4 lg:w-1/2">
          <div className="w-[95%] sm:w-3/5 lg:w-[95%] mx-auto sm:w-80% md:w-50% h-auto mb-4">
            <img
              className="w-full lg:w-4/5 h-auto max-h-72 md:max-h-96 border-[3px] border-black rounded-lg mx-auto p-2 "
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
        <div className="details pb-4 lg:w-1/2">
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
                    ? dispatch(
                        // addToCart({
                        //   productId: currentProduct?.id,
                        //   size: userActions.pickedSize,
                        //   qty: userActions.pickedQuantity,
                        //   color: userActions.pickedColor,
                        // })
                        addToCart("product")
                      )
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
          <ul className="list-none w-full md:w-1/2 mt-5 md:mt-0 overflow-x-auto md:border-r-2 border-b-2 border-black flex items-center gap-2 px-3 rounded-md">
            {userActions?.similarProducts.map((e) => {
              return (
                <li
                  key={e.id}
                  className="flex-shrink-0" // Prevents the <li> from stretching to full width
                  onClick={() => {
                    navigate(`/shop/product-/${e.id}`);
                    window.location.reload();
                  }}
                >
                  <Card
                    primaryPicture={e?.pictures?.[0]}
                    name={e?.name}
                    price={e?.price}
                  />
                </li>
              );
            })}
          </ul>
          <ul className="list-none w-full md:w-1/2 ">
            <li className="border-2 border-black h-20 rounded-md flex gap-4 px-4 py-2 items-center my-3">
              <LocalShipping sx={{ fontSize: 60 }} />
              <p className="text-sm sm:text-md">
                Shipping service for this product is available to your region at
                the moment for only{" "}
                <span className="font-semibold text-primary-blue">
                  {(Math.random() * 35 + 1).toFixed(2)}$
                </span>
              </p>
            </li>
            <li className="border-2 border-black h-20 rounded-md flex gap-4 px-4 py-2 items-center my-3">
              <People sx={{ fontSize: 60 }} />
              <p>
                <span className="font-semibold text-primary-blue">
                  {Math.floor(Math.random() * 75) + 1} people
                </span>{" "}
                bought this items and are satisfied about it
              </p>
            </li>
            <li className="border-2 border-black h-20 rounded-md flex gap-4 px-4 py-2 items-center my-3">
              <ElectricBolt sx={{ fontSize: 60 }} />
              <p>Fast shipping is not available at you region now</p>
            </li>
          </ul>
        </div>

        <div className="relative w-full h-auto border-2 border-black py-2 px-2 sm:px-4 rounded-md max-h-48 md:max-h-64 overflow-y-auto bg-mesh">
          <form
            id="reviews-form"
            action="submit"
            className="w-full h-auto sm:h-16 py-1 block sm:flex gap-2 sm:items-center"
          >
            <textarea
              type="text"
              className="w-full sm:w-2/3 md:w-full h-16 sm:h-full bg-transparent border rounded-sm border-black font-thin text-sm p-1"
            />
            <div className="w-full sm:w-fit flex justify-end gap-2 sm:block">
              <Rating
                name="simple-controlled"
                value={ratingValue}
                onChange={(event, newValue) => {
                  setRatingValue(newValue);
                }}
                size="medium"
                className=""
              />
              <button className="w-fit sm:mx-auto bg-emerald-500 rounded-sm px-3 sm:py-1 md:text-lg ">
                Submit
              </button>
            </div>
          </form>
          <ul className="list-none">
            {userActions?.reviews?.length > 0
              ? userActions?.reviews.map((e) => {
                  return (
                    <li className="w-full h-auto border border-black rounded-sm my-2 px-1 sm:px-2 md:px-4 pb-2 sm:py-2">
                      <div className="w-full flex justify-between px-2 py-1">
                        <div className="sm:flex sm:items-center sm:gap-2">
                          <h1 className="font-semibold text-lg sm:text-xl">
                            {e.userName}
                          </h1>
                          <h1 className="font-light text-sm sm:text-md text-slate-500">
                            {e.time}
                          </h1>
                        </div>
                        <Rating
                          size="small"
                          name="half-rating-read"
                          value={e.rating}
                          precision={0.1}
                          readOnly
                        ></Rating>
                      </div>
                      <p>{e.comment}</p>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </section>
    </div>
  );
}
