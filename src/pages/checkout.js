import CheckoutProduct from "@/components/CheckoutProduct";
import Header from "@/components/Header";
import { selectItems, selectTotal } from "@/slices/basketSlice";
import Image from "next/image";
import { useSelector } from "react-redux";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  console.log(items);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="http://links.papareact.com/ikj"
            width={1020}
            height={250}
            className="object-contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>
            {/* {items.map((item, i) => (
              <Image
                src={item.image}
                height={200}
                width={200}
                alt={item.title}
              />
            ))} */}
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold">${total}</span>
              </h2>

              <button className="button mt-2">Checkout</button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
