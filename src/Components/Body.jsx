import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRest] = useState([]);

  // let listOfRest = [
  //   {
  //     data: {
  //       id: "334455",
  //       name: "KFC",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["burgers", "Biryani", "American"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334466",
  //       name: "Domino's",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["burgers", "Biryani", "American"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.0",
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter top rated restaurants
            listOfRest = listOfRest.filter(res=>res.data.avgRating > 4)
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRest.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
