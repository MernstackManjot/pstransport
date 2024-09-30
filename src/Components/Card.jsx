// import React from 'react';

// export const CardServices = ({ title, description, image }) => {
//   return (
//     <div className="relative transition-transform transform  hover:bg-red-700 hover:text-white hover:translate-y-2 active:translate-y-1  rounded-xl border shadow-lg p-6 hover:shadow-2xl cursor-pointer ease-in-out duration-300 z-10 flex flex-col items-center bg-white">
      
//       <div className="w-20 h-20 mb-2 overflow-hidden rounded-lg flex justify-center ">
//         <img
//           src={image}
//           alt={title}
//           className="h-20 object-cover"
//         />
//       </div>

//       <div className="text-center space-y-2">
//         <h3 className="text-xl font-semibold  ">{title}</h3>
//         <p>{description}</p>
//         {/* <div className="border-t mt-2"></div>
//         <button className=" font-bold hover:underline hover:text-white">View More -</button> */}
//       </div>

     
//     </div>
//   );
// };
import React from 'react';

export const CardServices = ({ title, description, image }) => {
  return (
    <div className="relative transition-transform transform hover:bg-red-700 hover:text-white hover:translate-y-1 active:translate-y-0 rounded-xl border border-red-200 shadow-lg p-6 hover:shadow-2xl cursor-pointer ease-in-out duration-300 z-10 flex flex-col items-center bg-white">
      
      <div className="w-20 h-20 mb-2 overflow-hidden rounded-lg flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold transition-colors duration-300 ease-in-out">{title}</h3>
        <p className="transition-colors duration-300 ease-in-out">{description}</p>
      </div>
    </div>
  );
};
