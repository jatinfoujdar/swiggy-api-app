import React,{useState} from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Option } from '../../utils/constants';

const Carousellink = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevImage = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    const nextImage = () => {
        if (currentIndex < Option.length - 3) {
          setCurrentIndex(currentIndex + 1);
        }
      };
      
      

  return (
    <div className="relative mx-28  ">
    {currentIndex !== 0 && (
      <button
        className="absolute z-10 top-1/2 left-2 bg-white text-gray-900 rounded-full p-4 transform -translate-y-1/2 hover:shadow-md focus:outline-none transition-all duration-500 ease-in-out"
        onClick={prevImage}
      >
        <AiOutlineArrowLeft className="h-6 w-6 hover:-translate-x-2 transition-transform duration-750 ease-in-out" />
      </button>
    )}
  <h1 className='font-bold mt-8 text-2xl ml-12'>What's on your mind?</h1>
    {currentIndex + 3 !== Option.length && (
      <button
        className="absolute z-10 top-1/2 right-2 bg-white text-gray-900 rounded-full p-4 transform -translate-y-1/2 hover:shadow-md focus:outline-none"
        onClick={nextImage}
      >
        <AiOutlineArrowRight className="h-6 w-6 hover:translate-x-2 transition-transform duration-750 ease-in-out" />
      </button>
    )}

    <div
      className="flex overflow-x-hidden transition-all duration-1000 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 24}rem)` }}
    >
      {Option.map((image, index) => (
        <img
          key={index}
          src={image.url}
          className={`h-[290px] object-cover py-10 px-6 ${
            index === 0 ? 'ml-0' : ''
          } ${
            index === currentIndex
              ? 'transform scale-105 transition-transform duration-500'
              : 'transform scale-100 transition-transform duration-500'
          }`}
          alt={`Image ${index}`}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      ))}
    </div>
  </div>
  )
}

export default Carousellink