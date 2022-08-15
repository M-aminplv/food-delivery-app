import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  const buttons = ["All", ...new Set(data.map((item) => item.category))];
  const prices = [...new Set(data.map((item) => item.price))];
  const [foods, setFoods] = useState(data);
  const filtercCategory = (category) => {
    if (category === "All") {
      setFoods(data);
    } else {
      setFoods(
        data.filter((item) => {
          return item.category === category;
        })
      );
    }
  };

  const filterPrice = (price) => {
    if (price === "All") {
      setFoods(data);
    } else {
      setFoods(
        data.filter((item) => {
          return item.price === price;
        })
      );
    }
  };
  console.log(foods);
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Fillter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Fillter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            {buttons.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => filtercCategory(item)}
                  className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        {/* filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            {prices.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => filterPrice(item)}
                  className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* Display foods */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4
      gap-8 pt-4">
        {foods.map((item) => {
          return (
            <div
              key={item.id}
              className="border shadow-lg rounded-lg  hover: scale-105 duration-300">
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
