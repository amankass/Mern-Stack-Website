import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <header className="bg-slate-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-4 px-4"> {/* Added py-4 px-4 for padding */}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex-wrap">
            <span className="text-slate-950 hover:text-red-900">IBS BROKER</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-950" />
        </form>

        <ul className="hidden sm:flex gap-4"> {/* Hide list on small screens */}
          <Link to="/">
            <li className="py-1 text-slate-950 hover:text-red-600 font-medium text-sm 
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-210 duration-300">
              HOME
            </li>
          </Link>
          <Link to="/About">
            <li className="py-1 text-slate-950 hover:text-red-600 font-medium text-sm
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-210 duration-300">
              ABOUT
            </li>
          </Link>
          <Link to="/Car">
            <li className="py-1 text-slate-950 hover:text-red-600 font-medium text-sm 
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-210 duration-300">
              CAR  
            </li>
          </Link>
          <Link to="/House">
            <li className="py-1 text-slate-950 hover:text-red-600 font-medium text-sm
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-210 duration-300">
              HOUSE  
            </li>
          </Link>
          <Link to="/Contact">
            <li className="py-1 text-slate-950 hover:text-red-600 font-medium text-sm 
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-210 duration-300">
              CONTACT  
            </li>
          </Link>
        </ul>

        <div className="relative">
          <button
            className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 right-6"
            onClick={toggleDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 15 14"
              height={24}
              width={30}>
              <g id="user-circle-single--circle-geometric-human-person-single-user">
               <path id="Vector" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M7 8c1.38071 0 2.5 -1.11929 2.5 -2.5S8.38071 3 7 3 4.5 4.11929 4.5 5.5 5.61929 8 7 8Z" strokeWidth={1} />
               <path id="Vector_2" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M2.72998 11.9c0.44624 -0.7325 1.07341 -1.3379 1.82121 -1.7579 0.7478 -0.42012 1.59108 -0.64076 2.44879 -0.64076 0.85771 0 1.70099 0.22064 2.44879 0.64076 0.74783 0.42 1.37493 1.0254 1.82123 1.7579" strokeWidth={1} />
               <path id="Vector_3" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M7 13.5c3.5899 0 6.5 -2.9101 6.5 -6.5C13.5 3.41015 10.5899 0.5 7 0.5 3.41015 0.5 0.5 3.41015 0.5 7c0 3.5899 2.91015 6.5 6.5 6.5Z" strokeWidth={1} />
               </g>
            </svg>
          </button>
          <ul
            className={`absolute right-1 mt-2 w-40 py-1 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${
              isOpen ? 'block' : 'hidden'
            }`}>
            <Link to='/Sign-In'>
              <li className="py-1 text-slate-950 hover:text-red-600 font-medium rounded-lg m-1 hover:-translate-y-1 hover:scale-210 duration-300" onClick={closeDropdown}>Login</li>
            </Link>
            <Link to='/User-sign-up'>
              <li className="py-1 text-slate-950 hover:text-red-600 font-medium rounded-lg m-1 hover:-translate-y-1 hover:scale-210 duration-300" onClick={closeDropdown}>User SignUp</li>
            </Link>
            <Link to='/Sign-Up'>
              <li className="py-1 text-slate-950 hover:text-red-600 font-medium rounded-lg m-1 hover:-translate-y-1 hover:scale-210 duration-300" onClick={closeDropdown}>Broker SignUp</li>
            </Link>
            <Link to='/Profile'>
              <li className="py-1 text-slate-950 hover:text-red-600 font-medium rounded-lg m-1 hover:-translate-y-1 hover:scale-210 duration-300" onClick={closeDropdown}>Profile</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
