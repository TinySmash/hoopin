import { useEffect, useRef, useState } from "react";
import Hooping from "../../images/Hoopin.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Login as loginUserData } from "../../reducers/userSlice";

function Login() {
  const errMsgLoginRef = useRef([]);
  const userLoginInfo = useSelector((state) => state.user.loginInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userLoginInput, setUserLoginInput] = useState({
    isConnected: false,
    usernameOrEmail: "",
    password: "",
  });

  const login = async (e) => {
    e?.preventDefault();
    errMsgLoginRef.current.map((e) => {
      e.classList.add("hidden");
    });
    if (
      (userLoginInput.usernameOrEmail == "tinys_smash_" ||
        userLoginInput.usernameOrEmail == "islam.gueniari@gmail.com") &&
      userLoginInput.password == "islam3011"
    ) {
      setUserLoginInput({ ...userLoginInput, isConnected: true });
      dispatch(
        loginUserData({
          password: userLoginInput.password,
          isConnected: true,
        })
      );
    } else {
      if (
        userLoginInput.usernameOrEmail != "tinys_smash_" &&
        userLoginInput.usernameOrEmail != "islam.gueniari@gmail.com"
      ) {
        errMsgLoginRef.current[0]?.classList?.remove("hidden");
      }
      if (userLoginInput.password != "islam99") {
        errMsgLoginRef.current[1]?.classList?.remove("hidden");
      }
    }
  };

  useEffect(() => {
    if (userLoginInfo?.isConnected == true) {
      navigate(`/user/${userLoginInfo?.userId}/${userLoginInfo?.username}`);
    }
    console.log(userLoginInfo);
  }, [userLoginInfo]);

  return (
    <div className="w-full h-auto min-h-screen bg-sign-up px-3 sm:px-9 md:flex md:justify-evenly md:items-center overflow-x-hidden">
      <img src={Hooping} alt="HoopinLogo" className="hidden md:flex md:w-1/4" />
      <div className="relative block w-[92%] sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-2/6 h-auto min-h-[400px] rounded-xl border-4 border-black mx-auto md:mx-0 top-24 md:top-10 backdrop-blur-md text-center sm:px-2 py-4">
        <h1 className="text-primary-blue text-4xl font-bold">Login</h1>
        <form
          className="relative block w-full h-auto pt-6 pb-2 px-4 text-start"
          onSubmit={login}
          action="submit"
          //   ref={signUpForm}
        >
          <label htmlFor="usernameOrEmail" className="text-xl xl:text-2xl ml-3">
            Username or E-mail
          </label>
          <input
            type="text"
            name="email"
            placeholder="@username/example@email.com"
            className="w-full mt-2 outline-none border rounded-md border-black h-9 sm:h-10 px-2"
            onChange={(e) => {
              setUserLoginInput({
                ...userLoginInput,
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
          <div className="mt-6"></div>
          <label htmlFor="password" className="text-xl xl:text-2xl ml-3">
            Password
          </label>
          <input
            type="password"
            name="email"
            placeholder="Enter password"
            className="w-full mt-2 outline-none border rounded-md border-black h-9 sm:h-10 px-2"
            onChange={(e) => {
              setUserLoginInput({
                ...userLoginInput,
                password: e.target.value,
              });
            }}
          />
          <p
            className="text-red-600 h-0 hidden ml-3 shake-appearing"
            ref={(e) => {
              errMsgLoginRef.current[1] = e;
            }}
          >
            Incorrect password
          </p>
          <div className="flex flex-col items-center mt-8">
            <h2>
              Don't have an account yet?
              <Link to="/signup" className="text-primary-blue underline ml-2">
                Signup
              </Link>
            </h2>

            <button
              className="py-2 bg-primary-blue w-3/5 rounded-md text-3xl font-bold text-primary-white mt-3"
              onClick={() => {
                login();
              }}
              formAction="submit"
            >
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
