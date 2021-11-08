import React from "react";

const FeaturedItems = (props: any) => {
  return (
    <div className=" flex flex-col my-6 border-2 border-black p-4 shadow-2xl hover:border-transparent transition-all">
      <ul>{props.category}</ul>
      <h1 className="text-2xl">{props.name}</h1>
      <img src={props.image} alt="" />
      <p>Price: €{props.price}</p>
      <button type="submit" className="my-2 p-2 bg-black text-white">
        Add to cart
      </button>
    </div>
  );
};

export default FeaturedItems;
