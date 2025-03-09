import React from "react";
import { FaEdit, FaTrash, FaUserCheck } from "react-icons/fa";

const users = [
  {
    id: 1,
    name: "Vipash Rattan",
    email: "thecarboys@myyahoo.com",
    title: "Owner",
    registrationNo: "null",
    role: "Owner",
    leadAutoAssign: "ON",
  },
  {
    id: 2,
    name: "Tanveer Singh",
    email: "tanveersingh.rm@gmail.com",
    title: "Owner",
    registrationNo: "",
    role: "Owner",
    leadAutoAssign: "ON",
  },
];

const UserManagement = () => {
  return (
    <div className="p-6 bg-white">
      <div className="flex" >
      <h1 className="text-2xl font-semibold text-gray-800">User Management</h1>
      <p className="text-red-500 text-sm mt-1">NOTE: This section is only available to Account Owner and ZOP Staff.</p>
      
      <div className="flex justify-end mt-4">
        <button className="bg-white text-blue px-4 py-2 rounded-md hover:bg-blue-600">+ Add User</button>
      </div>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="p-3">USER ID</th>
              <th className="p-3">NAME</th>
              <th className="p-3">EMAIL ADDRESS</th>
              <th className="p-3">TITLE</th>
              <th className="p-3">REGISTRATION NO</th>
              <th className="p-3">ROLE</th>
              <th className="p-3">LEAD AUTO ASSIGN</th>
              <th className="p-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.title}</td>
                <td className="p-3">{user.registrationNo || "-"}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.leadAutoAssign}</td>
                <td className="p-3 flex space-x-3">
                  <button className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
                  <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                  <button className="text-green-500 hover:text-green-700"><FaUserCheck /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
