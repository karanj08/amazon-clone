import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-1">
        <div className="flex mt-2 items-center flex-grow sm:flex-grow-0 p-2">
          <Image
            src="https://links.papareact.com/f90"
            width={110}
            height={30}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center rounded-md flex-grow cursor-pointer h-10">
          <input
            type="text"
            className="h-full flex flex-grow rounded-l-md focus:outline-none p-1"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello, Karan Jain</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Retuerns</p>
            <p className="font-bold md:text-sm"> & Orders</p>
          </div>
          <div className=" relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 text-black h-4 w-4 text-center rounded-full font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-bold md:text-sm hidden md:inline mt-2">Basket</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className=" h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal</p>
      </div>
    </header>
  );
}

export default Header;

{
  /* <input
  type="text"
  className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
/>; */
}
