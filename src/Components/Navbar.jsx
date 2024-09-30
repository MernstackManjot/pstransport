import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Registration } from './Registration';



export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const MobileLiClosed = () => {
    setIsOpen(false);
  };

  const navdata = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path:"/service",name: 'Service' },
    // { path: '/', name: 'Regisation', className:" text-xl font-bold border border-red-700 bg-red-700 text-white py-2 px-4 rounded-lg " },
    { path: '/contact', name: 'Contact' },

  ];

  const location = useLocation();

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div>
      <div className="bg- sm:p-4 md:p-3 shadow-md text-gray-900">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <div className="flex items-center p-2">
          <img
            src='logo.png'
            alt='Logo'
            className='h-16 md:h-20 w-auto '
          />
            {/* <h1 className='text-3xl md:text-4xl font-bold ml-2'>Chawla Overseas</h1> */}
          </div>

          <div className="hidden md:flex font-bold mr-3 gap-6 justify-center items-center">

            <ul className="flex flex-row space-x-10 text-xl">
            
              {navdata.map((item) => (
                <li key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className={`hover:text-red-500 cursor-pointer text-lg  ${location.pathname === item.path ? 'text-red-500 ' : ''}`}
                  >
                    {item.name}
                  </Link>
               
                </li>
              ))}
            </ul>
         <Registration />

          </div>

     <div className="md:hidden flex items-center ">
          <Registration />
          </div>
          <div className="md:hidden flex items-center mr-8">
            <button onClick={handleMenuToggle} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div className={`fixed z-50 left-0  top-0 bg-[#ffffff] md:hidden transition-transform duration-300 ${isOpen ? 'translate-y-20' : '-translate-x-full'}`}>
            <ul className={`flex flex-col space-y-4 p-4 font-bold ${isOpen ? 'mt-' : ''}`} ref={dropdownRef}>
              {navdata.map((item) => (
                <li key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    onClick={MobileLiClosed}
                    className={`hover:text-red-500 cursor-pointer text-lg ${location.pathname === item.path ? 'text-red-800' : ''}`}
                  >
                    {item.name}
                  </Link>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0'}`}
                  ></span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
};
