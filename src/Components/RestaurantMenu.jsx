import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/userestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId);

    
    if (resInfo === null ){
        return  <Shimmer/>
        
    }
    
    const { 
        name,
        cuisines,  
        costForTwoMessage
    } = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;



    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ol>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default RestaurantMenu;