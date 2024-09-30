import React from 'react';
import { FaFacebookF, FaInstagram, FaAmazon } from 'react-icons/fa';
import { SiFlipkart } from 'react-icons/si';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { FiPhone } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbWorldWww } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Registration } from './Registration';
export const Footer = () => {
  return (
    <div className="bg-gray-50 border-t-2 py-10 px-6 md:px-10 z-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly gap-10">
   
<ul className="flex flex-col space-y-3">
          <li>
          <div className='flex gap-2'>
          <div className='border-l-4 h-9  border-red-500 mb-6'></div>

            <h3 className="text-2xl font-semibold mb-2 ">Quick Links</h3>
            </div>
          
            <ul className="space-y-2">
              <li className="flex items-center text-center"><MdKeyboardArrowRight className="text-xl text-red-500 mr-2" /><Link to="/">Home</Link></li>
              <li className="flex items-center text-center"><MdKeyboardArrowRight className="text-xl text-red-500 mr-2" /><Link to="/about">About</Link></li>
              <li className="flex items-center text-center"><MdKeyboardArrowRight className="text-xl text-red-500 mr-2" /><Link to="/service">Our Services</Link></li>
              <li className="flex items-center text-center"><MdKeyboardArrowRight className="text-xl text-red-500 mr-2" /><Link to="/contact">Contact Us</Link></li>
              
            </ul>
          </li>
        </ul>

        {/* <ul className="flex flex-col space-y-3">
          <li>
            <h3 className="text-2xl font-semibold mb-2 ">Our Services</h3>
            <div className='border-b-4 w-20 border-red-700 mb-6'></div>
            <ul className="space-y-2">
              <li className="flex items-center text-center"><MdKeyboardArrowRight className="text-xl  text-red-700 mr-2" /><Link to="/">Education Consultancy</Link></li>
              <li className="flex items-center text-center"><MdKeyboardArrowRight className="text-xl  text-red-700 mr-2" /><Link to="/">Visa Consultancy</Link></li>
              <li className="flex items-center text-center"><MdKeyboardArrowRight className="text-xl  text-red-700 mr-2" /><Link to="/">Work Permit Consultancy</Link></li>
              <li className="flex items-center text-center"><MdKeyboardArrowRight className="text-xl  text-red-700 mr-2" /><Link to="/">IELTS</Link></li>
   </ul>
          </li>
        </ul> */}

        <ul className="flex flex-col space-y-3">
          <li>
            <div className='flex gap-2'>
          <div className='border-l-4 h-9  border-red-500 mb-6'></div>

            <h3 className="text-2xl font-semibold mb-2 ">Contact Us</h3>
            </div>
            <ul className="space-y-2">
            <li className="flex items-center text-center"><FaMobileAlt className="text-red-500  mr-2" /><Link to="/">+91 7347582722</Link></li>
            <li className="flex items-center text-center"><FaMobileAlt className="text-red-500  mr-2" /><Link to="/">+91 9915159671</Link></li>
              <li className="flex items-center text-center"><FiPhone className="text-red-500  mr-2" /><Link to="/">+91 01725052228</Link></li>
            
              <li className="flex items-center text-center"><HiOutlineMailOpen  className="text-red-500  mr-2 text-xl" /><Link to="/">pstransport@gmail.com</Link></li>
              <li className="flex items-center text-center"><TbWorldWww  className="text-red-500  mr-2 text-xl" /><Link to="/">www.pstransport.com</Link></li>
             
            </ul>
          </li>
        </ul>

        <ul className="flex flex-col space-y-2  ">
          <li className="list-none flex  items-center p-0 m-0">
            <img
              src='logo.png'
              alt='Logo'
              className='w-auto h-auto max-h-24 md:max-h-24 lg:max-h-24'
            />
          </li>

<li className='flex justify-center text-3xl font-bold text-gray-800'>Transport</li>
{/* <li className=''><Registration /></li> */}
          {/* <li className="flex space-x-4 ">
            <div className="text-blue-600 transition-colors text-2xl cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="text-pink-500 transition-colors text-2xl cursor-pointer">
              <FaInstagram />
            </div>
            <div className="text-yellow-500 transition-colors text-2xl cursor-pointer">
              <FaAmazon />
            </div>
            <div className="text-blue-600 transition-colors text-2xl cursor-pointer">
              <SiFlipkart />
            </div>
          </li> */}
        </ul>
 
      </div>

      <div className="text-center mt-10 border-t border-red-700 pt-5">
        <p>© 2024 PS Transport. All rights reserved.</p>
      </div>
    </div>
  );
};
