import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Form from "./Form";

const RoutesLayOut = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="flex justify-between m-4">
      {/* Search box */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search for routes, checkpoint etc"
          className="border-2 border-blue-500 rounded-md px-10 py-4 text-left w-[30rem]"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-blue-500">
          <FaSearch />
        </div>
      </div>

      {/* Buttons */}
      <div className="space-x-4 flex items-center">
        <button className="bg-slate-300 text-black px-4 py-2 rounded-3xl">
          Filters
        </button>
        <button className="bg-slate-300 text-black px-4 py-2 rounded-3xl">
          Bulk Upload
        </button>
        <button
          onClick={() => toggleForm()}
          className="bg-blue-500 text-white px-4 py-2 rounded-3xl"
        >
          + Add Vehicle Route
        </button>
        
        <button className="bg-slate-300 text-black px-4 py-2 text-xl rounded-3xl">
          <HiDownload />
        </button>
      </div>
      {showForm && <Form onClose={toggleForm}/>}
    </div>
  );
};

export default RoutesLayOut;
