import React, { useEffect } from 'react'

export const Service = () => {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <>
    <div className='flex justify-center items-center mt-4'>
      <div className='  '>
      <div
        className="relative w-full h-[100px] md:h-[150px] lg:h-[170px] object-cover overflow-hidden font-thin bg-cover bg-center   rounded-lg"
        style={{ backgroundImage: "url('https://www.ashokleyland.com/backend/wp-content/uploads/2024/09/backend_wp-content_uploads_2024_09_Truck-Range-with-Partner_May-2023_1_Banner-Desktop-1440x620px-1.jpg')" }}
      >
        <div className="absolute inset-0 flex items-center  bg-black bg-opacity-30 text-white text-center p-4">
          <div className="border-l-8 border-red-500 pl-4 "> 
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Service</h1>
          </div>
        </div>
      </div>
        {/* <h1 className='text-3xl font-bold mb-6 text-center text-red-500'>Service</h1> */}
        <div className='max-w-4xl mx-auto p-4'>
          <p className='text-lg md:text-lg mb-6'>
            {/* With five years of experience in goods supply across India, Reban Transport has become a trusted
            partner for businesses and individuals alike.  */}
    With Seven years of experience in goods supply across India, PS Transport has become a trusted
            partner for businesses and individuals alike. We provide a wide range of trucks tailored to meet
            various transportation needs. Our fleet is equipped with the latest models to ensure safety,
            reliability, and efficiency in every delivery.

          </p>

          <div>
            <h3 className='text-2xl  font-semibold mb-4'>Our Fleet of Trucks
            </h3>
            <ul className='list-decimal  space-y-4 text-left ml-3'>
              <li><span className='font-bold'> Small Trucks (Pick-Up / Mini-Trucks)
              </span>
                <ul className='list-disc  space-y-2 pl-12 mt-1'>
                  <li><span className='font-semibold'>Models:
                  </span> Tata Ace, Mahindra Bolero, Ashok Leyland Dost. </li>
                  <li><span className='font-semibold'>Lifting Capacity:
                  </span> 500 kg to 2 tons </li>
                  <li><span className='font-semibold'>Ideal For:
                  </span>Transporting light cargo, e-commerce goods, and small shipments within
                    cities or to nearby destinations. </li></ul></li>

              <li><span className='font-bold'> Medium Trucks (LCVs - Light Commercial Vehicles)
              </span>
                <ul className='list-disc  space-y-2 pl-12 mt-1'>
                  <li><span className='font-semibold'>Models:
                  </span>  Tata 407, Eicher Pro 1049, Mahindra Furio</li>
                  <li><span className='font-semibold'>Lifting Capacity:
                  </span>  2 tons to 6 tons </li>
                  <li><span className='font-semibold'>Ideal For:
                  </span> Medium-sized goods, construction materials, and daily essentials over
                    mid-range distances. </li></ul></li>

              <li><span className='font-bold'> Heavy Trucks (ICVs - Intermediate Commercial Vehicles)

              </span>
                <ul className='list-disc  space-y-2 pl-12 mt-1'>
                  <li><span className='font-semibold'>Models:
                  </span>Tata LPT 1613, Ashok Leyland 1616, Eicher Pro 3015
                  </li>
                  <li><span className='font-semibold'>Lifting Capacity:
                  </span> 6 tons to 16 tons
                  </li>
                  <li><span className='font-semibold'>Ideal For:
                  </span> Bulk goods, agricultural products, and industrial equipment over long
                    distances.</li></ul></li>



              <li><span className='font-bold'> Trailers and Container Trucks
              </span>
                <ul className='list-disc  space-y-2 pl-12 mt-1'>
                  <li><span className='font-semibold'>Models:
                  </span>Tata Prima LX, Ashok Leyland U-3718, BharatBenz 4928T </li>
                  <li><span className='font-semibold'>Lifting Capacity:
                  </span> 20 tons to 40 tons</li>
                  <li><span className='font-semibold'>Ideal For:
                  </span> Transporting large containers, heavy machinery, vehicles, and oversized
                    cargo. </li></ul></li>



              <li><span className='font-bold'> Refrigerated Trucks
              </span>
                <ul className='list-disc  space-y-2 pl-12 mt-1'>
                  <li><span className='font-semibold'>Models:
                  </span>Tata Ultra T.11, Ashok Leyland Reefer, Eicher Reefer Pro </li>
                  <li><span className='font-semibold'>Lifting Capacity:
                  </span>Up to 10 tons</li>
                  <li><span className='font-semibold'>Ideal For:
                  </span> Perishable goods such as food products, medicines, and dairy items that
                    require temperature control.</li></ul></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
