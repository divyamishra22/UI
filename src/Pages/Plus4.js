import React from "react";
import { FaEdit, FaTrash, FaUserCheck } from "react-icons/fa";



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


  


const users = [
  {
    id: 1,
    name: "Vipash Rattan",
    email: "thecarboys@myyahoo.com",
    title: "Owner",
    registrationNo: "null",
    role: "Owner",
    leadAutoAssign: "ON",
  },
  {
    id: 2,
    name: "Tanveer Singh",
    email: "tanveersingh.rm@gmail.com",
    title: "Owner",
    registrationNo: "",
    role: "Owner",
    leadAutoAssign: "ON",
  },
];

const UserManagement = () => {
  return (
    <div className="p-6 bg-white h-full">
      <div className="flex  justify-between" >
        <div className="flex  flex-col">
      <h1 className="text-2xl font-semibold text-gray-800">User Management</h1>
      <p className="text-red-500 text-sm mt-1">NOTE: This section is only available to Account Owner and ZOP Staff.</p>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-white  border-blue-500 text-blue px-4 py-2 rounded-md hover:bg-blue-600">+ Add User</button>
      </div>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="p-3">USER ID</th>
              <th className="p-3">NAME</th>
              <th className="p-3">EMAIL ADDRESS</th>
              <th className="p-3">TITLE</th>
              <th className="p-3">REGISTRATION NO</th>
              <th className="p-3">ROLE</th>
              <th className="p-3">LEAD AUTO ASSIGN</th>
              <th className="p-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.title}</td>
                <td className="p-3">{user.registrationNo || "-"}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.leadAutoAssign}</td>
                <td className="p-3 flex space-x-3">
                  <button className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
                  <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                  <button className="text-green-500 hover:text-green-700"><FaUserCheck /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};



  
  export default function Layout() {
    return (
      <div className="flex h-screen ">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-grow overflow-auto bg-gray-100">
        {/* Navbar */}
        <Navbar />

      
  
        {/* Main Content */}
        <div className="flex-1  h-full pt-12 overflow-x-auto">
          <UserManagement />
          </div>
        </div>
        </div>
     
    );
  }