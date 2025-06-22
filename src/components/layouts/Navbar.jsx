import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';


const Navbar = ({ onToggleSidebar }) => {
  return (
  <nav className="  ml-3 p-2 text-3xl  mt-2 mr-2.5 mb-12 ">
    <div className=' mb-10'>

      {/* Floating Button with Tooltip */}
      <div className="fixed  group z-50  ">
        <button
          onClick={onToggleSidebar}
          className="  rounded-2xl  p-1 text-black  hover:scale-105 transition duration-300"
        >
          <FontAwesomeIcon icon={faBars}  />
        </button>

        {/* Tooltip */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 mt-1 w-max opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="relative bg-gray-600 text-white text-sm px-3 py-3  rounded-md">
            Menu
            {/* Arrow */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-600 rotate-45"></div>
          </div>
        </div>
      </div>
      </div>
    </nav>
   
  );
};

export default Navbar;
