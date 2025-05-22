import React from 'react'

import ProductCard from "./ProductCard";

// Sample data array
const data = [
  {
    id: 1,
    img: "/product__5.webp",
    name: "Fresh Tomata",
    price: "₹400/kg",
  },
  {
    id: 2,
    img: "/product__2.webp",
    name: "Crunchy Crisps",
    price: "₹300/dozen",
  },
  {
    id: 3,
    img: "/product__3.webp",
    name: "Fresh Oranges",
    price: "₹200/kg",
  },
  {
    id: 4,
    img: "/product__4.webp",
    name: "Fresh Mangoes",
    price: "₹100/kg",
  },
  {
    id: 5,
    img: "/product__5.webp",
    name: "Fresh Grapes",
    price: "₹90/kg",
  },
];

const Featuresectionbreakfast = () => {
  return (
    <div className="container pt-16">
      {/* Header Section */}
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl hover:text-accent transition duration-300 cursor-pointer">
            Breakfast & Dairy
          </h3>
          <p className="text-gray-600 mt-2">
            Buy best quality Breakfastoneline from big-basket stop near  you.
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn"> Eggs & Dairy</button>
          <button className="feature_btn text-gray-600 hover:text-accent"> Pizza </button>
          <button className="feature_btn text-gray-600 hover:text-accent "> Snacks </button>
        </div>
      </div>

      {/* Banner Image */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <img
          className="w-full h-full object-cover"
          src="/feature__2.webp"
          alt="banner"
        />
      </div>

      {/* Product Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-8">
        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};



export default Featuresectionbreakfast;
