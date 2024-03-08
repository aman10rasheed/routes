import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import Form from "./Form";

const CardRoutes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [routes, setRoutes] = useState([
    { id: 1, name: "RUH-MAKKAH", source: "Riyadh", destination: "Makkah" },
    { id: 2, name: "JED-MAKKAH", source: "Jeddah", destination: "Makkah" },
    { id: 3, name: "JED-MADINAH", source: "Jeddah", destination: "Madinah" },
  ]);
  
  const [editingRoute, setEditingRoute] = useState(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRoutes = routes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(routes.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (id) => {
    const updatedRoutes = routes.filter((route) => route.id !== id);
    setRoutes(updatedRoutes);
  };

  return [
    editingRoute,
    setEditingRoute,
    <div>
      <div className="text-gray-900">
        <div className="px-3 py-4 flex justify-center flex-col">
          <table className="w-full text-md bg-white shadow-md rounded-2xl mb-4">
            <tbody>
              <tr className="border-1 bg-slate-200">
                <th className="text-left p-3 px-5 w-[20rem]">Name</th>
                <th className="text-left p-3 px-5 w-[40rem]">Source</th>
                <th className="text-left p-3 px-5 w-[40rem]">Destination</th>
                <th className="text-left p-3 px-5">Action</th>
              </tr>
              {currentRoutes.map((route) => (
                <tr
                  key={route.id}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  <td className="p-3 px-5">
                    {editingRoute && editingRoute.id === route.id ? (
                      <input
                        type="text"
                        name="name"
                        value={editingRoute.name}
                      />
                    ) : (
                      <h2 className="text-blue-800 font-semibold">
                        {route.name}
                      </h2>
                    )}
                  </td>
                  <td className="p-3 px-5">
                    {editingRoute && editingRoute.id === route.id ? (
                      <input
                        type="text"
                        name="source"
                        value={editingRoute.source}
                      />
                    ) : (
                      <h2 className="font-semibold">{route.source}</h2>
                    )}
                  </td>
                  <td className="p-3 px-5">
                    {editingRoute && editingRoute.id === route.id ? (
                      <input
                        type="text"
                        name="destination"
                        value={editingRoute.destination}
                      />
                    ) : (
                      <h2 className="font-semibold">{route.destination}</h2>
                    )}
                  </td>
                  <td className="p-3 px-5 flex justify-start">
                    {editingRoute && editingRoute.id === route.id ? (
                      <>
                        <button
                          className="mr-3 text-gray-500 hover:bg-blue-700 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>
                        <button
                          className="text-gray-500 hover:bg-gray-300 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="mr-3 text-gray-500 hover:bg-gray-300 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          <BiEditAlt />
                        </button>
                        <button
                          onClick={() => handleDelete(route.id)} // Call handleDelete with route ID
                          className="text-gray-500 hover:bg-gray-300 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          <MdDeleteOutline />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end space-x-4 w-full px-4">
            <div>
              <p className="text-gray-600">
                Showing {currentPage} of {totalPages}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="text-gray-600 disabled:opacity-50 focus:outline-none"
              >
                {"<"}{currentPage}
              </button>
              <h1 className="text-black">/</h1>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="text-gray-600 disabled:opacity-50 focus:outline-none"
              >
                {totalPages}{">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ];
};

export default CardRoutes;
