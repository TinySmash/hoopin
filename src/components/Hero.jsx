import React from 'react';
import shoes from './images/shoes.png';

export default function Hero() {
  return (
    <React.Fragment>
      <section className="w-full h-screen relative bg-homepage-section-1 px-10 lg:px-20">
        <div className="absolute w-4/5 sm:w-auto top-48 center-h sm:left-auto sm:translate-x-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6 ">
            Explore The New Kyrie 3
          </h1>
          <h1 className="text-4xl lg:text-[4.25rem] font-bold text-primary-blue mb-4 md:mb-10">
            Bruce LEE
          </h1>
          <button className="w-52 h-auto text-3xl text-white bg-primary-blue font-bold px-4 py-3 rounded-full">
            BUY NOW
          </button>
        </div>
        <img
          src={shoes}
          className="center-h w-[80%] sm:w-[45%] right-16 top-[60%] sm:top-48 lg:top-28 sm:left-auto sm:translate-x-0"
          alt=""
        />
      </section>
    </React.Fragment>
  );
}
