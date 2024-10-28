import React from 'react';
import image from "../assets/img.jpg"

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-md">
      <div className="flex items-center space-x-2">
        <img
          src={image}
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h1 className="text-lg font-bold">Alyan Khan</h1>
          <p className="text-sm text-gray-500">Karachi Division, Sindh</p>
          <p className="text-sm">Govt Degree Boys College</p>
        </div>
      </div>
      <div className="bg-gray-100 p-3 rounded-md">
        <h2 className="font-semibold">Connections</h2>
        <p className="text-sm">Connect with alumni</p>
      </div>
      <div className="bg-gray-100 p-3 rounded-md">
        <h2 className="font-semibold">More</h2>
        <ul className="mt-2 space-y-2">
          <li className="flex justify-between items-center">
            <span>Saved Items</span>
            <button className="text-blue-600 text-sm">View</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Groups</span>
            <button className="text-blue-600 text-sm">View</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Events</span>
            <button className="text-blue-600 text-sm">View</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;