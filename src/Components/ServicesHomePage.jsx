import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { CardServices } from './Card';
import '../CSS/card.css'

export const ServicesHomePage = () => {
    const services = [
        {
          title: "Small Trucks",
          description: "Tata Ace, Mahindra Bolero, Ashok Leyland Dost.",
          image: "https://cdn-icons-png.freepik.com/256/12239/12239916.png?ga=GA1.2.830621292.1707550020&semt=ais_hybrid",
          link: "/service"
        },
        {
          title: "Medium Trucks",
          description: "407, Eicher Pro 1049, Mahindra Furio",
          image: "https://cdn-icons-png.freepik.com/256/1542/1542738.png?ga=GA1.2.830621292.1707550020&semt=ais_hybrid",
          link: "/service"
        },
        {
          title: "Heavy Trucks",
          description: " Tata LPT 1613, Ashok Leyland 1616, Eicher Pro 3015",
          image: "https://cdn-icons-png.freepik.com/256/16936/16936007.png?ga=GA1.2.830621292.1707550020&semt=ais_hybrid",
          link: "/service"
        },
      ];
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
          setIsVisible(true);
      }, []);
      const cardRef = useRef(null);

    const handleScroll = () => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
          
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false); 
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
  return (
    <>
    <div className={`text-center p-10 `}>
        <div className='flex justify-between items-center'>
            <div>
        <h1 className='text-3xl font-bold mb-4'>Our Services</h1>
        <div className="flex items-center justify-center text-center mb-6">
      <span className=" border-b-8 rounded-full border-red-500  w-3 mx-"></span>
             <span className=" border-b-8 rounded-full border-red-500 w-3 mx-2"></span>
                    <div className="border-b-4  border-red-500 rounded-lg w-20"></div>
                    {/* <span className=" border-b-8 rounded-full border-red-500 w-2 mx-2"></span>
                 <span className=" border-b-8 rounded-full border-red-500 w-2 mx-"></span> */}
                </div>
                </div>

              <Link to="/service" > <div className=" text-xl font-bold border border-red-700 bg-red-500 text-white py-2 px-4 rounded-lg">More-</div></Link>
        </div>
                <div   ref={cardRef} className={`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 ${isVisible ? 'cardanimate' : ''} `}>
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <CardServices
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </Link>
          ))}
        </div>
    </div>
    </>
  )
}
