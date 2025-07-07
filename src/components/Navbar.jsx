import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ['home', 'services', 'projects','about', 'blogs','Contact'];

  return (
    <div className=' w-full h-[80px] fixed top-0 z-50 font-[Inter]'>
      {/* Desktop Capsule Navbar */}
      <div className='hidden md:flex justify-center'>
        <div className='h-[60px] w-[650px] border border-[#c8c8c8] rounded-4xl bg-black flex items-center mt-5'>
          <ul className='flex justify-evenly items-center w-full'>
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === item
                    ? 'bg-[#262424] text-[#BE6A26]'
                    : 'text-white hover:text-[13px] hover:bg-[#4f4e4e]'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navbar Header */}
      <div className='md:hidden flex justify-between items-center px-5 h-full'>
        <div className='text-white text-lg font-bold'>Spark Tech</div>
        <button
          className='text-white text-2xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className='md:hidden absolute top-[80px] left-0 w-full bg-black border-t border-[#444]'>
          <ul className='flex flex-col items-center gap-4 py-4'>
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
                className={`cursor-pointer px-4 py-2 rounded-full text-base font-semibold transition-all duration-200 ${
                  active === item
                    ? 'bg-[#262424] text-[#BE6A26]'
                    : 'text-white hover:bg-[#4f4e4e]'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
