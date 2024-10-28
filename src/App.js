import React from 'react';
 import Header from './component/Header';
 import Sidebar from './component/Sidebar';
 import Feed from './component/Feed';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex justify-center p-6">
        <div className="flex w-full max-w-6xl space-x-6">
          <div className="hidden md:block w-1/4">
            <Sidebar />
          </div>
          <div className="w-full md:w-1/2">
            <Feed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;