import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaSave, FaFileAlt } from "react-icons/fa";
import { MdAssignmentInd } from "react-icons/md";

const LeadDetails = () => {
  return (
    <div className="pt-6  h-screen overflow-hidden">
      {/* Navigation Tabs */}
      <div className=" pl-6  flex space-x-6 border-b pb-2">
        <button className="text-blue-500 font-semibold border-b-2 border-blue-500">View</button>
        <button className="text-gray-500">Activities</button>
        <button className="text-gray-500">Notes</button>
        <button className="text-gray-500">Email Conversation</button>
        <button className="text-gray-500">Payment Log</button>
      </div>

      {/* Main Layout */}
      <div className=" h-screen  flex gap-x-6 justify-between mt-4 overflow-hidden">
        {/* Left Section: Lead Details */}
        <div className="flex-1 h-full flex-col bg-white shadow-lg rounded-lg p-6">
          <div className="border-b pb-2 mb-4 flex justify-between items-center">
            <h3 className="font-semibold text-lg">Lead Details</h3>
            <span className="flex items-center text-gray-600">
              <FaCalendarAlt className="text-blue-500 mr-2" /> 03/04/2025 03:18:00 PM
            </span>
          </div>

          <div className="border-b pb-4 mb-4">
            <div className="flex space-x-6">
              <p className="flex items-center text-lg font-semibold">
                <FaUser className="text-blue-500 mr-2" /> Sukhmantesh Singh
              </p>
              <p className="flex items-center text-gray-700">
                <FaEnvelope className="text-blue-500 mr-2" /> SinghSukhman585@gmail.com
              </p>
              <p className="flex items-center text-gray-700">
                <FaPhone className="text-green-500 mr-2" /> (705) 341-0103
              </p>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-full flex items-center">
                <MdAssignmentInd className="mr-2" /> Not Assigned
              </button>
              <div className="flex items-center text-blue-500 font-semibold">
                <FaSave className="mr-2" /> New
              </div>
              <div className="flex items-center text-gray-700 font-semibold">
                <FaFileAlt className="mr-2" /> Web Lead - Credit Application
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold bg-gray-100 p-3 rounded-md">More Details</h3>
          <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-4 text-gray-700">
          {[
                ["Mobile Phone", "7053410103"],
                ["Sin", "974019044"],
                ["Date Of Birth", "1995-11-25"],
                ["Marital Status", "Single"],
                ["Drivers License Number", "S4490-72609-51125"],
                ["Drivers License Expiry Date", "2029-08-20"],
                ["Home Address", "4 champlain blvd"],
                ["City", "Lindsay"],
                ["Province", "Ontario"],
                ["Postal Code", "K9V0H9"],
                ["Residence Status", "Rent"],
                ["Mortgage Rent Amount Monthly", "500"],
                ["Residence Period Years", "1"],
                ["Residence Period Months", "4"],
                ["Employer Name", "Sukhmantesh"],
              ].map(([label, value], index) => (
                <div key={index}>
                  <p className="text-gray-500 font-semibold pb-1 border-b border-gray-300">{label}</p>
                  <p className="text-black">{value}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Right Section: Car Details */}
        <div className="w-[350px] bg-white shadow-lg h-2/3 rounded-lg p-4 text-center">
          <img 
            src="https://source.unsplash.com/300x200/?audi-car" 
            alt="Car" 
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">2018 Audi A4 Progressiv</h3>
          <div className="grid grid-cols-2 gap-y-3 text-gray-700 mt-3 text-sm">
            <p className="font-semibold">VIN</p> <p className="font-bold text-black">WAUHMAF42JA046140</p>
            <p className="font-semibold">Stock No</p> <p className="font-bold text-black">TCB0097</p>
            <p className="font-semibold">Year</p> <p>2018</p>
            <p className="font-semibold">Make</p> <p>Audi</p>
            <p className="font-semibold">Model</p> <p>A4</p>
            <p className="font-semibold">Trim</p> <p>Progressiv</p>
            <p className="font-semibold">Odometer</p> <p>113000 KM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;