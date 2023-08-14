import React from 'react';
import shoes from '../images/shoes.png';
import sec2 from '../images/sec2.png';
import sec3 from '../images/sec3.png';


export default function Hero() {


  return (
    <React.Fragment>
      <section className="w-full h-screen relative bg-homepage-section-1 px-7 sm:px-10 lg:px-20">
        <div className="absolute center-h md:uncenter-h w-4/5 sm:w-auto top-28 sm:top-48 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-6 ">
            Explore The New Kyrie 3
          </h1>
          <h1 className="text-5xl lg:text-[4.25rem] font-bold text-primary-blue mb-4 md:mb-10">
            Bruce LEE
          </h1>
          <button className="w-52 h-auto text-3xl text-white bg-primary-blue font-bold px-4 py-3 rounded-full">
            BUY NOW
          </button>
        </div>
        <img
          src={shoes}
          className="absolute center-h w-[90%] sm:w-[45%] sm:right-16 top-[50%] sm:top-48 lg:top-28 sm:uncenter-h mb-8"
          alt=""
          loading="lazy"
        />
      </section>
      <section className="bg-homepage-section-2 bg-primary-gray">
        <section className="w-full min-h-screen md:h-screen relative px-10 pb-5 lg:px-20  md:flex md:justify-between md:items-center">
          <img
            src={sec2}
            className="w-full mx-auto sm:w-4/6 md:w-1/2 relative md:absolute center-h md:uncenter-h md:top-auto md:right-0 mb-0 md:mb-0 "
            alt=""
            loading="lazy"
          />
          <ul className="list-none w-full relative md:w-1/2 lg:w-2/5">
            {/* md:top-[84pex] */}
            <li className=" w-[90%]  h-56 md:h-fit border-2 border-black mb-6 md:mb-3 mx-auto rounded-3xl text-center px-2 py-5 md:py-3 bg-nav-primary-gray backdrop-blur-md">
              <h1 className="text-dark-yellow text-3xl font-bold mb-4">
                Comfort
              </h1>
              <p className="text-sm sm:text-lg ">
                Stylish and comfortable shoe designed for basketball players.
                Its cushioned sole and innovative technology offer superior
                support , and a soft experience on the court
              </p>
            </li>
            <li className="w-[90%] h-56 md:h-fit border-2 border-black mb-6 md:mb-3 mx-auto rounded-3xl text-center px-2 py-5 md:py-3 bg-nav-primary-gray backdrop-blur-md">
              <h1 className="text-dark-yellow text-3xl font-bold mb-4">
                Hybrid
              </h1>
              <p className="text-sm sm:text-lg ">
                {' '}
                Blends elements of Kyrie Irving's signature shoe with the iconic
                design of Kobe Bryant's shoes. This fusion results in a unique
                shoe that offers both comfort and style for basketball.
              </p>
            </li>
            <li className=" w-[90%] h-56 md:h-fit border-2 border-black mx-auto rounded-3xl text-center px-2 py-5 md:py-3 bg-nav-primary-gray backdrop-blur-md">
              <h1 className="text-dark-yellow text-3xl font-bold mb-4">
                Challenge
              </h1>
              <p className="text-sm sm:text-lg ">
                The Nike Kyrie 3 Bruce Lee edition challenges players to raise
                their game with its unique design and cutting-edge technology,
                inspiring them to push their limits on the court.
              </p>
            </li>
          </ul>
        </section>
        <section className="w-full h-auto md:h-screen relative px-7 sm:px-10 lg:px-20 py-5 ">
          <div className="md:absolute w-full md:w-1/2 right-10 lg:right-20 my-5 md:my-0 md:top-20 p-2 sm:p-5 md:bg-nav-primary-gray md:backdrop-blur-md rounded-lg text-center md:text-start">
            <h1 className="text-3xl sm:text-5xl text-dark-yellow font-semibold mb-5">
              Nike Exclusive for the first time
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-relaxed mb-8">
              Kyrie 3 Mamba mentality. <br />
              <span className="underline underline-offset-4">120$</span>
            </h2>
            <p className="hidden md:flex">
              The famous quote by Bruce Lee, "Be yourself. Express yourself.
              Have faith in yourself," strongly influenced Kyrie Irving and Kobe
              Bryant. It inspired the Mamba Mentality and is reflected in the
              KYRIE 3 Mamba Mentality shoes, paying tribute to Bruce Lee and
              Kobe. The colorway and design symbolize their connection,
              featuring elements like Bruce Lee's colors and a samurai-inspired
              pattern. The shoe's tongue bears the Kyrobe logo, combining Bryant
              and Irving's logos.
            </p>
          </div>
          <img
            src={sec3}
            className="w-2/3 md:w-1/3 relative mx-auto md:mx-0 md:top-20 rounded-md"
            alt=""
            loading="lazy"
          />
        </section>
      </section>
      <section className="w-full h-screen px-7 sm:px-10 lg:px-20 py-5 bg-primary-gray bg-homepage-section-4 relative">
        <div className="w-full text-center center-both px-2 sm:px-10 lg:px-20">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug md:leading-[1.5] mb-7">
            Discover more basketball shoes & other at{' '}
            <span className="text-primary-blue text-3xl sm:text-4xl md:text-6xl">
              Hoopin'
            </span>{' '}
            <br /> <span className="text-dark-yellow">+ Special offers</span>
          </h1>
          <button className="text-3xl text-white bg-primary-blue font-bold px-6 py-3 rounded-full">
            Explore Now
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}
