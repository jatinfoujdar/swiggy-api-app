import React from "react";
import RestaurantCard from "./Restaurant/RestaurantCard";
import { restaurantList } from "../MockData/restaurantList";

const Body = () => {
  return (
    <div className="flex flex-wrap">
      {restaurantList.map((restaurant) => (
        <RestaurantCard {...restaurant.data} key={restaurant.data.id} value={""}/>
      ))}
    </div>
    
  );
};

export default Body;
