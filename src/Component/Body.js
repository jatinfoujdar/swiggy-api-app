import React, { useEffect, useState } from "react";
import RestaurantCard from "./Restaurant/RestaurantCard";
// import { restaurantList } from "../MockData/restaurantList";


function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  

  useEffect(()=>{
    getRestaurants()
  },[]);
  
        async function getRestaurants() {
        try {
          const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
          const json = await response.json();
    
          
          async function checkJsonData(jsonData) {
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
              let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                 
              if (checkData !== undefined) {
                return checkData;
              }
            }
          }
  
          const resData = await checkJsonData(json);          
        
          setAllRestaurants(resData);
          setFilteredRestaurants(resData);
        
        } catch (error) {
          console.log(error);
        }
      }
 

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
          onClick={()=>{
            const data = filterData(searchText,allRestaurants);
            setFilteredRestaurants(data);
           
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
      {filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
            );
          })}
      </div>
    </div>
  );
};

export default Body;
