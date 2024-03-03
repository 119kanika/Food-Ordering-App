import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="flex justify-between shadow-md">
      <div className="logo-container">
        <img className="w-25 logo" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center ">
        <ul className="flex p-5 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
