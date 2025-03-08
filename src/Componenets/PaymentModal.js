import React, { useState } from "react";

const PaymentCalculator = () => {
  const [values, setValues] = useState({
    vehiclePrice: 0,
    additionalFees: 0,
    tradeInValue: 0,
    lienValue: 0,
    downPayment: 0,
    duration: 60,
    tax1: 13,
    tax2: 0,
    interestRate: 7.99,
  });

  const handleChange = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Payment Calculator</h2>

      {[
        { key: "vehiclePrice", label: "Vehicle Price", symbol: "$" },
        { key: "additionalFees", label: "Additional Fees", symbol: "$" },
        { key: "tradeInValue", label: "Trade-In Value", symbol: "$" },
        { key: "lienValue", label: "Lien Value", symbol: "$" },
        { key: "downPayment", label: "Downpayment", symbol: "$" },
        { key: "duration", label: "Duration", symbol: " Months", min: 12, max: 84 },
        { key: "tax1", label: "Tax 1", symbol: "%", min: 0, max: 20 },
        { key: "tax2", label: "Tax 2", symbol: "%", min: 0, max: 20 },
        { key: "interestRate", label: "Interest Rate", symbol: "%", min: 0, max: 20 },
      ].map(({ key, label, symbol, min = 0, max = 100 }) => (
        <div key={key} className="flex items-center space-x-4">
          <label className="w-1/4 text-sm font-medium text-gray-600">{label}</label>
          <div className="relative w-3/4 flex items-center">
            <input
              type="range"
              min={min}
              max={max}
              value={values[key]}
              onChange={(e) => handleChange(key, Number(e.target.value))}
              className="w-full cursor-pointer appearance-none h-2 bg-gray-300 rounded-lg accent-blue-500"
            />
            <span className="absolute left-1/2 -top-7 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded shadow-md">
              {values[key]}
              {symbol}
            </span>
          </div>
          <input
            type="number"
            value={values[key]}
            onChange={(e) => handleChange(key, Number(e.target.value))}
            className="w-24 px-3 py-1.5 border rounded-lg text-right shadow-sm"
          />
        </div>
      ))}

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-4">
        <button className="px-5 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
          Close
        </button>
        <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default PaymentCalculator;
