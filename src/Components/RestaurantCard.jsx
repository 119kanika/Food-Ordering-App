import React from "react";
import { CDN_URL } from "../utils/constant";


const styleCard = {
  backgroundColor: "#f0f0f0 ",
};

const RestaurantCard = (props) => {
  const { resData } = props

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div className="res-card" style={styleCard}>
      <img
      className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};


// HOF
// input - restaurantCard ==> restaurantCardPromoted

// export const WithOpenLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label htmlFor="">Open Now</label>
//         <RestaurantCard {...props}/>
//       </div>
//     )
//   }
// }

export default RestaurantCard;
