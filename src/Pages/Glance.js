import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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
  { name: 'Closed', value: 100 }
];

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* Overall Summary */}
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

export default Dashboard;
