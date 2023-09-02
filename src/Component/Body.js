import React, { useState } from "react";
import RestaurantCard from "./Restaurant/RestaurantCard";
import { restaurantList } from "../MockData/restaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);

  const filterData = () => {
    const filtered = restaurantList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <div>
      <div className="flex justify-center items-center mb-4"> 
        <input
          className="rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-full ml-2"
          onClick={filterData}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} value={""} />
        ))}
      </div>
    </div>
  );
};

export default Body;
