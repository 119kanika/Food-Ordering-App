import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([
    {
      data: {
        id: "334455",
        name: "KFC",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["burgers", "Biryani", "American"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "3.8",
      },
    },
    {
      data: {
        id: "334455",
        name: "Burger King",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["burgers", "Biryani", "American"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "4.2",
      },
    },
    {
      data: {
        id: "334466",
        name: "Domino's",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["burgers", "Biryani", "American"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "4.1",
      },
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRest.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRest(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRest.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
