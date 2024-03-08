import React, { useState } from "react";

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    source: "",
    destination: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: formData.name,
      source: formData.source,
      destination: formData.destination,
    });
    onClose();
    console.log(setFormData);
  };

  return (
    <dialog open className="max-w-md mx-auto border-[5px] border-black p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-2 border-black"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="source" className="block text-gray-700">
            Source :
          </label>
          <input
            type="text"
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-2 border-black"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="destination" className="block text-gray-700">
            Destination :
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-2 border-black"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mr-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default Form;
