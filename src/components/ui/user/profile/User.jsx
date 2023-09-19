import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router";
import { Link } from "react-router-dom";
import {
  ContactSupport,
  History,
  Settings,
  Support,
  Menu,
  Bookmark,
  Inbox,
} from "@mui/icons-material";

function User() {
  const userLoginInfo = useSelector((state) => state.user.loginInfo);
  const navigate = useNavigate();
  const userMenuRef = useRef([]);
  const menuIconRef = useRef();
  const navItemsRef = useRef([]);
  const [selectedNav, setSelectedNav] = useState(0);

  // useEffect(() => {
  //   if (!userLoginInfo.isConnected) {
  //     navigate("/signup");
  //   } else {
  //     navigate("account");
  //   }
  // }, [userLoginInfo]);

  const toggleUserMenu = () => {
    userMenuRef.current.classList.toggle("-translate-x-full");
    menuIconRef.current.classList.toggle("usermenu-icon-on");
    document.body.classList.toggle("overflow-y-hidden");
  };

  const userNav = (index) => {};

  return (
    <div className="w-full h-auto bg-primary-gray relative pt-16 md:pt-20">
      <div
        className="w-40 fixed sm:w-44 md:w-48 border-2 border-t-0 border-black border-l-0 md:border-t-0 h-screen bg-primary-gray z-30 rounded-md backdrop-blur-lg py-4 px-1 -translate-x-full md:translate-x-0 transition-all duration-200"
        ref={userMenuRef}
      >
        <nav className="flex flex-col w-full px-2">
          <h1 className="ml-3 text-xl font-bold mb-3 text-primary-blue">
            Profile
          </h1>
          <Link
            to="account"
            className={`w-full h-8 md:text-lg md:h-9 rounded-sm border-2 ${
              selectedNav == 0
                ? "border-dark-yellow px-5"
                : "border-gray-400 px-3"
            } mb-2 py-1 flex items-center gap-1 transition-all duration-200 hover:border-dark-yellow hover:px-5`}
            ref={(e) => (navItemsRef.current[0] = e)}
            onClick={() => setSelectedNav(0)}
          >
            <Settings sx={{ fontSize: "140%" }} />
            Account
          </Link>
          <Link
            to="saved-products"
            className={`w-full h-8 md:text-lg md:h-9 rounded-sm border-2 ${
              selectedNav == 1
                ? "border-dark-yellow px-5"
                : "border-gray-400 px-3"
            } mb-2 py-1 flex items-center gap-1 transition-all duration-200 hover:border-dark-yellow hover:px-5`}
            ref={(e) => (navItemsRef.current[1] = e)}
            onClick={() => setSelectedNav(1)}
          >
            <Bookmark sx={{ fontSize: "140%" }} />
            Saved
          </Link>
          <Link
            to="history"
            className={`w-full h-8 md:text-lg md:h-9 rounded-sm border-2 ${
              selectedNav == 3
                ? "border-dark-yellow px-5"
                : "border-gray-400 px-3"
            } mb-2 py-1 flex items-center gap-1 transition-all duration-200 hover:border-dark-yellow hover:px-5`}
            ref={(e) => (navItemsRef.current[3] = e)}
            onClick={() => setSelectedNav(3)}
          >
            <History sx={{ fontSize: "140%" }} />
            History
          </Link>
          <Link
            to="inbox"
            className={`w-full h-8 md:text-lg md:h-9 rounded-sm border-2 ${
              selectedNav == 2
                ? "border-dark-yellow px-5"
                : "border-gray-400 px-3"
            } mb-4 py-1 flex items-center gap-1 transition-all duration-200 hover:border-dark-yellow hover:px-5`}
            ref={(e) => (navItemsRef.current[2] = e)}
            onClick={() => setSelectedNav(2)}
          >
            <Inbox sx={{ fontSize: "140%" }} />
            Inbox
          </Link>
          <h1 className="ml-3 text-xl font-bold mb-3 text-primary-blue">
            Support
          </h1>
          <Link
            to="help"
            className={`w-full h-8 md:text-lg md:h-9 rounded-sm border-2 ${
              selectedNav == 4
                ? "border-dark-yellow px-5"
                : "border-gray-400 px-3"
            } mb-2 py-1 flex items-center gap-1 transition-all duration-200 hover:border-dark-yellow hover:px-5`}
            ref={(e) => (navItemsRef.current[4] = e)}
            onClick={() => setSelectedNav(4)}
          >
            <Support sx={{ fontSize: "140%" }} />
            Help
          </Link>
          <Link
            to="contact-support"
            className={`w-full h-8 md:text-lg md:h-9 rounded-sm border-2 ${
              selectedNav == 5
                ? "border-dark-yellow px-5"
                : "border-gray-400 px-3"
            } mb-2 py-1 flex items-center gap-1 transition-all duration-200 hover:border-dark-yellow hover:px-5`}
            ref={(e) => (navItemsRef.current[5] = e)}
            onClick={() => setSelectedNav(5)}
          >
            <ContactSupport sx={{ fontSize: "140%" }} />
            Contact us
          </Link>
        </nav>
      </div>
      <div className="w-full h-auto min-h-screen relative">
        <button
          className="flex md:hidden fixed ml-2 mt-4 items-center text-xl transition-all duration-200 z-50"
          onClick={toggleUserMenu}
          ref={menuIconRef}
        >
          <Menu sx={{ fontSize: "150%" }} />
          Menu
        </button>
        <Outlet />
      </div>
    </div>
  );
}

export default User;
