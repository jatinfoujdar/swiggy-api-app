import React from "react";
import RestaurantCard from "./Restaurant/RestaurantCard";
import { restaurantList } from "../MockData/restaurantList";

const Body = () => {
  return (
    <div className="flex">
      {restaurantList.map((restaurant) => (
        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
      ))}
    </div>
    
  );
};

export default Body;
