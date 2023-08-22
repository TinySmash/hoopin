import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import productsData from '../../../data/productsData.json';
import { Rating } from '@mui/material';

export default function SelectedItem() {
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({ rating: 0 });

  const productColorsConvert = e => {
    switch (e) {
      case 'red':
        return 'bg-red-500';
      case 'black & red':
        return 'bg-black-and-red';
      case 'blue':
        return 'bg-blue-600';
      case 'purple':
        return 'bg-purple-600';
      case 'yellow':
        return 'bg-yellow-500';
      case 'black':
        return 'bg-black';
      case 'white':
        return 'bg-white';
      default:
        return e;
    }
  };

  useEffect(() => {
    const product = productsData.products.find(
      product => product.id === parseInt(id)
    );
    setCurrentProduct(product);
  }, [id]);

  //    USER ACTIONS 

  const [userActions, setUserActions] = useState({})

  return (
    <div className="bg-product-page w-full h-auto min-h-screen px-7 sm:px-10 lg:px-20 pt-20">
      <div className='w-full h-auto lg:flex lg:mt-5 lg:gap-5'>
          <div className="mb-6 md:mt-4 lg:w-1/2">
            <div className="w-[95%] sm:w-3/5 lg:w-[95%] mx-auto sm:w-80% md:w-50% h-auto mb-4">
              <img
                className="w-full lg:w-4/5 h-auto max-h-72 md:max-h-96 border-[3px] border-black rounded-lg mx-auto"
                src={currentProduct?.pictures?.[0]}
                loading="lazy"
              ></img>
            </div>
            {currentProduct?.pictures?.length > 1 ? (
              <ul className="w-[18rem] h-24 flex items-center gap-2 mx-auto">
                {currentProduct?.pictures?.slice(1)?.map(e => {
                  return (
                    <li
                      className="w-1/3 h-full border-2 border-black rounded-md p-1"
                      key={e}
                    >
                      <img src={e} alt="" className="w-full h-full" />
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
            {currentProduct?.colors != undefined ? (
              <div className="mt-2">
                <h1 className="text-primary-blue font-bold text-4xl underline my-3">
                  Colors
                </h1>
                <ul className="list-none flex gap-3">
                  {currentProduct?.colors?.map(e => {
                    const colorClassName = productColorsConvert(e);
                    return (
                      <li
                        className="w-14 h-14 border-2 p-1 border-black rounded-md"
                        key={e}
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
            <div className="mt-5">
              <h1 className="text-primary-blue font-bold text-4xl underline my-3">
                Add to cart
              </h1>
              <div className="w-full h-auto md:flex md:justify-between my-3 pt-3">
                <div className="add-to-cart flex gap-2 w-fit mx-auto mb-3 md:mb-0 items-center">
                  <h1 className='text-2xl font-semibold'>Size: </h1>
                  <button className="bg-primary-gray w-9 h-9 text-4xl font-bold border-4 border-gray-300 shadow-inner-lg text-center rounded-md flex items-center justify-center">
                    -
                  </button>
                  <h1 className="bg-primary-gray w-16 h-9 text-2xl font-bold border-4 border-gray-300 shadow-inner-lg text-center rounded-md flex items-center justify-center">
                    10
                  </h1>
                  <button className="bg-primary-gray w-9 h-9 text-4xl font-bold border-4 border-gray-300 shadow-inner-lg text-center rounded-md flex items-center justify-center">
                    +
                  </button>
                </div>
                <div className="add-to-cart flex gap-2 w-fit mx-auto items-center">
                  <h1 className='text-2xl font-semibold'>Qty : </h1>
                  <button className="bg-primary-gray w-9 h-9 text-4xl font-bold border-4 border-gray-300 shadow-inner-lg text-center rounded-md flex items-center justify-center">
                    -
                  </button>
                  <h1 className="bg-primary-gray w-16 h-9 text-2xl font-bold border-4 border-gray-300 shadow-inner-lg text-center rounded-md flex items-center justify-center">
                    1
                  </h1>
                  <button className="bg-primary-gray w-9 h-9 text-4xl font-bold border-4 border-gray-300 shadow-inner-lg text-center rounded-md flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
              <div className='w-4/5 sm:w-3/5 md:w-96 mx-auto'>
                  <button className="bg-emerald-500 w-full my-4 text-primary-white text-3xl sm:text-4xl font-bold px-10 py-3 rounded-xl ">
                    Add to cart
                  </button>
              <button className="mb-4 bg-primary-blue text-primary-white text-4xl font-bold px-10 py-3 rounded-xl w-full">
                Buy Now
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
