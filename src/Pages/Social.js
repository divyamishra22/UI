import React from "react";

// Reusable Button Component
const Button = ({ icon, bgColor, borderColor }) => {
  return (
    <button
      className={`flex items-center justify-center w-10 h-10 rounded border ${borderColor} ${bgColor}`}
    >
      {icon}
    </button>
  );
};

// Reusable Table Row Component
const TableRow = ({ data }) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="p-4 flex gap-2">
        <Button
          icon={<span className="text-xl">✏️</span>}
          bgColor="bg-white"
          borderColor="border border-gray-300"
        />
        <Button
          icon={<span className="text-blue-600 font-bold">F</span>}
          bgColor="bg-white"
          borderColor="border border-blue-400"
        />
        <Button
          icon={<span className="text-red-500 font-bold">IG</span>}
          bgColor="bg-white"
          borderColor="border border-red-400"
        />
      </td>
      <td className="p-4">
        <span className="px-3 py-1 text-sm bg-gray-200 rounded">
          {data.facebookStatus}
        </span>
      </td>
      <td className="p-4">
        <span className="px-3 py-1 text-sm bg-gray-200 rounded">
          {data.instagramStatus}
        </span>
      </td>
      <td className="p-4">{data.stockNo}</td>
      <td className="p-4">{data.vin}</td>
      <td className="p-4">{data.year}</td>
    </tr>
  );
};

export default function Page() {
  // Data kept inside the page component
  const tableData = [
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0102", vin: "KMHD84L2KU837728", year: "2019" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0101", vin: "1FMCU9HDXJUD45815", year: "2018" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0100", vin: "WP1AB2A56JLB36538", year: "2018" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0099", vin: "WAUBFCFL6FN034897", year: "2015" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0097", vin: "WAUHMAF42JA046140", year: "2018" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0096", vin: "KMHLMA4GXMU141060", year: "2021" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0095", vin: "WA1GFEFS6FR012185", year: "2015" },
    { facebookStatus: "UNPUBLISHED", instagramStatus: "UNPUBLISHED", stockNo: "TCB0094", vin: "2HGFC2F57JH008238", year: "2018" },
  ];

  return (
    <div className="p-6 h-screen overflow-hidden">
      <div className="p-4">
        <table className="w-full border-collapse border border-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Actions</th>
              <th className="p-4 text-left">Facebook Status</th>
              <th className="p-4 text-left">Instagram Status</th>
              <th className="p-4 text-left">Stock No</th>
              <th className="p-4 text-left">VIN</th>
              <th className="p-4 text-left">Year</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tableData.map((item, index) => (
              <TableRow key={index} data={item} />
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end items-center p-4">
          <select className="border p-2 rounded">
            <option>100 Per Page</option>
          </select>
          <div className="flex gap-2">
            <button className="border p-2 rounded">&lt;</button>
            <button className="border p-2 rounded bg-blue-500 text-white">1</button>
            <button className="border p-2 rounded">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
