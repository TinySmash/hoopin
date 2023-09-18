import { CameraAlt, Create, Person } from "@mui/icons-material";
import { useSelector } from "react-redux";

function Account() {
  const profilePicture = null;

  const user = useSelector((state) => state.user);

  return (
    <div className="w-full min-h-screen px-6 py-8 md:pl-52">
      <div className="w-full h-auto block sm:flex sm:gap-3 justify-evenly items-center pb-12">
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
            @{user.loginInfo.username}tinys_smash_
          </h1>
          <h1 className="text-xl md:text-2xl text-gray-500">
            {user.loginInfo.username}Islam El Gueniari
          </h1>
          <h1 className="text-xl md:text-2xl text-gray-500 mb-3">
            #ksoiv6********t61b
          </h1>
          <h2 className="text-lg sm:absolute sm:right-5 sm:bottom-0 text-sky-600 underline underline-offset-2 cursor-pointer">
            Modify Profile Info{" "}
            <Create sx={{ fontSize: "120%", marginLeft: "3px" }} />
          </h2>
        </div>
      </div>
      <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t-4 border-black p-2 my-5">
        <div className="py-6 border-2 border-dark-yellow rounded-md text-center col-span-2 md:col-span-1">
          <h1 className="ml-3 text-2xl font-bold mb-3 text-primary-blue">
            Balance
          </h1>
          <h1 className="ml-3 text-2xl font-bold mb-3">0.00$</h1>
        </div>
      </div>
    </div>
  );
}

export default Account;
