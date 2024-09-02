import React from "react";

const AdminSidebar = () => {
  return (
    <div className="w-48 h-full text-black-50 py-10  shadow-xl p-7 mt-3 rounded-xl">
      <h1 className="text-xl mb-4 text-blue-300 font-semibold">Dashboard</h1>
      <div>
        <ul className="text-lg">
          <li className=" hover:text-blue-400 cursor-pointer">
            Post a product
          </li>
          <li className=" hover:text-blue-400 cursor-pointer">Profile</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
