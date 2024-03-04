import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && <h1>Add yumms to the cart...</h1>}
        <ItemList items={cartItems} />
        <button className="p-2 m-2 bg-black text-white" onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
