import { Google } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Hooping from "../../images/Hoopin.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { SignUp as signUserDataUp } from "../../reducers/userSlice";

function SignUp() {
  const userLoginInfo = useSelector((state) => state.user.loginInfo);
  const signUpForm = useRef("");
  const usernameForm = useRef("");
  const errMsgRef = useRef([]);
  let processPart = 1;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (userLoginInfo?.isConnected == true) {
      navigate(`/user-${userLoginInfo.userId}/${userLoginInfo.username}`);
    }
  }, []);

  const [userSignUpInfo, setUserSignUpInfo] = useState({
    isConnected: false,
    userId: null,
    fullName: {
      firstName: "",
      familyName: "",
    },
    username: "",
    email: "",
    password: "",
  });

  const usernameRegex = /^[a-zA-Z0-9._]{8,16}$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex =
    /^(?=(?:[^!@#$%^&*()_+~-]*[!@#$%^&*()_+~-]){0,2})(?=(?:\D*\d){2,6}).{8,16}$/;
  const fullnameRegex = /^^(?=.{8,24}$)[a-zA-Z]+(?:\s[a-zA-Z]+){0,3}$/;

  //  GENERATE ID

  function generateRandomString(length) {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
    return result;
  }

  const submitSignInInfo = (e) => {
    e.preventDefault();
    switch (processPart) {
      case 1:
        if (
          ((fullnameRegex.test(
            userSignUpInfo?.fullName?.firstName.trim() +
              " " +
              userSignUpInfo?.fullName?.familyName.trim()
          ) ==
            emailRegex.test(userSignUpInfo.email)) ==
            passwordRegex.test(userSignUpInfo.password)) ==
          true
        ) {
          processPart = 2;
          signUpForm?.current.classList?.replace("block", "hidden");
          usernameForm?.current.classList?.replace("hidden", "block");
          errMsgRef.current.map((e) => {
            e.classList.add("hidden");
          });
        } else {
          if (
            fullnameRegex.test(
              userSignUpInfo?.fullName?.firstName.trim() +
                " " +
                userSignUpInfo?.fullName?.familyName.trim()
            ) == false
          ) {
            errMsgRef.current[0].classList?.remove("hidden");
          }
          if (emailRegex.test(userSignUpInfo?.email) == false) {
            errMsgRef.current[1].classList?.remove("hidden");
          }
          if (passwordRegex.test(userSignUpInfo?.password) == false) {
            errMsgRef.current[2].classList?.remove("hidden");
          }
        }
      case 2:
        if (usernameRegex.test(userSignUpInfo.username) == true) {
          const randomUserId = generateRandomString(16);
          setUserSignUpInfo({
            ...userSignUpInfo,
            userId: randomUserId,
            isConnected: true,
          });
          dispatch(signUserDataUp(userSignUpInfo));
          navigate(`/user/${userSignUpInfo.userId}/${userSignUpInfo.username}`);
          errMsgRef.current[3].classList?.add("hidden");
        } else {
          errMsgRef.current[3].classList?.remove("hidden");
        }
    }
  };

  return (
    <div className="w-full h-auto min-h-screen bg-sign-up px-3 sm:px-9 md:flex md:justify-evenly md:items-center overflow-x-hidden">
      <img src={Hooping} alt="HoopinLogo" className="hidden md:flex md:w-1/4" />
      <div className="relative block w-[92%] sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-2/6 h-auto min-h-[400px] rounded-xl border-4 border-black mx-auto md:mx-0 top-24 md:top-10 backdrop-blur-md text-center sm:px-2 py-4">
        <h1 className="text-primary-blue text-4xl font-bold">SignUp</h1>
        <form
          onSubmit={submitSignInInfo}
          className="relative block w-full h-auto pt-6 pb-2 px-4 text-start"
          ref={signUpForm}
        >
          <label htmlFor="fullname" className="text-xl xl:text-2xl ml-3 mr-80">
            Fullname
          </label>
          <div className="w-full flex justify-between mt-2">
            <input
              type="text"
              name="fname"
              placeholder="first name"
              className="w-[48%] outline-none border rounded-md border-black h-8 sm:h-9 px-2"
              onChange={(e) => {
                setUserSignUpInfo({
                  ...userSignUpInfo,
                  fullName: {
                    ...userSignUpInfo?.fullName,
                    firstName: e.target.value,
                  },
                });
              }}
            />
            <input
              type="text"
              name="lname"
              placeholder="last name"
              className="w-[48%] outline-none border rounded-md border-black h-8 sm:h-9 px-2"
              onChange={(e) => {
                setUserSignUpInfo({
                  ...userSignUpInfo,
                  fullName: {
                    ...userSignUpInfo?.fullName,
                    familyName: e.target.value,
                  },
                });
              }}
            />
          </div>
          <p
            className="text-red-600 h-0 ml-3 hidden shake-appearing"
            ref={(e) => {
              errMsgRef.current[0] = e;
            }}
          >
            Please enter valid fullname
          </p>
          <br />
          <label htmlFor="email" className="text-xl xl:text-2xl ml-3">
            E-mail
          </label>
          <input
            type="text"
            name="email"
            placeholder="example@email.com"
            className="w-full mt-2 outline-none border rounded-md border-black h-8 sm:h-10 px-2 mb-5"
            onChange={(e) => {
              setUserSignUpInfo({
                ...userSignUpInfo,
                email: e.target.value,
              });
            }}
          />
          <p
            className="text-red-600 h-0 ml-3 hidden shake-appearing"
            ref={(e) => {
              errMsgRef.current[1] = e;
            }}
          >
            Please enter valid email
          </p>
          <br />
          <label htmlFor="password" className="text-xl xl:text-2xl ml-3">
            Create password
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full mt-2 outline-none border rounded-md border-black h-8 sm:h-9 px-2"
            onChange={(e) => {
              setUserSignUpInfo({
                ...userSignUpInfo,
                password: e.target.value,
              });
            }}
          />
          <p
            className="text-red-600 hidden shake-appearing ml-3"
            ref={(e) => {
              errMsgRef.current[2] = e;
            }}
          >
            Passwords should contain 8 to 16 characters with 2-6 numbers
          </p>
        </form>
        <form
          onSubmit={submitSignInInfo}
          className="hidden relative w-full h-auto pt-6 pb-2 px-4 text-start appearing-left"
          ref={usernameForm}
        >
          <label htmlFor="username" className="text-xl xl:text-2xl ml-3">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="@username"
            className="w-full mt-2 outline-none border rounded-md border-black h-8 sm:h-10 px-2"
            onChange={(e) => {
              setUserSignUpInfo({
                ...userSignUpInfo,
                username: e.target.value,
              });
            }}
          />
          <p
            className="text-red-600 hidden shake-appearing ml-3 my-2"
            ref={(e) => {
              errMsgRef.current[3] = e;
            }}
          >
            Username must be 8 to 16 characters and contain only letters,
            digits, periods, and underscores.
          </p>
        </form>
        <h2>
          Already have an account?
          <Link to="/user-login" className="text-primary-blue underline ml-2">
            Login
          </Link>
        </h2>
        <button
          className="text-center py-2 bg-primary-blue w-3/5 rounded-md mt-3 text-3xl font-bold text-primary-white"
          onClick={() => {
            submitSignInInfo();
          }}
        >
          Submit
        </button>
        <hr className="border-black border-[1.5px] mt-3 w-5/6 mx-auto" />
        <button className="text-center py-2 bg-[#4c8bf5] w-4/5 rounded-md mt-3 text-lg font-bold text-primary-white">
          Continue with google
          <Google className="ml-4 -mt-1" sx={{ fontSize: "160%" }} />
        </button>
      </div>
    </div>
  );
}

export default SignUp;
