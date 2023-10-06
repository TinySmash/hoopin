import { useState } from "react";
import { Rating } from "@mui/material";

function ProductReviews() {
  const [ratingValue, setRatingValue] = useState(0);
  const randomDaysAgo = [
    Math.floor(Math.random() * 365),
    Math.floor(Math.random() * 365),
    Math.floor(Math.random() * 365),
  ]; // Review Date

  const [reviews, setReviews] = useState([
    {
      userName: "Charles",
      time:
        randomDaysAgo[0] > 60
          ? Math.floor(randomDaysAgo[0] / 30) + " months ago"
          : randomDaysAgo[0] + " days ago",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      rating: (Math.random() * 5).toFixed(1),
    },
    {
      userName: "Achraf Essousy",
      time:
        randomDaysAgo[1] > 60
          ? Math.floor(randomDaysAgo[1] / 30) + " months ago"
          : randomDaysAgo[1] + " days ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      rating: (Math.random() * 5).toFixed(1),
    },
    {
      userName: "Steph Curry",
      time:
        randomDaysAgo[2] > 60
          ? Math.floor(randomDaysAgo[2] / 30) + " months ago"
          : randomDaysAgo[2] + " days ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      rating: (Math.random() * 5).toFixed(1),
    },
  ]);

  return (
    <div className="relative w-full h-auto border-2 border-black py-2 px-2 sm:px-4 rounded-md max-h-48 md:max-h-64 overflow-y-auto bg-mesh">
      <form
        id="reviews-form"
        action="submit"
        className="w-full h-auto sm:h-16 py-1 block sm:flex gap-2 sm:items-center"
      >
        <textarea
          type="text"
          className="w-full sm:w-2/3 md:w-full h-16 sm:h-full bg-transparent border rounded-sm border-black font-thin text-sm p-1 placeholder:text-gray-600"
          placeholder="Give a small feedback"
        />
        <div className="w-full sm:w-fit flex justify-end gap-2 sm:block">
          <Rating
            name="simple-controlled"
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
            size="medium"
            className=""
          />
          <button className="w-fit sm:mx-auto bg-emerald-500 rounded-sm px-3 sm:py-1 md:text-lg ">
            Submit
          </button>
        </div>
      </form>
      <ul className="list-none">
        {reviews?.length > 0
          ? reviews.map((e) => {
              return (
                <li
                  className="w-full h-auto border border-black rounded-sm my-2 px-1 sm:px-2 md:px-4 pb-2 sm:py-2"
                  key={reviews.indexOf(e)}
                >
                  <div className="w-full flex justify-between px-2 py-1">
                    <div className="sm:flex sm:items-center sm:gap-2">
                      <h1 className="font-semibold text-lg sm:text-xl">
                        {e.userName}
                      </h1>
                      <h1 className="font-light text-sm sm:text-md text-slate-500">
                        {e.time}
                      </h1>
                    </div>
                    <Rating
                      size="small"
                      name="half-rating-read"
                      value={e.rating}
                      precision={0.1}
                      readOnly
                    ></Rating>
                  </div>
                  <p>{e.comment}</p>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default ProductReviews;
