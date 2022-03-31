import React from 'react';
import { FaSkull, FaGamepad, FaAws, FaFirefox } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div
      className='fixed top-0 left-0 h-screen w-16 m-0 
    flex flex-col bg-gray-900 text-white shadow-lg'
    >
      {/* Check Global CSS */}

      <FaSkull className='sidebar_icon' />
      <FaGamepad className='sidebar_icon' />
      <FaAws className='sidebar_icon' />
      <FaFirefox className='sidebar_icon' />

      <p className='sidebar_icon'> Rekt </p>
    </div>
  );
};

export default Sidebar;
