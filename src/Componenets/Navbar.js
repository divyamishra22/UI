export default function Navbar() {
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
  