import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);


  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING");

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);

    //optional chaining
    setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


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
          <RestaurantCard key={restaurant.info} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
