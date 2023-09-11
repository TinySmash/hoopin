import { useEffect, useRef, useState } from "react";
import Hooping from "../../images/Hoopin.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Google } from "@mui/icons-material";

function Login() {
  const errMsgLoginRef = useRef([]);
  const isUserConnected = useSelector(
    (state) => state.user.userLoginInfo?.isConnected
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserConnected) {
      return;
      navigate(`/user-${userLoginInfo.userId}/${userLoginInfo.username}`);
    }
  }, []);

  const [userLoginInfo, setUserLoginInfo] = useState({
    isConnected: false,
    usernameOrEmail: "",
    password: "",
  });

  return (
    <div className="w-full h-auto min-h-screen bg-sign-up px-3 sm:px-9 md:flex md:justify-evenly md:items-center overflow-x-hidden">
      <img src={Hooping} alt="HoopinLogo" className="hidden md:flex md:w-1/4" />
      <div className="relative block w-[92%] sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-2/6 h-auto min-h-[400px] rounded-xl border-4 border-black mx-auto md:mx-0 top-24 md:top-10 backdrop-blur-md text-center sm:px-2 py-4">
        <h1 className="text-primary-blue text-4xl font-bold">Login</h1>
        <form
          action="submit"
          className="relative block w-full h-auto pt-6 pb-2 px-4 text-start"
          //   ref={signUpForm}
        >
          <label htmlFor="usernameOrEmail" className="text-xl xl:text-2xl ml-3">
            Username or E-mail
          </label>
          <input
            type="text"
            name="email"
            placeholder="@username/example@email.com"
            className="w-full mt-2 outline-none border rounded-md border-black h-8 sm:h-10 px-2 mb-5"
            onChange={(e) => {
              setUserLoginInfo({
                ...userLoginInfo,
                usernameOrEmail: e.target.value,
              });
            }}
          />
          <p
            className="text-red-600 h-0 ml-3 hidden shake-appearing"
            ref={(e) => {
              errMsgLoginRef.current[0] = e;
            }}
          >
            Incorrect username or e-mail
          </p>
          <br />
          <label htmlFor="password" className="text-xl xl:text-2xl ml-3">
            Password
          </label>
          <input
            type="password"
            name="email"
            placeholder="Enter password"
            className="w-full mt-2 outline-none border rounded-md border-black h-8 sm:h-10 px-2 mb-5"
            onChange={(e) => {
              setUserLoginInfo({
                ...userLoginInfo,
                password: e.target.value,
              });
            }}
          />
          <p
            className="text-red-600 h-0 ml-3 hidden shake-appearing"
            ref={(e) => {
              errMsgLoginRef.current[1] = e;
            }}
          >
            Incorrect password
          </p>
          <div className="flex flex-col items-center mt-3">
            <h2>
              Don't have an account yet?
              <Link
                to="/user-signup"
                className="text-primary-blue underline ml-2"
              >
                Signup
              </Link>
            </h2>
            <button className="py-2 bg-primary-blue w-3/5 rounded-md text-3xl font-bold text-primary-white mt-3">
              Login
            </button>
          </div>
        </form>
        <hr className="border-black border-[1.5px] mt-3 w-5/6 mx-auto" />
        <button className="text-center py-2 bg-[#4c8bf5] w-4/5 rounded-md mt-3 text-lg font-bold text-primary-white">
          Continue with google
          <Google className="ml-4 -mt-1" sx={{ fontSize: "160%" }} />
        </button>
      </div>
    </div>
  );
}

export default Login;
