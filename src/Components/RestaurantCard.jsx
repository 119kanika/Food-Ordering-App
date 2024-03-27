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

  console.log(deliveryTime)

  return (
    <>

      <div className="res-card">
        <img className="res-image" src={CDN_URL + cloudinaryImageId} />

        <h3 className="title">{name}</h3>
        <h5 className="description">{cuisines.join(",")}</h5>
        <span className="review">
          <h4 className="rating">{avgRating}</h4>
          {/* <h4 className="txt">{deliveryTime} minutes</h4> */}
        </span>
      </div>

    </>

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
