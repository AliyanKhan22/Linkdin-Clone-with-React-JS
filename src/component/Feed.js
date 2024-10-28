import React from 'react';
import { MdPhoto, MdVideocam, MdEvent, MdArticle } from 'react-icons/md';

const Feed = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-white p-4 shadow-md rounded-md">
        <h3 className="font-semibold">Start a post</h3>
        <div className="flex items-center mt-2 space-x-4">
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind?"
          ></textarea>
        </div>
        <div className="flex justify-between mt-2">
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-500">
            <MdPhoto className="text-xl" /> <span>Photo</span>
          </button>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-500">
            <MdVideocam className="text-xl" /> <span>Video</span>
          </button>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-500">
            <MdEvent className="text-xl" /> <span>Event</span>
          </button>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-500">
            <MdArticle className="text-xl" /> <span>Write Article</span>
          </button>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md rounded-md">
        <h4 className="font-semibold">Alyan Khan</h4>
        <p className="text-sm text-gray-500">Karachi Division, Sindh</p>
        <p className="text-gray-700 mt-2">This is a post description...</p>
      </div>
      <div className="bg-white p-4 shadow-md rounded-md">
        <h4 className="font-semibold">Suggestions for you</h4>
        <div className="mt-2">
          <div className="flex justify-between items-center py-2 border-b">
            <p>Ali Raza</p>
            <button className="text-blue-600 text-sm">Follow</button>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <p>Fatima Khan</p>
            <button className="text-blue-600 text-sm">Follow</button>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <p>Usman Ali</p>
            <button className="text-blue-600 text-sm">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;