// import React, { useEffect, useState } from 'react';
// import "../CSS/Registration.css"; 
// import { Link } from 'react-router-dom';

// export const Registration = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         setIsVisible(true);
//     }, []);

//     return (
//         <>
//     <div className={`text-lg w-full cursor-pointer text-center p-1 whitespace-nowrap border-2 overflow-hidden font-bold  border-red-500 bg-red-500 text-white  rounded-lg `}>
//             <div className={`${isVisible ? 'animate' : ''}`}>Registration</div>
//         </div>
//         </>
//     );
// };

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../CSS/Registration.css"; 

export const Registration = () => {
    const [isOpen, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClick = () => {
        setOpen(!isOpen);
        setIsVisible(true);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    const handleScroll = () => {
        setOpen(false);
    };
const MobileLiClosed =()=>{
    setOpen(false)
}
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const cardRef = useRef(null);

    const refhandleScroll = () => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();

            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false); 
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', refhandleScroll);
        return () => {
            window.removeEventListener('scroll', refhandleScroll);
        };
    }, []);
    return (
        <div className="relative z-20" ref={dropdownRef}>
            <div 
                className="flex items-center cursor-pointer "
                onClick={handleClick}
            >
               <div ref={cardRef} className={`text-lg w-full cursor-pointer text-center p-1 whitespace-nowrap border-2 overflow-hidden font-bold  border-red-500 bg-red-500 text-white  rounded-lg flex justify-center items-center ${isVisible ? 'animate' : ''}`}>
            <div className={``}>Registration</div>
            <div>{isOpen ? (
                    <FaChevronUp className="text-white text-sm" />
                ) : (
                    <FaChevronDown className="text-white text-sm" />
                )}</div>
        </div>
                
            </div>
            {isOpen && (
                <ul className="mt-2 mr-20 list-none fixed bg-white z-50 border border-gray-300 rounded-md shadow-lg w-full"
                onClick={MobileLiClosed}>
                     <Link to="/DriverRegistration">
                        <li className="py-2 px-1 hover:text-red-500 hover:bg-red-100 cursor-pointer transition-colors duration-300">Driver Registration</li>
                    </Link>
                    <Link to="/VehicleRegistration">
                        <li className="py-2 px-1 hover:text-red-500 hover:bg-red-100 cursor-pointer transition-colors duration-300">Vehicle Registration</li>
                    </Link>
                   
                </ul>
            )}
        </div>
    );
};
