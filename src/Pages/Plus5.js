import { useState } from "react";
  
import { 
  FaBold, FaItalic, FaUnderline, FaStrikethrough, FaQuoteRight, FaCode, 
  FaListUl, FaListOl, FaSubscript, FaSuperscript, FaAlignLeft, FaAlignCenter, 
  FaAlignRight, FaParagraph, FaLink, FaImage, FaTextHeight 
} from "react-icons/fa";
 
 
 
 
 
 function Navbar() {
    return (
      <nav className="bg-gray-100 h-14 flex items-center justify-between px-6 shadow-sm">
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
  }
  
  // Component for Icon Items (Left Side)
  function NavItem({ icon }) {
    return (
      <div className="p-2 text-lg cursor-pointer hover:text-gray-800">
        {icon}
      </div>
    );
  }
  
  // Component for Text Links (Right Side)
  function NavLink({ icon, label }) {
    return (
      <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-800">
        <span className="text-lg">{icon}</span>
        <span>{label}</span>
      </div>
    );
  }




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




  
  const settingsMenu = [
    "Email Settings",
    "Tax Settings",
    "Cost Settings",
    "Fee Settings",
    "Accessory Settings",
    "Warranty Settings",
    "Guarantee Settings",
    "Insurance Settings",
    "Facebook Settings",
    "Craigslist Settings",
    "Social Connect Settings",
    "Logo Settings",
  ];
  
  function SettingsPage() {
    const [selected, setSelected] = useState("Email Settings");
    const [selectedHeading, setSelectedHeading] = useState("Normal");
  
    return (
      <div className="flex  bg-gray-100">
        {/* Sidebar */}
        <aside className="w-1/4  bg-white shadow-md p-5">
          <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
          <ul className="mt-2 space-y-1">
            {settingsMenu.map((item) => (
              <li
                key={item}
                className={`p-3 rounded-lg cursor-pointer ${
                  selected === item ? "bg-blue-500 text-white" : "text-gray-700"
                }`}
                onClick={() => setSelected(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
  
        <div className="w-3/4  ">
      {/* Title and Save Button */}
   

      <div className="bg-white h-full shadow-md rounded-lg p-6">

      <div className="flex justify-between mb- 28 bg-white items-center pb-12 ">
        <h2 className="text-2xl font-bold text-blue-600">Email Settings</h2>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Save
        </button>
      </div>
        {/* Name & Email */}
        <div className="flex flex-col mb-6">
  {/* Name Field */}
  <div className="flex justify-between items-center w-full">
    <label className="block text-gray-700 font-medium mr-4">Name</label>
    <input
      type="text"
      className="ml-80 w-2/3 mt-2 p-2 border rounded-md"
      defaultValue="The Car Boys"
    />
  </div>

  {/* Email Field */}
  <div className="flex justify-between items-center w-full mt-4">
    <label className="block text-gray-700 font-medium mr-4">Email</label>
    <input
      type="email"
      className="ml-80 w-2/3 mt-2 p-2 border rounded-md"
      defaultValue="leads@mg.zopmailer.com"
    />
  </div>
</div>



        {/* Header, Content & Footer */}
        {["Header", "Content", "Footer"].map((section) => (
          <div key={section} className="mb-6 flex justify-between">
            <label className="block text-white-700 font-medium mb-2">{section}</label>

            {/* Toolbar */}
            <div className="flex flex-col border bg-gray-100 rounded-md shadow-md">
  {/* Toolbar */}
  <div className="flex flex-wrap items-center space-x-3 p-3 bg-white rounded-t-md">
    {/* Formatting Icons */}
    <button className="icon"><FaBold /></button>
    <button className="icon"><FaItalic /></button>
    <button className="icon"><FaUnderline /></button>
    <button className="icon"><FaQuoteRight /></button>
    <button className="icon"><FaCode /></button>
    <button className="icon"><FaListUl /></button>
    <button className="icon"><FaListOl /></button>
    <button className="icon"><FaSubscript /></button>
    <button className="icon"><FaSuperscript /></button>
    <button className="icon"><FaAlignLeft /></button>
    <button className="icon"><FaAlignCenter /></button>
    <button className="icon"><FaAlignRight /></button>
    <button className="icon"><FaParagraph /></button>
    <button className="icon"><FaLink /></button>
    <button className="icon"><FaImage /></button>

    {/* Heading Dropdown */}
    <select
      className="px-2 py-1 border rounded-md bg-white cursor-pointer text-sm"
      value={selectedHeading}
      onChange={(e) => setSelectedHeading(e.target.value)}
    >
      <option>Normal</option>
      <option>Heading 1</option>
      <option>Heading 2</option>
      <option>Heading 3</option>
    </select>
  </div>

  {/* Textarea with Top Border */}
  <textarea className="w-full p-2 border-t border-gray-300 rounded-b-md">
    {section === "Header"
      ? "The Car Boys"
      : section === "Content"
      ? "We appreciate that you took the time to contact us. We will review your submission and get in touch with you as soon as possible."
      : "The Car Boys\n1400 Aimco Blvd Unit 14"}
  </textarea>
</div>

          </div>
        ))}
      </div>

      
    </div>

    </div>
    );
  }
  
  
  export default function Layout() {
    return (
      <div className="flex h-screen ">
        {/* Sidebar */}
        <Sidebar />

        <div className="w-full h-full ">
        {/* Navbar */}
        <Navbar />

      
  
        {/* Main Content */}
        <div className="flex-1 h-full ">
          <SettingsPage />
          </div>
        </div>
        </div>
     
    );
  }