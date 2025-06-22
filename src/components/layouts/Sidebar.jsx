import React from 'react';
import { faHouseUser , faCalendarCheck, faChartBar, faAddressBook ,faTableList} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const textChange = ({ isActive }) => 
  `flex items-center p-2 mx-3 mb-6 mt-6 rounded-lg text-lg ${
    isActive
      ? 'bg-blue-300 text-gray-800'
      : 'hover:bg-indigo-100 hover:border-2 hover:text-gray-600'
  }`;

const Sidebar = () => {
  return (
    <div className="bg-blue-100 w-20 sm:w-32 md:w-48 lg:w-64 font-bold">
      <div className="flex flex-col">
        <h1 className='font-medium text-3xl mt-4 ml-3 flex items-center'>
          <FontAwesomeIcon icon={faAddressBook} />
          <span className='ml-3 hidden sm:inline'>DASHBOARD</span>
        </h1>

        <NavLink to="/" className={textChange}>
          <FontAwesomeIcon icon={faHouseUser } size='lg' />
          <span className='mx-3 hidden sm:inline'>Home</span>
        </NavLink>

        <NavLink to="/calendar" className={textChange}>
          <FontAwesomeIcon icon={faCalendarCheck} size='lg' />
          <span className='mx-3 hidden sm:inline'>Calendar</span>
        </NavLink>

        <NavLink to="/kanban" className={textChange}>
          <FontAwesomeIcon icon={faChartBar} size='lg' />
          <span className='mx-3 hidden sm:inline'>Kanban</span>
        </NavLink>

        <NavLink to="/tables" className={textChange}>
                  <FontAwesomeIcon icon={faTableList} size='lg' />
          <span className='mx-3 hidden sm:inline'>Tables</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
