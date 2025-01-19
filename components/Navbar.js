"use client"

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaChevronDown, FaCross, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdArrowDropDown } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const navItems = [
    { label: 'Home', link: '/' },
    {
      label: 'About Us',
      link: '/about',
      dropdown: ['Our Team', 'Career'],
    },
    {
      label: 'Services',
      link: '/services',
      dropdown: ['Electrical', 'Energy Design', 'Building Envelope','Mechanical','HVAC','Sprinkler','Book A Field Review','Blower Door Test'],
    },
    { label: 'Get a Quote', link: '/quote' },
    {
      label: 'Useful Links',
      link: '/links',
      dropdown: ['Professional Development', 'Covid-19 Form', 'Blog'],
    },
  ];

  return (
    <nav className="bg-[#71bf44] shadow-md py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 z-5">
        <div className="flex items-center justify-between h-16 z-5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="https://voltasengineering.com/wp-content/uploads/2020/12/logo.png"
                alt="logo"
                className="h-14 w-48"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-20">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => item.dropdown && toggleDropdown(index)}
                onMouseLeave={() => item.dropdown && toggleDropdown(index)}
              >
                <div
                //   href={item.link}
                  className="text-white font-bold uppercase flex items-center cursor-pointer" 
                >
                  {item.label}
                  {item.dropdown && (
                    <MdArrowDropDown size={20} className="ml-1 text-sm" />
                  )}
                </div>
                {/* Dropdown */}
                {item.dropdown && dropdownOpen[index] && (
                  <div className="absolute left-0 mt-2 w-60 bg-white border-4 border-[#71bf44]">
                    {item.dropdown.map((option, idx) => (
                      <div
                        key={idx}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none z-10"
            >
              {menuOpen ? <FiX size={24} className='z-10'/> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 bg-white shadow-lg transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 lg:hidden w-64`}
      >
        <div className="p-4">
          {/* Sidebar Logo */}
          <div className="flex justify-left mb-6 mt-4">
            <img
              src="https://voltasengineering.com/wp-content/uploads/2020/12/logo.png"
              alt="logo"
              className="h-10 ml-2"
            />
            <FiX onClick={toggleMenu} size={32} className='cursor-pointer ml-16 text-black'/>
          </div>

          {/* Sidebar Items */}
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <div
                // href={item.link}
                className="block px-4 py-3 text-blue-800 font-bold cursor-pointer"
                onClick={() =>
                  item.dropdown && toggleDropdown(index)
                }
              >
                {item.label}
                {item.dropdown && <MdArrowDropDown className="ml-1 inline" />}
              </div>
              {item.dropdown && dropdownOpen[index] && (
                <div>
                  {item.dropdown.map((option, idx) => (
                    <div
                      key={idx}
                      className="block px-6 py-2 text-gray-700 "
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Social Icons */}
          <div className="flex justify-start space-x-4 mt-8 ml-4">
            <a
              href="https://facebook.com/voltasengineering"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com/voltasengineering"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
