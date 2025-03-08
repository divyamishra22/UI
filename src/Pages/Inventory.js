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
  
  export default function Table() {
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
  