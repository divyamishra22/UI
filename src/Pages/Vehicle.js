import { useState } from "react";

export default function VehicleForm() {
  const [vehicleType, setVehicleType] = useState("");
  const [exteriorColor, setExteriorColor] = useState("Silver");
  const [interiorColor, setInteriorColor] = useState("Black");
  const [specialPrice, setSpecialPrice] = useState(false);
  
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-2xl font-semibold">
            2019 Hyundai Elantra #TCB0102 (KMHD84LF2KU837728)
          </h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Decode
          </button>
        </div>

        {/* Form */}
        <form className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            {/* VIN Number */}
            <div>
              <label className="block text-red-500 font-medium">
                Vin Number *
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md p-2"
                value="KMHD84LF2KU837728"
              />
              <div className="mt-2">
                <input type="checkbox" id="displayVin" className="mr-2" />
                <label htmlFor="displayVin">Display VIN On Website</label>
              </div>
            </div>

            {/* Stock Number */}
            <div>
              <label className="block text-red-500 font-medium">Stock #</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md p-2"
                value="TCB0102"
              />
            </div>

            {/* Status & Availability */}
            <div>
              <label className="block font-medium">Status</label>
              <select className="w-full border-gray-300 rounded-md p-2">
                <option>In Stock</option>
                <option>Sold</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Availability</label>
              <select className="w-full border-gray-300 rounded-md p-2">
                <option>Available For Sale</option>
                <option>Not Available</option>
              </select>
            </div>

            {/* Vehicle Type */}
            <div>
              <label className="block font-medium">Vehicle Type</label>
              <select
                className="w-full border-gray-300 rounded-md p-2"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="">Select Vehicle Type</option>
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="demo">Demo</option>
                <option value="as-is">As-is</option>
              </select>
            </div>

            {/* Visibility & Tags */}
            <div>
              <label className="block font-medium">
                Visibility (Show On Website)
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="mt-6">
            <label className="block text-red-500 font-medium">Vehicle *</label>
            <div className="grid grid-cols-4 gap-4 mt-2">
              <select className="border-gray-300 rounded-md p-2">
                <option>2019</option>
              </select>
              <select className="border-gray-300 rounded-md p-2">
                <option>Hyundai</option>
              </select>
              <select className="border-gray-300 rounded-md p-2">
                <option>Elantra</option>
              </select>
              <select className="border-gray-300 rounded-md p-2">
                <option>Limited</option>
              </select>
            </div>
          </div>

          
        </form>
      </div>
      <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        

        {/* Form */}
        <form className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Trim & Body Type */}
            <div>
              <label className="block font-medium">Trim And Body Type</label>
              <div className="grid grid-cols-3 gap-2">
                <select className="border-gray-300 rounded-md p-2">
                  <option>Limited</option>
                </select>
                <select className="border-gray-300 rounded-md p-2">
                  <option>Sedan</option>
                </select>
                <select className="border-gray-300 rounded-md p-2">
                  <option>4-Door</option>
                </select>
              </div>
            </div>

            {/* Engine */}
            <div>
              <label className="block font-medium">Engine</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="w-16 border-gray-300 rounded-md p-2"
                  value="2"
                />
                <span className="flex items-center">L</span>
                <select className="border-gray-300 rounded-md p-2 flex-1">
                  <option>4 Cylinder Engine</option>
                </select>
              </div>
            </div>

            {/* Transmission & Drive */}
            <div>
              <label className="block font-medium">Transmission & Drive</label>
              <div className="grid grid-cols-2 gap-2">
                <select className="border-gray-300 rounded-md p-2">
                  <option>Automatic</option>
                </select>
                <select className="border-gray-300 rounded-md p-2">
                  <option>Front-Wheel Drive</option>
                </select>
              </div>
            </div>

            {/* Passengers & Odometer */}
            <div>
              <label className="block font-medium">Passengers</label>
              <select className="w-full border-gray-300 rounded-md p-2">
                <option>Select</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Odometer</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md p-2"
                  value="150000"
                />
                <select className="border-gray-300 rounded-md p-2">
                  <option>KM</option>
                </select>
              </div>
            </div>

            {/* Fuel Type & Consumption */}
            <div>
              <label className="block font-medium">Fuel Type</label>
              <select className="w-full border-gray-300 rounded-md p-2">
                <option>Gasoline</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Fuel Consumption</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  className="border-gray-300 rounded-md p-2"
                  value="8.40"
                />
                <input
                  type="text"
                  className="border-gray-300 rounded-md p-2"
                  value="6.36"
                />
              </div>
            </div>

            {/* Exterior & Interior Color Selection */}
            <div>
              <label className="block font-medium">Exterior Color</label>
              <div className="flex space-x-2 mt-1">
                <button
                  className={`w-8 h-8 border ${
                    exteriorColor === "Silver" ? "border-black" : ""
                  }`}
                  style={{ backgroundColor: "silver" }}
                  onClick={() => setExteriorColor("Silver")}
                />
                <button
                  className={`w-8 h-8 border ${
                    exteriorColor === "Black" ? "border-black" : ""
                  }`}
                  style={{ backgroundColor: "black" }}
                  onClick={() => setExteriorColor("Black")}
                />
              </div>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md p-2 mt-2"
                value={exteriorColor}
                readOnly
              />
            </div>

            <div>
              <label className="block font-medium">Interior Color</label>
              <div className="flex space-x-2 mt-1">
                <button
                  className={`w-8 h-8 border ${
                    interiorColor === "Black" ? "border-black" : ""
                  }`}
                  style={{ backgroundColor: "black" }}
                  onClick={() => setInteriorColor("Black")}
                />
                <button
                  className={`w-8 h-8 border ${
                    interiorColor === "Beige" ? "border-black" : ""
                  }`}
                  style={{ backgroundColor: "beige" }}
                  onClick={() => setInteriorColor("Beige")}
                />
              </div>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md p-2 mt-2"
                value={interiorColor}
                readOnly
              />
            </div>

            {/* Price & Special Price */}
            <div>
              <label className="block font-medium">Price</label>
              <div className="flex space-x-2">
                <span className="flex items-center">$</span>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md p-2"
                  value="15000.00"
                />
              </div>
              <div className="mt-2">
                <input type="checkbox" id="hidePrice" className="mr-2" />
                <label htmlFor="hidePrice">Hide Price</label>
              </div>
            </div>

            <div>
              <label className="block font-medium">Special Price</label>
              <div className="flex items-center space-x-2">
                <span>OFF</span>
                <input
                  type="checkbox"
                  className="toggle"
                  checked={specialPrice}
                  onChange={() => setSpecialPrice(!specialPrice)}
                />
                <span>ON</span>
              </div>
            </div>
          </div>

          
        </form>
      </div>
    </div>
    </div>
  );
}
