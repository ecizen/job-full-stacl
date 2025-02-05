'use client';
import React, { useState, useEffect } from "react";
import { ChevronRight, User } from "lucide-react";
import Image from "next/image";
import images from "@/app/assets/image";

const FeatureSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Find opportunities for every stage of your freelance career",
      buttonText: "Join Now",
    },
    {
      title: "Learn new skills to enhance your freelancing journey",
      buttonText: "Get Started",
    },
    {
      title: "Connect with top clients and grow your portfolio",
      buttonText: "Explore Now",
    },
  ];

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-full lg:max-h-[330px] lg:h-auto h-max lg:gap-0 gap-2  lg:p-12 p-6 grid lg:grid-cols-4 md:grid-cols-3  grid-cols-2">
      <div className="relative w-full col-span-1  bg-[#5E46FE] max-h-[250px] rounded-lg overflow-hidden text-white">
        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${currentSlide * 100}%)`, // Slide horizontally
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full p-4 "
            >
              <div className=" space-t-2">
                <User size={28} className="text-white mb-2" />
                <h1 className="font-semibold lg:text-md text-xs leading-relaxed">
                  {slide.title}
                </h1>
                <div className=" py-4">
                    <div className="flex gap-1">
                        {slides.map((_, index) => (
                            <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                                currentSlide === index ? "bg-white w-[15px]" : "bg-opacity-50 bg-white"
                            } cursor-pointer`}
                            onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-[3px] max-w-[3px] bg-gray-200 h-[3px] rounded-full"/>
                    <div className="w-full bg-gray-300 h-[1px]"/>
                    <div className="w-[3px] max-w-[3px] bg-gray-200 h-[3px] rounded-full"/>
                </div>
                <div className="py-4 mt-4">
                <button className="bg-white text-[#5E46FE] rounded-full px-4 text-xs font-semibold py-2">
                  {slide.buttonText}
                </button>
                 </div>       
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-[50%] right-2 transform -translate-y-1/2 bg-white  p-2 rounded-full shadow"
          onClick={goToNextSlide}
           aria-label="Next slide"
        >
            <ChevronRight size={16} className="text-white z-30 bg-blue-600 rounded-full"/>
        </button>

        {/* Navigation Arrows */}
        {/* <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-[#5E46FE] p-2 rounded-full shadow"
          onClick={goToPrevSlide}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-[#5E46FE] p-2 rounded-full shadow"
          onClick={goToNextSlide}
        >
          ❯
        </button> */}

        {/* Navigation Dots */}
      </div>
      <figure className="w-full lg:col-span-3 md:col-span-2 col-span-1 lg:px-6">
            <Image src={images.Pekerja} alt="gambar" className="w-full object-cover brightness-50 rounded-xl  lg:max-h-[250px] h-full"/>
      </figure>
    </section>
  );
};

export default FeatureSection;
