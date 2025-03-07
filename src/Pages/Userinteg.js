import React from "react";

const EmailChannel = () => {
  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 border-r">
        <h2 className="text-lg font-semibold text-gray-600">User Integrations</h2>
        <div className="mt-4">
          <button className="text-blue-500 font-semibold">Email Channel</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-blue-600 font-semibold">Email Channel</h2>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Save</button>
        </div>

        <p className="text-red-500 text-sm mb-4">
          Note: Email only works with providers that have SMTP delivery. Gmail and Office 365 will not work.
        </p>

        <div className="border-t border-gray-300 pt-6 space-y-4 w-3/4">
          {/* Name Field */}
          <div className="flex items-center gap-4">
            <label className="w-1/4 text-gray-700 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input className="border p-2 rounded w-full max-w-md" type="text" />
          </div>

          {/* Email Field */}
          <div className="flex items-center gap-4">
            <label className="w-1/4 text-gray-700 font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input className="border p-2 rounded w-full max-w-md" type="email" />
          </div>

          {/* Password Field */}
          <div className="flex items-center gap-4">
            <label className="w-1/4 text-gray-700 font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <input className="border p-2 rounded w-full max-w-md" type="password" />
          </div>

          {/* SMTP Host */}
          <div className="flex items-center gap-4">
            <label className="w-1/4 text-gray-700 font-medium">
              SMTP (Outgoing) Host <span className="text-red-500">*</span>
            </label>
            <input className="border p-2 rounded w-full max-w-md" type="text" />
          </div>

          {/* SMTP Port & Security */}
          <div className="flex items-center gap-4">
            <label className="w-1/4 text-gray-700 font-medium">
              SMTP (Outgoing) Port & Security <span className="text-red-500">*</span>
            </label>
            <div className="flex w-full max-w-md gap-4">
              <select className="border p-2 rounded w-1/2">
                <option>465</option>
              </select>
              <select className="border p-2 rounded w-1/2">
                <option>SSL</option>
              </select>
            </div>
          </div>

          {/* IMAP Host */}
          <div className="flex items-center gap-4">
            <label className="w-1/4 text-gray-700 font-medium">
              IMAP (Incoming) Host <span className="text-red-500">*</span>
            </label>
            <input className="border p-2 rounded w-full max-w-md" type="text" />
          </div>

          {/* IMAP Port & Security */}
          <div className="flex items-center gap-4">
            <label className="w-1/4 text-gray-700 font-medium">
              IMAP (Incoming) Port & Security <span className="text-red-500">*</span>
            </label>
            <div className="flex w-full max-w-md gap-4">
              <select className="border p-2 rounded w-1/2">
                <option>993</option>
              </select>
              <select className="border p-2 rounded w-1/2">
                <option>SSL</option>
              </select>
            </div>
          </div>

          {/* Authentication */}
          <div className="flex items-center gap-4">
            <label className="w-1/4 text-gray-700 font-medium">
              Authentication <span className="text-red-500">*</span>
            </label>
            <button className="bg-green-500 text-white px-4 py-1 rounded-full">ON</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailChannel;
