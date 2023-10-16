import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  CameraAlt,
  Create,
  Person,
  ArrowRight,
  CheckCircle,
  Instagram,
  Facebook,
  Twitter,
  DoorFrontOutlined,
} from "@mui/icons-material";

function Account() {
  const profilePicture = null;

  // length

  const user = useSelector((state) => state.user);

  return (
    <div className="w-full min-h-screen px-6 py-8 pt-12 md:pl-52">
      <div className="w-full h-auto block sm:flex sm:gap-3 justify-evenly items-center pb-12  border-b-4 border-black">
        <div>
          <div className="relative w-40 h-40  rounded-full border-2 border-black p-4 bg-gray-300 mx-auto sm:mx-0">
            {profilePicture ? (
              <img
                className="w-full h-full rounded-full relative"
                src={profilePicture}
              ></img>
            ) : (
              <Person
                sx={{ width: "100%", height: "100%", fontSize: "100%" }}
              />
            )}
            {/* <div className="absolute w-[155px] top-[24.5%] left-[5.5%] h-[65px] rounded-b-full bg-black opacity-50 p-4"></div> */}
            <button className="absolute left-1/2 -translate-x-1/2 bottom-1 z-10 px-3 bg-black/50 rounded-lg">
              <CameraAlt sx={{}} />
            </button>
          </div>
          <h1 className="w-fit py-1 px-2 text-lg bg-sky-600 rounded-full font-semibold text-primary-gray mx-auto mt-3">
            New Member
          </h1>
        </div>
        <div className="w-full relative h-32 sm:pl-8 py-5 text-center sm:text-start">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-primary-blue">
            @{user.loginInfo.username}
          </h1>
          <h1 className="text-xl md:text-2xl text-gray-500">
            {user.loginInfo.fullName.firstName +
              " " +
              user.loginInfo.fullName.familyName}
          </h1>
          <h1 className="text-xl md:text-2xl text-gray-500 mb-3">
            #
            {user.loginInfo.userId?.replace(
              user.loginInfo.userId.substring(3, 12),
              "*********"
            )}
          </h1>
          <h2 className="text-lg sm:absolute sm:right-5 sm:bottom-0 text-sky-600 underline underline-offset-2 cursor-pointer">
            Modify Profile Info{" "}
            <Create sx={{ fontSize: "120%", marginLeft: "3px" }} />
          </h2>
        </div>
      </div>
      <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-3 py-2 my-5 gap-4">
        <div className="py-6 border-2 border-dark-yellow rounded-md text-center col-start-1 col-end-3 sm:col-end-2">
          <h1 className="ml-3 text-2xl font-bold mb-3 text-primary-blue">
            Balance
          </h1>
          <h1 className="ml-3 text-2xl font-bold mb-3">0.00$</h1>
        </div>
        <div className="py-4 px-2 border-2 border-primary-blue rounded-md col-span-1">
          <ul className="list-none">
            <li className="text-sm sm:text-md">
              <CheckCircle sx={{ color: "rgb(5 150 105)" }} /> Verified e-mail
            </li>
            <li className="text-sm sm:text-md">
              <CheckCircle sx={{ color: "gray" }} /> Verified phone number
            </li>
            <li className="text-sm sm:text-md">
              <CheckCircle sx={{ color: "gray" }} /> Verified user
            </li>
          </ul>
          <Link className="block w-fit mx-auto p-2 mt-2 bg-primary-blue text-primary-gray font-bold rounded-lg">
            Complete your profile
          </Link>
        </div>
        <div className="pt-6 pb-3 px-3 border-2 border-primary-blue rounded-md text-center col-start-2 col-end-3 row-start-2 row-end-4 sm:row-start-1 sm:row-end-3">
          <h1 className="ml-3 text-xl font-bold  text-primary-blue">
            Your Cart is empty
          </h1>
          <h1 className="ml-3 text-lg text-gray-500 font-bold mb-5">0.00$</h1>
          <nav>
            <Link className="flex w-full justify-center mb-2 py-2 bg-dark-yellow text-primary-gray sm:text-xl font-bold rounded-lg">
              Go to cart <ArrowRight sx={{ fontSize: "150%" }} />
            </Link>
            <Link className="block w-full py-2 bg-primary-blue text-primary-gray text-xl font-bold rounded-lg">
              Buy cart
            </Link>
          </nav>
        </div>
        <div
          className={`py-2 sm:py-6 border-2 border-primary-blue rounded-md text-center col-start-1 row-start-3 row-end-5 sm:row-start-2 ${
            user.savedProducts.cart.length === 0
              ? "sm:row-end-4"
              : "sm:row-end-5"
          }`}
        >
          <h1 className="ml-3 text-2xl font-bold sm:mb-1 text-primary-blue">
            Shopping history
          </h1>
          {user.savedProducts.cart.length !== 0 ? null : (
            <>
              <h1 className="text-3xl font-bold mb-6">--</h1>
              <p className="text-gray-500">You have not made any action yet</p>
            </>
          )}
        </div>
        <div className="py-6 px-3 border-2 border-primary-blue rounded-md text-center col-start-2 row-span-1">
          join our extended community on social media.
          <div className="flex justify-between items-start px-2 sm:px-5 mt-4">
            <Instagram sx={{ fontSize: "160%", cursor: "pointer" }} />
            <Facebook sx={{ fontSize: "160%", cursor: "pointer" }} />
            <Twitter sx={{ fontSize: "160%", cursor: "pointer" }} />
          </div>
          <button className="block w-full mt-3 py-2 bg-red-600 text-primary-gray text-xl font-bold rounded-lg">
            Logout <DoorFrontOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
