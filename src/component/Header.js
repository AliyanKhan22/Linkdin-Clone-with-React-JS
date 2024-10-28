import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineBell } from 'react-icons/ai';
import { RiSuitcaseLine } from 'react-icons/ri';
import { FiMessageSquare, FiSearch } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import image from "../assets/img.jpg"

const Header = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <FaLinkedin className="text-blue-600 text-3xl" />
        <div className="flex items-center bg-gray-100 p-2 rounded-md">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>
      <div className="flex space-x-8 text-gray-600">
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <AiOutlineHome className="text-xl" />
          <span className="text-xs">Home</span>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'myNetwork' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
          onClick={() => setActiveTab('myNetwork')}
        >
          <AiOutlineUser className="text-xl" />
          <span className="text-xs">My Network</span>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'jobs' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
          onClick={() => setActiveTab('jobs')}
        >
          <RiSuitcaseLine className="text-xl" />
          <span className="text-xs">Jobs</span>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'messaging' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
          onClick={() => setActiveTab('messaging')}
        >
          <FiMessageSquare className="text-xl" />
          <span className="text-xs">Messaging</span>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'notifications' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          <AiOutlineBell className="text-xl" />
          <span className="text-xs">Notifications</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <img
          src={image}
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <p className="text-sm">Me</p>
      </div>
    </div>
  );
};

export default Header;