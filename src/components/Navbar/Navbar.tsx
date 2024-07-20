import React from "react";
import logo from "../../images/download.jpeg"
import { MdRestaurantMenu } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdTableRestaurant, MdHome } from "react-icons/md";

import { Navigate, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="h-20 bg-white flex justify-between p-2 shadow-lg top-0  w-full">
      <div className="flex">
        <img src={logo} alt="Logo" className="h-18" />
      </div>
      <div className="m-1">
        <ul className="flex space-x-12 text-xl m-3 ">
          <li className="flex cursor-pointer hover:scale-125">
            <a href="/">Home </a>
            <MdHome className="m-1" />
          </li>
          <li className="flex cursor-pointer hover:scale-125">
            <a href="/about">About </a>
            <MdRestaurantMenu className="m-1" />
          </li>
          <li className="flex cursor-pointer hover:scale-125">
            <a href="/store">Store</a><MdTableRestaurant className="m-1" />
          </li>
          <button
            style={{ width: "3rem", height: "3rem", position: "relative"}}
            className="rounded-full bg-white shadow-inner hover:scale-105 duration-300 shadow-black p-2"
          >
            <svg
            className="text-sky-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>

            <div
              className="rounded-full bg-red-600 flex justify-center items-center"
              style={{
                color: "white",
                width: "1.2rem",
                height: "1.2rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              7
            </div>
          </button>
          <button className="bg-red-500 w-32 rounded-[22px] shadow-lg shadow-rose-400 border-2 border-black"> SignUp </button>

        </ul>
      </div>
     

    </div>
  );
};