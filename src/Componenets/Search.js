import React from "react";
import { FaTh, FaSearch, FaExpandArrowsAlt } from "react-icons/fa";




const SearchBar = ({ dropdownLabel, searchPlaceholder, buttonLabel }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
    {/* Left Side - Dropdown */}
    <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center text-gray-600 hover:bg-gray-100">
      All Leads <span className="ml-2">▼</span>
    </button>

    {/* Center - Search Bar */}
    <div className="relative w-1/3">
      <input
        type="text"
        placeholder="Search Anything ..."
        className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <FaSearch className="absolute left-3 top-3 text-gray-400" />
    </div>

    {/* Right Side - Buttons */}
    <div className="flex items-center space-x-2">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Create New Lead
      </button>
      <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
        <FaTh />
      </button>
      <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
        <FaExpandArrowsAlt />
      </button>
    </div>
  </nav>
  );
};

export default SearchBar;
