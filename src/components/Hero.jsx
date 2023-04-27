import React from 'react';
import shoes from './images/shoes.png';

export default function Hero() {
  return (
    <React.Fragment>
      <section className="w-full h-screen relative bg-homepage-section-1 px-20">
        <div className="absolute top-48">
          <h1 className="text-5xl font-bold mb-2">Explore The New Kyrie 3</h1>
          <h1 className="text-[4.25rem] font-bold text-primary-blue mb-2">
            Bruce LEE
          </h1>
          <button className="w-52 h-auto text-3xl text-white bg-primary-blue font-bold px-4 py-3 rounded-full">
            BUY NOW
          </button>
        </div>
        <img src={shoes} className="absolute w-[45%] right-16 top-28" alt="" />
      </section>
    </React.Fragment>
  );
}
