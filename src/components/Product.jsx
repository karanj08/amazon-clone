import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlice";

// const MAX_RATING = 5;
// const MIN_RATING = 3;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
  const [hasPrime] = useState(Math.random() < 0.5);
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      category,
      image,
      description,
      rating,
    };

    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 my-3">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        className="h-[200px] w-[200px] object-contain "
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">${price}</div>

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;

// {hasPrime && (
//   <div className="flex items-center space-x-2 -mt-5">
//   <img src="https://links.papareact.com/fdw" alt="" className="w-12" />

//     <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
//   </div>
// )}
