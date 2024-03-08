import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="flex justify-between items-center border-black border-b-2 m-4 mt-0 p-4">
      <div>
        <h3>Trips</h3>
        <h2 className="font-bold text-2xl">Routes</h2>
      </div>
      <div className="flex items-center space-x-6 text-2xl border-black  border-l-2 pl-5">
        <button className=" text-blue-500">
          <FaRegLightbulb />
        </button>
        <button className=" text-blue-500">
          <MdNotificationsActive />
        </button>
        <button className="text-3xl text-blue-950">
          <FaUserCircle />
        </button>
      </div>
    </div>
  );
};

export default Nav;
