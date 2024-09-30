import React, { useEffect } from 'react';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { HomePageAbout } from '../Components/HomePageAbout';
import { ServicesHomePage } from '../Components/ServicesHomePage';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    useEffect(()=>{
        window.scroll(0,0)
      })
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 5000,
        fade: true,
      
    };

    const slides = [
        {
            src: "https://www.ashokleyland.com/backend/wp-content/uploads/2024/02/Ecomet-Haulage-1.jpg",
            alt: "Slide 1",
        },
        {
            src: "https://www.ashokleyland.com/backend/wp-content/uploads/2024/02/02_Boss-LX-1_Banner-Desktop-1440x620px.jpg",
            alt: "Slide 2",
        },
        {
            src: "https://auto.mahindra.com/on/demandware.static/-/Sites-amc-Library/default/dw5112c7ad/-/media/project/mahindra/dotcom/mahindra/bolero-maxx-hd/key-hightlight/desktop/key-highlights4.png?extension=webp", 
            alt: "Slide 3",
        },
        {
            src: "https://www.ashokleyland.com/backend/wp-content/uploads/2024/08/backend_wp-content_uploads_2024_08_Web-Banner-1-1689X662-1-1.jpg", 
            alt: "Slide 4",
        }
    ];

    return (
      <>
      <div className="relative w-full overflow-hidden h-[150px] sm:h-[400px] md:h-[300px] lg:h-[510px]">
          <Slider {...settings}>
              {slides.map((slide, index) => (
                  <div key={index}>
                      <img
                          className="h-full w-full object-cover"
                          src={slide.src}
                          alt={slide.alt}
                      />
                  </div>
              ))}
          </Slider>

          <div className="absolute inset-0 flex items-center bg-black bg-opacity-10 text-white text-center p-4 sm:p-6 md:p-10">
              <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4">
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold mb-2 sm:mb-4 text-red-500">
                      PS Transport
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                      This podcast features conversations with nonprofit leaders to brainstorm ways they can grow their organizations and do more good.
                  </p>
                <Link to="contact"> <button className="hidden md:flex ml-32 bg-red-500 text-white py-3 px-6 mt-5 rounded-lg font-bold transition duration-300 transform hover:bg-red-600 hover:scale-105 active:scale-95">
                      Contact Us
                  </button></Link> 
              </div>
          </div>
      </div>
      <div>
          <HomePageAbout />
      </div>
      <div>
        <ServicesHomePage />
      </div>
  </>
    );
};
