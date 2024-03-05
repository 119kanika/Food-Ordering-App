import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const ItemList = ({ items }) => {
  
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item))  
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex "
        >
          <div className="w-30 p-4">
            <img
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                item.card.info.imageId
              }
            />
            <div className="absolute">
              <button className=" m-1 rounded-lg bg-black text-white shadow-lg " 
              onClick={() => handleAddItem(item)}>
                Add+
              </button>
            </div>
          </div>

          <div className="">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - Rs.
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
