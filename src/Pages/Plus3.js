 
 import React from "react";
 
 
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
  

  
  
  const EmailChannel = () => {
    return (
      <div className="h-full flex bg-gray-100">
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-6  border-r">
          <h2 className="text-lg font-semibold text-gray-600">User Integrations</h2>
          <div className="mt-4">
            <button className="text-blue-500 font-semibold">Email Channel</button>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 p-8 bg-white">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-blue-600 font-semibold">Email Channel</h2>
            <button className="bg-blue-500 text-white px-6 py-2 rounded">Save</button>
          </div>
  
          <p className="text-red-500 text-sm mb-4">
            Note: Email only works with providers that have SMTP delivery. Gmail and Office 365 will not work.
          </p>
  
          <div className="border-t border-gray-300 pt-6 space-y-4 w-3/4">
            {/* Name Field */}
            <div className="flex items-center gap-4">
              <label className="w-1/4 text-gray-700 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input className="border p-2 rounded w-full max-w-md" type="text" />
            </div>
  
            {/* Email Field */}
            <div className="flex items-center gap-4">
              <label className="w-1/4 text-gray-700 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input className="border p-2 rounded w-full max-w-md" type="email" />
            </div>
  
            {/* Password Field */}
            <div className="flex items-center gap-4">
              <label className="w-1/4 text-gray-700 font-medium">
                Password <span className="text-red-500">*</span>
              </label>
              <input className="border p-2 rounded w-full max-w-md" type="password" />
            </div>
  
            {/* SMTP Host */}
            <div className="flex items-center gap-4">
              <label className="w-1/4 text-gray-700 font-medium">
                SMTP (Outgoing) Host <span className="text-red-500">*</span>
              </label>
              <input className="border p-2 rounded w-full max-w-md" type="text" />
            </div>
  
            {/* SMTP Port & Security */}
            <div className="flex items-center gap-4">
              <label className="w-1/4 text-gray-700 font-medium">
                SMTP (Outgoing) Port & Security <span className="text-red-500">*</span>
              </label>
              <div className="flex w-full max-w-md gap-4">
                <select className="border p-2 rounded w-1/2">
                  <option>465</option>
                </select>
                <select className="border p-2 rounded w-1/2">
                  <option>SSL</option>
                </select>
              </div>
            </div>
  
            {/* IMAP Host */}
            <div className="flex items-center gap-4">
              <label className="w-1/4 text-gray-700 font-medium">
                IMAP (Incoming) Host <span className="text-red-500">*</span>
              </label>
              <input className="border p-2 rounded w-full max-w-md" type="text" />
            </div>
  
            {/* IMAP Port & Security */}
            <div className="flex items-center gap-4">
              <label className="w-1/4 text-gray-700 font-medium">
                IMAP (Incoming) Port & Security <span className="text-red-500">*</span>
              </label>
              <div className="flex w-full max-w-md gap-4">
                <select className="border p-2 rounded w-1/2">
                  <option>993</option>
                </select>
                <select className="border p-2 rounded w-1/2">
                  <option>SSL</option>
                </select>
              </div>
            </div>
  
            {/* Authentication */}
            <div className="flex items-center gap-4">
              <label className="w-1/4 text-gray-700 font-medium">
                Authentication <span className="text-red-500">*</span>
              </label>
              <button className="bg-green-500 text-white px-4 py-1 rounded-full">ON</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
  
  export default function Layout() {
    return (
      <div className="flex h-screen ">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-grow overflow-auto bg-gray-100">
        {/* Navbar */}
        <Navbar />

      
  
        {/* Main Content */}
        <div className="flex-1  h-full pt-16 overflow-x-auto">
          <EmailChannel />
          </div>
        </div>
        </div>
     
    );
  }
  
  