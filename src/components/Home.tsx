import React from "react";
import Items from "../utils/data.json";
import FeaturedItems from "./FeaturedItems";

const Home = () => {
  return (
    <div className="w-full h-screen mt-2 flex flex-col justify-center items-center bg-gray-200">
      <h1 className="text-5xl font-mono mb-10">
        <span className="border-b-2 border-r-2 border-black py-2">
          Featured
        </span>
        <span className="border-t-2 border-black py-2">products</span>
      </h1>
      <ul className="flex flex-row flex-wrap justify-between ml-6">
        {Items.data.map((item: any) => (
          <div className="p-6 justify-center">
            <FeaturedItems
              key={item.id}
              id={item.id}
              category={item.categories.map((cat: any) => cat.name)}
              name={item.name}
              price={item.price.toFixed(2)}
              image={item.main_image}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
