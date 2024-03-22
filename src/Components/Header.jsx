import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const [isOpen, setIsOpen] = useState(false);

  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <>

      <nav className="flex items-center justify-between flex-wrap p-6 bg-indigo-100 shadow-lg shadow-gray-300 border rounded-2xl">
        <div className="flex items-center text-red-900 text-2xl mr-6 lg:mr-72">
          <img src={LOGO_URL} className="w-100 h-10 mr-2" alt="Logo" />
          <span>YumBites</span>
        </div>
        
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className=" sm:text-xl  lg:flex-grow ">
            <Link to="/" className="block mt-4 mr-10 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Home
            </Link>
            <Link to="/about" className="block mt-4 mr-10 lg:inline-block lg:mt-0 text-white-200 mr-4">
              About 
            </Link>
            <Link to="/contact" className="block mt-4 mr-10 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Contact us
            </Link>
            <Link to="/login" className="block mt-4 mr-10 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Login 
            </Link>
          </div>
          <div>
            <Link to="/cart" className=" items-center vorder rounded-md  bg-blue-400 border-0 my-5 mr-10 py-1 px-2 text-white">
            Cart - ({cartItems.length} items)
            </Link>
          </div>
        </div>
      </nav>

    </>
  )

  

  //   <div classNameName="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4 shadow-md">
  //     <div classNameName="logo-container">
  //       <img classNameName="w-25 logo" src={LOGO_URL} />
  //     </div>

  //     <div classNameName="nav-items flex items-center hidden w-full md:block md:w-auto ">
  //       <ul classNameName="flex p-5 m-4">
  //         <li classNameName="px-4">
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li classNameName="px-4">
  //           <Link to="/about">About</Link>
  //         </li>
  //         <li classNameName="px-4">
  //           <Link to="/contact">Contact Us</Link>
  //         </li>
  //         <li classNameName="px-4 font-bold">
  //           <Link to="/cart">Cart - ({cartItems.length} items)</Link>
  //         </li>
  //         <button
  //           classNameName="login"
  //           onClick={() => {
  //             btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  //           }}
  //         >
  //           {btnName}
  //         </button>
  //       </ul>
  //     </div>
  //   </div>
  // );
};

export default Header;
