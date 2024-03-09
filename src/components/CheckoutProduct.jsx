import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
}) {
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-sm my-2 line-clamp-3">{description}</p>
        <p>${price}</p>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button">Add to Basket</button>
        <button className="button">Remove from Basket</button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
