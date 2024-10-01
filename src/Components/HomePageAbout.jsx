import React from 'react'
import { Link } from 'react-router-dom'

export const HomePageAbout = () => {
    return (
        <>
        <div className=' p-10 bg-stone-50'>
      <h1 className='text-3xl font-bold'>About Us</h1>
      <div className="flex  mb-6">
      <span className=" border-b-8 rounded-full border-red-500  w-3 mx-"></span>
             <span className=" border-b-8 rounded-full border-red-500 w-3 mx-2"></span>
                    <div className="border-b-4  border-red-500 rounded-lg w-20"></div>
                    {/* <span className=" border-b-8 rounded-full border-red-500 w-2 mx-2"></span>
                 <span className=" border-b-8 rounded-full border-red-500 w-2 mx-"></span> */}
                </div>
            <div className="flex flex-col md:flex-row  rounded-xl shadow-md overflow-hidden text-center md:text-left">

                <div className="flex flex-col justify-center p-6 md:p-8 bg-gray-50 w-full md:w-1/2">
                    <p className="text-sm md:text-lg text-gray-800">
                    We provide reliable and efficient transport services, ensuring your goods reach every corner of the country safely and on time. With a diverse fleet of vehicles, we cater to all your transportation needs, offering customized solutions for every client.
                    </p>
                   <Link to="/about"> <button className="bg-red-500 w-40 text-white py-3 px-8 mt-5 rounded-lg font-bold transition duration-500 transform hover:bg-gradient-to-b from-red-400 to-red-600 hover:scale-105 active:scale-95">
                           Read More -
                        </button></Link>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 bg-gray-50">
                    <img
                        src="https://auto.mahindra.com/on/demandware.static/-/Sites-amc-Library/default/dwd02aee42/-/media/project/mahindra/dotcom/mahindra/configuratorassets/scv/bolero-pickup/pick-up-1-3t/868x420/left.png?extension=webp"
                        alt="Vehicle"
                        className="w-full h-auto object-cover text-center"
                    />
                </div>
            </div>
            </div>
        </>
    )
}
