import { Google } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Hooping from "../../images/Hoopin.png";

function SignUp() {
  return (
    <div className="w-full h-screen bg-sign-up px-3 sm:px-9 md:flex md:justify-evenly md:items-center">
      <img src={Hooping} alt="HoopinLogo" className="hidden md:flex md:w-1/4" />
      <div className="relative block w-[92%] sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-2/6 h-auto min-h-[400px] rounded-xl border-4 border-black mx-auto md:mx-0 top-24 md:top-10 backdrop-blur-md text-center sm:px-2 py-4">
        <h1 className="text-primary-blue text-4xl font-bold">SignUp</h1>
        <form
          action="submit"
          className="relative block w-full h-auto pt-6 pb-2 px-4 text-start"
        >
          <label htmlFor="email" className="text-xl xl:text-2xl ml-3">
            E-mail
          </label>
          <input
            type="text"
            name="email"
            placeholder="example@gmail.com"
            className="w-full mt-2 outline-none border rounded-md border-black h-8 sm:h-10 px-2"
          />
          <p className="text-red-600 h-0 ml-3"></p>
          <br />
          <label htmlFor="username" className="text-xl xl:text-2xl ml-3">
            Create username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Create username"
            className="w-full mt-2 outline-none border rounded-md border-black h-8 sm:h-9 px-2"
          />
          <p className="text-red-600 ml-3"></p>
          <br />
          <label htmlFor="password" className="text-xl xl:text-2xl ml-3">
            Create password
          </label>
          <input
            type="text"
            name="password"
            placeholder="password"
            className="w-full mt-2 outline-none border rounded-md border-black h-8 sm:h-9 px-2"
          />
          <p className="text-red-600 ml-3"></p>
        </form>
        <h2>
          Already have an account?
          <Link to="/user-login" className="text-primary-blue underline ml-2">
            Login
          </Link>
        </h2>
        <button className="text-center py-2 bg-primary-blue w-3/5 rounded-md mt-3 text-3xl font-bold text-primary-white">
          Signup
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
