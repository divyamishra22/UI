import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Navbar Component
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

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col fixed">
      {/* Logo */}
      <div className="flex items-center space-x-2 p-3">
        <div className="w-7 h-7 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
        <span className="text-xl font-bold">zop</span>
      </div>

      {/* Sidebar Items */}
      <nav className="flex flex-col p-3 text-sm">
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
};

// Sidebar Section Component
const SidebarSection = ({ title, children }) => (
  <div className="mt-3">
    <h3 className="text-gray-400 uppercase text-xs font-semibold">{title}</h3>
    <div className="space-y-1">{children}</div>
  </div>
);

// Sidebar Item Component
const SidebarItem = ({ icon, label, locked }) => (
  <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
    <span className="text-sm">{icon}</span>
    <span className="flex-grow">{label}</span>
    {locked && <span className="text-gray-500 text-xs">🔒</span>}
  </div>
);

// Nav Item Component (Left Icons)
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

// Main Dashboard Layout
const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-grow overflow-auto bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Main Dashboard Content (With Top Padding for Navbar) */}
        <div className="pt-20 px-6">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
    const summaryData = [
      { label: 'Inventories', value: 101, icon: '🚗', color: 'bg-blue-100' },
      { label: 'Leads', value: 291, icon: '🔆', color: 'bg-orange-100' },
      { label: 'Deals', value: 9, icon: '💰', color: 'bg-green-100' },
      { label: 'Total Retail', value: '$408,447.00', icon: '🚙', color: 'bg-gray-200' },
      { label: 'Vehicle Cost', value: '$0.00', icon: '📷', color: 'bg-red-100' },
      { label: 'Additional Exp.', value: '$0.00', icon: '📷', color: 'bg-red-100' },
    ];
  
    const inventoryData = [
      { name: 'In Stock', value: 70, color: '#fbbf24' },
      { name: 'Sold', value: 20, color: '#fb7185' },
      { name: 'Unpublished', value: 10, color: '#f43f5e' },
    ];
  
    const leadData = [
      { name: 'New', value: 290 },
      { name: 'Follow-up', value: 180 },
      { name: 'Closed', value: 100 },
    ];
  
    return (
      <div>
        {/* Summary Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {summaryData.map((item, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg flex items-center">
              <span className={`p-3 rounded-full ${item.color} text-lg`}>{item.icon}</span>
              <div className="ml-3">
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Historical Stats */}
        <h2 className="text-2xl font-semibold mb-4">Historical Stats</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Inventory Stats */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Inventory Stats</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={inventoryData} dataKey="value" nameKey="name" outerRadius={80}>
                  {inventoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
  
          {/* Lead Stats */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Lead Stats</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={leadData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#fbbf24" />
              </BarChart>
            </ResponsiveContainer>
          </div>
  
          {/* Lead Sources */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Lead Sources</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={leadData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="value" fill="#fb7185" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };
  

export default DashboardLayout;
