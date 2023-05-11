import React from 'react';
import shoes from '../images/shoes.png';
import sec2 from '../images/sec2.png';
// import { useDispatch, useSelector } from 'react-redux';
// import { Login, Logout, SignUp } from '../reducers/userSlice';

export default function Hero() {
  // const dispatch = useDispatch();
  // const user = useSelector(state => state.user);

  // function handleSignUp() {
  //   dispatch(
  //     SignUp({
  //       fullName: 'islam Elgueniari',
  //       username: 'tinysmash',
  //       email: 'islam.gueniari@gmail.com',
  //       password: 'TinySmash2005'
  //     })
  //   );
  // }

  return (
    <React.Fragment>
      <section className="w-full h-screen relative bg-homepage-section-1 px-10 lg:px-20">
        <div className=" absolute center-h w-4/5 sm:w-auto top-28 sm:top-48 mx-auto sm:left-auto sm:translate-x-0">
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
          className="absolute center-h w-[90%] sm:w-[45%] right-16 top-[50%] sm:top-48 lg:top-28 sm:left-auto sm:translate-x-0"
          alt=""
        />
      </section>
      <section className="w-full min-h-screen relative px-10 lg:px-20 bg-primary-gray bg-homepage-section-2">
        <img
          src={sec2}
          className="w-full sm:w-4/6 md:w-1/2 relative center-h top-16 mb-10"
          alt=""
        />
        <ul className="list-none w-full px-2 py-3">
          <li className=" w-[90%] h-56 border-2 border-black mb-6 mx-auto rounded-3xl text-center px-2 py-5 bg-nav-primary-gray backdrop-blur-md">
            <h1 className="text-dark-yellow text-3xl font-bold mb-4">
              Comfort
            </h1>
            <p>
              Stylish and comfortable shoe designed for basketball players. Its
              cushioned sole and innovative technology offer superior support ,
              and a soft experience on the court
            </p>
          </li>
          <li className="w-[90%] h-56 border-2 border-black mb-6 mx-auto rounded-3xl text-center px-2 py-5 bg-nav-primary-gray backdrop-blur-md">
            <h1 className="text-dark-yellow text-3xl font-bold mb-4">Hybrid</h1>
            <p>
              {' '}
              Blends elements of Kyrie Irving's signature shoe with the iconic
              design of Kobe Bryant's shoes. This fusion results in a unique
              shoe that offers both comfort and style for basketball players.
            </p>
          </li>
          <li className=" w-[90%] h-56 border-2 border-black mb-6 mx-auto rounded-3xl text-center px-2 py-5 bg-nav-primary-gray backdrop-blur-md">
            <h1 className="text-dark-yellow text-3xl font-bold mb-4">
              Challenge
            </h1>
            <p>
              The Nike Kyrie 3 Bruce Lee edition challenges players to raise
              their game with its unique design and cutting-edge technology,
              inspiring them to push their limits on the court.
            </p>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}
