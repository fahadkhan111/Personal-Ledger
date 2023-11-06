import React, { useState } from "react";
import { FaSearch, FaCog } from "react-icons/fa";
import MyPagination  from "./Pagination";
const MyTable = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedPage, setSelectedPage] = useState("");

  const handlePageChange = (e) => {
    setSelectedPage(e.target.value);
  };
  const options = ["Today", "Tomorrow", "Last 7 days"];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleApplyClick = () => {
    console.log("Selected option:", selectedOption);
  };

  const tableData = [
    {
      id: 1,
      date: "2023-11-03",
      description: "Sample Description 1",
      debit: "$100.00",
      credit: "$0.00",
      balance: "$100.00",
    },
    {
      id: 2,
      date: "2023-11-04",
      description: "Sample Description 2",
      debit: "$120.00",
      credit: "$20.00",
      balance: "$200.00",
    },
    {
        id: 3,
        date: "2023-11-03",
        description: "Sample Description 1",
        debit: "$100.00",
        credit: "$0.00",
        balance: "$100.00",
      },
      {
        id: 4,
        date: "2023-11-04",
        description: "Sample Description 2",
        debit: "$120.00",
        credit: "$20.00",
        balance: "$200.00",
      },
      {
        id: 5,
        date: "2023-11-03",
        description: "Sample Description 1",
        debit: "$100.00",
        credit: "$0.00",
        balance: "$100.00",
      },
      {
        id: 6,
        date: "2023-11-04",
        description: "Sample Description 2",
        debit: "$120.00",
        credit: "$20.00",
        balance: "$200.00",
      },
      {
        id: 7,
        date: "2023-11-03",
        description: "Sample Description 1",
        debit: "$100.00",
        credit: "$0.00",
        balance: "$100.00",
      },
      {
        id: 8,
        date: "2023-11-04",
        description: "Sample Description 2",
        debit: "$120.00",
        credit: "$20.00",
        balance: "$200.00",
      },
      
    // Add more objects to reach a total of 20
  ];

  return (
    <div className="overflow-x-auto border px-10 py-6">
          <h1 className="text-2xl font-semibold pb-6">Dashboard</h1>

      <div className="flex justify-between pb-6">
        <div className="flex">
          <select
            className="mr-4 p-2 border border-gray-300 rounded"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Bulk Action</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleApplyClick}
          >
            Apply
          </button>
        </div>
        <div className="flex items-center space-x-4">
          {/* Search Icon Button */}
          <button className="p-2 border border-gray-300 rounded-full">
            <FaSearch className="text-gray-600" size={24} />
          </button>

          {/* Vertical Line */}
          <div className="h-6 border-l border-gray-300"></div>

          {/* Settings Icon Button */}
          <button className="p-2 border border-gray-300 rounded-full">
            <FaCog className="text-gray-600" size={24} />
          </button>
        </div>
      </div>
      <table className="min-w-full bg-white border border-collapse border-gray-300">
        <thead>
          <tr>
            <td className="p-3 text-center border border-gray-300">
              <input type="checkbox" />
            </td>
            <th className="p-3 border border-gray-300">ID</th>
            <th className="p-3 border border-gray-300">Date</th>
            <th className="p-3 border border-gray-300">Description</th>
            <th className="p-3 border border-gray-300">Debit</th>
            <th className="p-3 border border-gray-300">Credit</th>
            <th className="p-3 border border-gray-300">Balance</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="p-3 text-center border border-gray-300">
                <input type="checkbox" />
              </td>
              <td className="p-3 text-center border border-gray-300">
                {rowData.id}
              </td>
              <td className="p-3 text-center border border-gray-300">
                {rowData.date}
              </td>
              <td className="p-3 text-center border border-gray-300">
                {rowData.description}
              </td>
              <td className="p-3 text-center border border-gray-300">
                {rowData.debit}
              </td>
              <td className="p-3 text-center border border-gray-300">
                {rowData.credit}
              </td>
              <td className="p-3 text-center border border-gray-300">
                {rowData.balance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between pt-6">
        <div className="">
          {/* Pagination here */}
          <MyPagination />
        </div>
        <div className="flex">
      <h1 className="py-2">Page</h1>
      <select
        className="border border-gray-300 rounded ml-2 px-2"
        value={selectedPage}
        onChange={handlePageChange}
      >
        <option value="" disabled>
          1
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        {/* Add more options as needed */}
      </select>
    </div>
      </div>
    </div>
  );
};

export default MyTable;
