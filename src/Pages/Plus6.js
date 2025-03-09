import React from "react";
import { FaEdit, FaTrash, FaUserCheck } from "react-icons/fa";

import { FaTh, FaSearch, FaExpandArrowsAlt } from "react-icons/fa";


function Sidebar() {
    return (
      <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
        {/* Logo */}
        <div className="flex items-center space-x-2 p-3">
          <div className="w-7 h-7 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
          <span className="text-xl font-bold">zop</span>
        </div>
  
        {/* Fixed Menu Items (No Scrolling) */}
        <nav className="flex flex-col p-3 text-sm">
          {/* Main Links */}
          <SidebarItem icon="👁" label="At A Glance" />
          <SidebarItem icon="📅" label="Calendar" />
  
          {/* Apps Section */}
          <SidebarSection title="APPS">
            <SidebarItem icon="🚗" label="Inventory" />
            <SidebarItem icon="🎯" label="Leads" />
            <SidebarItem icon="👥" label="Customers" />
            <SidebarItem icon="💰" label="Deals" />
            <SidebarItem icon="🏢" label="Vendors" />
            <SidebarItem icon="📘" label="FBMP" />
            <SidebarItem icon="📋" label="Craigslist" locked />
            <SidebarItem icon="🔗" label="Social Connect" />
            <SidebarItem icon="📑" label="Reports" />
            <SidebarItem icon="💳" label="Payments" />
            <SidebarItem icon="🔄" label="Syndication History" />
          </SidebarSection>
  
          {/* Reviews Section */}
          <SidebarSection title="REVIEWS">
            <SidebarItem icon="⭐" label="Reviews" locked />
            <SidebarItem icon="📝" label="Feedbacks" locked />
          </SidebarSection>
        </nav>
      </div>
    );
  }
  
  // Sidebar Section Component
  function SidebarSection({ title, children }) {
    return (
      <div className="mt-3">
        <h3 className="text-gray-400 uppercase text-xs font-semibold">{title}</h3>
        <div className="space-y-1">{children}</div>
      </div>
    );
  }
  
  // Sidebar Item Component
  function SidebarItem({ icon, label, locked }) {
    return (
      <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
        <span className="text-sm">{icon}</span>
        <span className="flex-grow">{label}</span>
        {locked && <span className="text-gray-500 text-xs">🔒</span>}
      </div>
    );
  }
  
  const NavItem = ({ icon }) => (
    <div className="p-2 text-lg cursor-pointer hover:text-gray-800">
      {icon}
    </div>
  );
  
  // Nav Link Component (Right Links)
  const NavLink = ({ icon, label }) => (
    <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-800">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
  
  const Navbar = () => {
    return (
      <nav className="bg-gray-100 h-14 flex items-center justify-between px-6 shadow-sm fixed top-0 left-64 right-0 z-10">
        {/* Left Icons */}
        <div className="flex items-center space-x-4 text-gray-600">
          <NavItem icon="📅" />
          <NavItem icon="💬" />
          <NavItem icon="📊" />
          <NavItem icon="🎟" />
        </div>
  
        {/* Right Links */}
        <div className="flex items-center space-x-6 text-gray-600 text-sm font-medium">
          <NavLink icon="❓" label="HELP CENTER" />
          <NavLink icon="🎁" label="REFER & SAVE" />
          <NavLink icon="💰" label="0" />
          <NavLink icon="🔗" label="VISIT WEBSITE" />
        </div>
      </nav>
    );
  };


  



// Reusable Button Component
const Button = ({ icon, bgColor, borderColor }) => {
  return (
    <button
      className={`flex items-center justify-center w-10 h-10 rounded border ${borderColor} ${bgColor}`}
    >
      {icon}
    </button>
  );
};

// Reusable Table Row Component
const TableRow = ({ data }) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="p-4 flex gap-2">
        <Button
          icon={<span className="text-xl">✏️</span>}
          bgColor="bg-white"
          borderColor="border border-gray-300"
        />
        <Button
          icon={<span className="text-blue-600 font-bold">F</span>}
          bgColor="bg-white"
          borderColor="border border-blue-400"
        />
        <Button
          icon={<span className="text-red-500 font-bold">IG</span>}
          bgColor="bg-white"
          borderColor="border border-red-400"
        />
      </td>
      <td className="p-4">
        <span className="px-3 py-1 text-sm bg-gray-200 rounded">
          {data.facebookStatus}
        </span>
      </td>
      <td className="p-4">
        <span className="px-3 py-1 text-sm bg-gray-200 rounded">
          {data.instagramStatus}
        </span>
      </td>
      <td className="p-4">{data.stockNo}</td>
      <td className="p-4">{data.vin}</td>
      <td className="p-4">{data.year}</td>
    </tr>
  );
};

function Page() {
  // Data kept inside the page component
  const tableData = [
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0102", vin: "KMHD84L2KU837728", year: "2019" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0101", vin: "1FMCU9HDXJUD45815", year: "2018" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0100", vin: "WP1AB2A56JLB36538", year: "2018" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0099", vin: "WAUBFCFL6FN034897", year: "2015" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0097", vin: "WAUHMAF42JA046140", year: "2018" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0096", vin: "KMHLMA4GXMU141060", year: "2021" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0095", vin: "WA1GFEFS6FR012185", year: "2015" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0094", vin: "2HGFC2F57JH008238", year: "2018" },
  ];

  return (
    <div className=" h-screen overflow-hidden">
    
        <table className="w-full border-collapse border border-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Actions</th>
              <th className="p-4 text-left">Facebook Status</th>
              <th className="p-4 text-left">Instagram Status</th>
              <th className="p-4 text-left">Stock No</th>
              <th className="p-4 text-left">VIN</th>
              <th className="p-4 text-left">Year</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tableData.map((item, index) => (
              <TableRow key={index} data={item} />
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        
    
    </div>
  );
}






const SearchBar = ({ dropdownLabel, searchPlaceholder, buttonLabel }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-end space-x-2">
    {/* Left Side - Dropdown */}
    

    {/* Center - Search Bar */}
    
    {/* Right Side - Buttons */}
    
     
      <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
        <FaTh />
      </button>
      <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
        <FaExpandArrowsAlt />
      </button>
    
  </nav>
  );
};






  
export default function Layout() {
    return (
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-grow overflow-auto bg-gray-100">
        {/* Navbar */}
        <Navbar />

         {/* Main Content */}
      <div className="flex-grow  pt-12 overflow-auto bg-gray-100">
        {/* Navbar */}
        <SearchBar />
  
        {/* Main Content */}
        <div className="flex-1 overflow-x-auto">
          <Page />
          </div>
        </div>
        </div>
      </div>
    );
  }
  