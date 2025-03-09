

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
  



  const TableRow = ({ data }) => {
    return (
      <tr className="border-b hover:bg-gray-50">
        {/* Left Controls */}
        <td className="p-3 flex items-center space-x-3">
          {/* Checkbox */}
          <input type="checkbox" className="w-4 h-4 text-blue-500" />
  
          {/* Icon Column */}
          <div className="flex flex-col space-y-2 items-center">
            {/* Status Indicator */}
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
  
            {/* Search Icon */}
            <button className="text-gray-500 hover:text-gray-700">
              🔍
            </button>
  
            {/* Tag Icon */}
            <button className="text-gray-500 hover:text-gray-700">
              🏷️
            </button>
          </div>
        </td>
  
        {/* Image */}
        <td className="p-3">
          <div className="relative w-20 h-12">
            <img src={data.image} alt="Car" className="w-full h-full object-cover rounded-md" />
            <span className="absolute bottom-1 left-1 bg-black text-white text-xs px-1 rounded">
              📷 {data.imageCount}
            </span>
          </div>
        </td>
  
        {/* Model */}
        <td className="p-3 text-blue-600 font-semibold">
          {data.name}
          <p className="text-gray-500 text-sm">{data.vin} | {data.stock}</p>
        </td>
  
        {/* Discount */}
        <td className="p-3">
          <span className="bg-green-500 text-white px-3 py-1 rounded text-sm">
            {data.discount}
          </span>
        </td>
  
        {/* Date */}
        <td className="p-3 text-gray-700">{data.date}</td>
  
        {/* Price */}
        <td className="p-3 font-semibold">{data.price}</td>
  
        {/* Special Price */}
        <td className="p-3 text-gray-500">{data.specialPrice}</td>
  
        {/* Color */}
        <td className="p-3">{data.color}</td>
  
        {/* Odometer */}
        <td className="p-3">{data.odometer}</td>
      </tr>
    );
  };
  


 

  const data = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      imageCount: 14,
      name: "2019 Hyundai Elantra Limited",
      vin: "KMHBD4LF2KU837728",
      stock: "TCB0102",
      discount: "1",
      date: "03/04/2025",
      price: "$15,000.00",
      specialPrice: "$0.00",
      color: "Silver",
      odometer: "15000 km",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      imageCount: 14,
      name: "2019 Hyundai Elantra Limited",
      vin: "KMHBD4LF2KU837728",
      stock: "TCB0102",
      discount: "1",
      date: "03/04/2025",
      price: "$15,000.00",
      specialPrice: "$0.00",
      color: "Silver",
      odometer: "15000 km",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      imageCount: 14,
      name: "2019 Hyundai Elantra Limited",
      vin: "KMHBD4LF2KU837728",
      stock: "TCB0102",
      discount: "1",
      date: "03/04/2025",
      price: "$15,000.00",
      specialPrice: "$0.00",
      color: "Silver",
      odometer: "15000 km",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      imageCount: 14,
      name: "2019 Hyundai Elantra Limited",
      vin: "KMHBD4LF2KU837728",
      stock: "TCB0102",
      discount: "1",
      date: "03/04/2025",
      price: "$15,000.00",
      specialPrice: "$0.00",
      color: "Silver",
      odometer: "15000 km",
    },
  ];
  
   function Table() {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Select</th>
              <th className="p-3">Image</th>
              <th className="p-3">Model</th>
              <th className="p-3">Discount</th>
              <th className="p-3">Date</th>
              <th className="p-3">Price</th>
              <th className="p-3">Special Price</th>
              <th className="p-3">Color</th>
              <th className="p-3">Odometer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((car) => (
              <TableRow key={car.id} data={car} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }



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
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

         {/* Main Content */}
      <div className="flex-grow overflow-auto bg-gray-100">
        {/* Navbar */}
        <Navbar />
  
        {/* Main Content */}
        <div className="flex-1 pt-20 overflow-x-auto">
          <Table />
          </div>
        </div>
      </div>
    );
  }
  