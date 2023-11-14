import { useNavigate } from "react-router";
import Card from "../Card";
import { LocalShipping, People, ElectricBolt } from "@mui/icons-material";

function SimilarProducts(props) {
  const { products } = props;
  const navigate = useNavigate();

  return (
    <>
      <ul className="list-none w-full md:w-1/2 mt-5 md:mt-0 overflow-x-auto md:border-r-2 border-b-2 border-black flex items-center gap-2 px-3 rounded-md">
        {products.map((e) => {
          return (
            <li
              key={e.id}
              className="flex-shrink-0" // Prevents the <li> from stretching to full width
              // onClick={() => {
              //   navigate(`/shop/product-/${e.id}`);
              //   window.scrollTo(0, 0);
              // }}
            >
              <Card
                primaryPicture={e?.pictures?.[0]}
                name={e?.name}
                price={e?.price}
                id={e?.id}
              />
            </li>
          );
        })}
      </ul>
      <ul className="list-none w-full md:w-1/2 ">
        <li className="border-2 border-black h-20 rounded-md flex gap-4 px-4 py-2 items-center my-3">
          <LocalShipping sx={{ fontSize: 60 }} />
          <p className="text-sm sm:text-md lg:text-xl">
            Shipping service for this product is available to your region at the
            moment for only{" "}
            <span className="font-semibold text-primary-blue">
              {(Math.random() * 35 + 1).toFixed(2)}$
            </span>
          </p>
        </li>
        <li className="border-2 border-black h-20 rounded-md flex gap-4 px-4 py-2 items-center my-3">
          <People sx={{ fontSize: 60 }} />
          <p>
            <span className="font-semibold text-primary-blue lg:text-xl">
              {Math.floor(Math.random() * 75) + 1} people
            </span>{" "}
            bought this items and are satisfied about it
          </p>
        </li>
        <li className="border-2 border-black h-20 rounded-md flex gap-4 px-4 py-2 items-center my-3">
          <ElectricBolt sx={{ fontSize: 60 }} />
          <p className="lg:text-xl">
            Fast shipping is not available at you region now
          </p>
        </li>
      </ul>
    </>
  );
}

export default SimilarProducts;
