import React, { useEffect } from 'react';

export const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className='flex justify-center items-center mt-4'>
        <div>
          <div
            className="relative w-full h-[100px] md:h-[150px] lg:h-[180px] object-cover overflow-hidden font-thin bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('https://www.ashokleyland.com/backend/wp-content/uploads/2024/09/backend_wp-content_uploads_2024_09_Truck-Range-with-Partner_May-2023_1_Banner-Desktop-1440x620px-1.jpg')" }}
          >
            <div className="absolute inset-0 flex items-center bg-black bg-opacity-30 text-white text-center p-4">
              <div className="border-l-8 border-red-500 pl-4"> 
                <h1 className="text-2xl md:text-4xl font-bold mb-4">About Us</h1>
              </div>
            </div>
          </div>
          <div className='max-w-4xl mx-auto p-4'>
            <h1 className="text-xl md:text-2xl font-semibold mb-4">Welcome to <span className='text-red-500'>PS Transport</span>  – Your Reliable Goods Transportation Partner!</h1>
            <p className='text-lg mb-6 leading-relaxed'>
              PS Transport is a trusted logistics and transportation company based in Mohali, Punjab, committed 
              to delivering reliable and efficient goods transport services across India. With a focus on safety, 
              punctuality, and customer satisfaction, we have become a preferred choice for businesses and 
              individuals.
            </p>
            <p className='text-lg mb-6 leading-relaxed'>
              With over 7 years of experience, our company operates a fleet of modern trucks and vehicles that
              handle a wide range of transportation needs, from small goods to heavy-duty cargo. We specialize in 
              providing end-to-end transport solutions, ensuring your goods reach their destination safely and on 
              time.
            </p>
            <p className='text-lg mb-6 leading-relaxed'>
              At PS Transport, we believe in building long-lasting relationships with our clients by offering 
              customized logistics solutions tailored to their specific requirements. Our team of experienced 
              drivers and staff is dedicated to maintaining high standards of service, ensuring that your business 
              keeps moving smoothly.
            </p>
            <p className='text-lg leading-relaxed'>
              Whether you're transporting goods locally or across the country, you can count on PS Transport to 
              deliver excellence, every time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
