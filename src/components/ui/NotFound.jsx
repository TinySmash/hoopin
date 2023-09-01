import { ArrowLeft, SportsBasketball } from "@mui/icons-material";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-primary-gray">
      <div className="relative top-32 md:top-56 w-fit mx-auto text-center leading-[5]">
        <h1 className="font-semibold w-fit mx-auto tracking-[0.2em] text-7xl md:text-8xl lg:text-9xl flex items-center text-primary-blue">
          4{" "}
          <SportsBasketball
            sx={{
              fontSize: 80,
              border: "3px dashed black",
              borderRadius: "50%",
              //   color: "black",
            }}
          />{" "}
          4
        </h1>
        <h1 className="font-semibold text-[2rem] md:text-6xl lg:text-7xl mt-5 leading-normal">
          There is noting here
        </h1>
        <p className="leading-normal px-6">
          There is no page found in this url, click below to go back to homepage
          or search for another page :)
        </p>
      </div>
      <button
        className="absolute bottom-5 left-4 px-4 py-2 bg-dark-yellow font-medium text-2xl md:text-3xl w-fit rounded-md"
        onClick={() => navigate("/")}
      >
        <ArrowLeft sx={{ fontSize: 30, marginTop: "-3px" }} />
        Back to homepage
      </button>
    </div>
  );
}

export default NotFound;
