import React from "react";
import { Link } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-7">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to Gharra Nepal.
            </h1>
            <p className="mb-8 leading-relaxed font-normal">
              Welcome to Gharra.np, your ultimate online shopping destination
              where convenience meets variety. Whether you're looking for the
              latest electronics, stylish men's and women's clothing, exquisite
              jewelry, or everyday essentials, Gharra.np has it all.
            </p>
            <div className="flex justify-center">
              <Link to={"/products"}>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  ShopNow
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mt-11 md:pl-24">
            <img
              className="object-cover object-center rounded    "
              alt="hero"
              src="./hero.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
