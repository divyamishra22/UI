import React from "react";
import { FaHeadset } from "react-icons/fa";

const HelpCenterModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[500px] p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Help Center</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl">&times;</button>
        </div>

        {/* Content */}
        <div className="py-4">
          <p className="text-gray-600 italic">
            The Zop Help Center will support you as you learn about and use Zop Software.
            We have documentation and videos to answer your questions.
          </p>
          <p className="mt-3 text-gray-600 italic">
            Can’t find the answers you’re looking for? <br />
            Please submit a support ticket & our support agent will be in touch within one business day.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="flex-1 border p-4 rounded-md flex flex-col items-center hover:shadow-md">
            <FaHeadset className="text-red-500 text-3xl mb-2" />
            <span className="text-gray-700 font-semibold">CONTACT SUPPORT</span>
          </button>
          <button className="flex-1 border p-4 rounded-md flex flex-col items-center hover:shadow-md">
            <FaHeadset className="text-blue-500 text-3xl mb-2" />
            <span className="text-gray-700 font-semibold">KNOWLEDGE BASE</span>
          </button>
        </div>

        {/* Close Button */}
        <div className="mt-6 flex justify-end">
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterModal;
