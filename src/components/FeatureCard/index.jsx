import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ cards = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-7 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Category
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Find your category
          </p>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row -m-4">
          {cards.map((card) => {
            return (
              <Link
                to={`/category/${card}`}
                className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer"
              >
                <div className="border border-gray-200 p-6 rounded-lg bg-slate-200">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2 capitalize">
                    {card}
                  </h2>
                  <p className="leading-relaxed text-base"></p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
