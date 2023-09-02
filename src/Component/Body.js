import React, { useState } from "react";
import RestaurantCard from "./Restaurant/RestaurantCard";
import { restaurantList } from "../MockData/restaurantList";

const Body = () => {



  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);

  const filterData = () => {
    const filtered = filteredRestaurants.filter((restaurant) =>
      restaurant.card.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };
  

  // useEffect(()=>{
  //   getRestaurants();
  // },[])

  // async function getRestaurants(){
  //   const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  //   const json = await data.json();
  //   console.log(json);
  //   setFilteredRestaurants(json?.data?.cards)
  // }

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
