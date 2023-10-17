import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Person, ShoppingCartRounded, Menu, Clear } from "@mui/icons-material";
import { useSelector } from "react-redux";

export default function Navbar() {
  const navbarRef = useRef("");

  const userLoginInfo = useSelector((state) => state.user.loginInfo);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        navbarRef.current?.classList?.replace(
          "bg-transparent",
          "bg-nav-primary-gray"
        );
        navbarRef.current?.classList?.replace("w-11/12", "w-full");
        navbarRef.current?.classList?.remove("mx-[4.33333%]");
        navbarRef.current?.classList?.add("backdrop-blur-md");
      } else {
        navbarRef.current?.classList?.replace(
          "bg-nav-primary-gray",
          "bg-transparent"
        );
        navbarRef.current?.classList?.replace("w-full", "w-11/12");
        navbarRef.current?.classList?.add("mx-[4.33333%]");
        navbarRef.current?.classList?.remove("backdrop-blur-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuRef = useRef("");
  let MenuOpened = false;
  function toggleMenu() {
    if (!MenuOpened) {
      mobileMenuRef.current?.classList.replace(
        "-translate-x-full",
        "-translate-x-0"
      );
      document.body.style.overflowY = "hidden";
      MenuOpened = true;
    } else {
      mobileMenuRef.current?.classList.replace(
        "-translate-x-0",
        "-translate-x-full"
      );
      document.body.style.overflowY = "auto";
      MenuOpened = false;
    }
  }

  return (
    <>
      <div
        className="w-full h-screen fixed bg-nav-primary-gray backdrop-blur-md z-50 transition-all duration-200 -translate-x-full md:hidden"
        ref={mobileMenuRef}
      >
        <Clear
          sx={{
            fontSize: "60px",
            position: "absolute",
            right: "10px",
            top: "10px",
            cursor: "pointer",
          }}
          onClick={toggleMenu}
        ></Clear>
        <ul className="list-none flex flex-col w-full h-auto mt-28">
          <li
            className="w-3/5 mx-auto border-b-2 border-primary-blue p-2 mb-10 text-3xl text-center"
            onClick={toggleMenu}
          >
            <Link to="/shop">Shop</Link>
          </li>
          <li
            className="w-3/5 mx-auto border-b-2 border-primary-blue p-2 mb-10 text-3xl text-center"
            onClick={toggleMenu}
          >
            <Link to="about">About</Link>
          </li>
          <li
            className="w-3/5 mx-auto border-b-2 border-primary-blue p-2 mb-10 text-3xl text-center"
            onClick={toggleMenu}
          >
            <Link>Support</Link>
          </li>
        </ul>
      </div>
      <header
        className="w-11/12 mx-[4.33333%] fixed flex justify-between items-center px-4 sm:px-10 md:px-12 py-[0.4rem] h-16 md:h-20 bg-transparent border-b-2 border-black z-40 transition-all duration-300"
        ref={navbarRef}
      >
        <h1
          className="text-3xl md:text-4xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Hoopin'
        </h1>
        <nav className="w-fit h-4/5 hidden md:flex gap-12 items-center text-xl font-semibold">
          <Link className="cursor-pointer" to="/shop">
            Shop
          </Link>

          <Link className="cursor-pointer" to="/about">
            About
          </Link>

          <Link className="cursor-pointer">Support</Link>
        </nav>
        <button
          className=" w-8 sm:w-10 md:hidden h-8 sm:h-10 border-2 border-black rounded-md"
          onClick={toggleMenu}
        >
          <Menu sx={{ fontSize: "28px" }}></Menu>
        </button>
        <div className="w-fit h-full relative flex gap-2 sm:gap-5 justify-end py-3">
          <button
            className="flex items-center justify-center w-fit p-[10px] h-full rounded-full bg-primary-gray cursor-pointer"
            onClick={() => {
              !userLoginInfo.isConnected
                ? navigate("/signup")
                : navigate(
                    `/user/${userLoginInfo.userId}/${userLoginInfo.username}/saved-products`
                  );
            }}
          >
            <ShoppingCartRounded></ShoppingCartRounded>
          </button>
          <button
            className="flex items-center justify-center w-fit p-[10px] h-full rounded-full bg-primary-gray cursor-pointer"
            onClick={() => {
              !userLoginInfo.isConnected
                ? navigate("/signup")
                : navigate(
                    `/user/${userLoginInfo.userId}/${userLoginInfo.username}`
                  );
            }}
          >
            <Person sx={{ fontSize: "27px" }}></Person>
          </button>
        </div>
      </header>
    </>
  );
}
