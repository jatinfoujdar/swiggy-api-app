import React, { useState,useEffect } from 'react';
import axios from 'axios';
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'; 



const Carousel = () => { 
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    axios.get('https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/')
      .then(response => {
        setCarouselData(response.data.cards[0].data.data.cards);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
      <div className="flex overflow-x-auto">
        {carouselData.map((image, index) => (
          <div
            key={index}
            className="w-64 bg-white m-4 p-4 rounded-lg shadow-md"
          >
            <img
              src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/${image.data.creativeId}`}
              alt={`Image ${index}`}
              className="w-full h-32 object-cover rounded-md"
            />
            <p className="mt-2 text-center">{image.data.type}</p>
            {/* Add more elements or data to display */}
          </div>
        ))}
      </div>
    );
}

export default Carousel;
