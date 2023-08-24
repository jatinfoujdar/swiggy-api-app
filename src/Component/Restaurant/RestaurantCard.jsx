import React from 'react';
import { IMG_CDN_URL } from '../../MockData/restaurantList';


const RestaurantCard = ({
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    link
    }) => {

  return (
    <div className='ml-14'>
    <div className="w-[290px] relative py-6 mx-3 ml-8 ">
        
      <div className="p-4 rounded-md hover:shadow-xl hover:border hover:border-gray-300">
     
        <img
          className="w-full h-[180px] object-cover rounded-md"
          src={IMG_CDN_URL+cloudinaryImageId }
          alt={name}
        />
        <h4 className="pt-2 font-semibold  mr-1">⭐{avgRating}</h4>
        <h1 className="pt-2 font-semibold text-xl">{name}</h1>
        <h6 className="font-normal text-gray-600 text-xs">
          {cuisines?.join(", ")}
        </h6>
        <a
          className="mt-2 text-blue-500 cursor-pointer hover:underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Order Now
        </a>
      </div>
    </div>
    </div>
  );
};




export default RestaurantCard;
