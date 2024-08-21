import React from "react";
import { Link } from "react-router-dom";

const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-2xl ">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link to={"/"}>
            <h1 className="ml-3 text-xl italic font-semibold">
              Gharra <span>.np</span>
            </h1>
          </Link>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
          {navigation.map((navigation) => {
            return (
              <Link
                to={navigation.path}
                className="mr-5 hover:underline underline-offset-4 decoration-sky-500"
              >
                {navigation.name}
              </Link>
            );
          })}
        </nav>
        <Link to={"/cart"}>
          <button className="inline-flex items-center   text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Go to Cart
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
