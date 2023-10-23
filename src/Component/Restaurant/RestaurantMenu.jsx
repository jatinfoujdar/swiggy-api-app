import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {
  swiggy_menu_api_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../../MockData/restaurantList";

const RestaurantMenu = () => {
    const {id} = useParams();
    const [restauraunt,   setRestaurant] = useState({})

    useEffect(()=>{
      getRestaurantInfo();
    },[])
    async function getRestaurantInfo() {
      try {
        const response = await fetch(swiggy_menu_api_URL + resId);
        const json = await response.json();
  
        // Set restaurant data
        const restaurantData = json?.data?.cards?.map(x => x.card)?.
                               find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
        setRestaurant(restaurantData);
  
        // Set menu item data
        const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                              groupedCard?.cardGroupMap?.REGULAR?.
                              cards?.map(x => x.card?.card)?.
                              filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                              map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
        
        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find(x => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        })
        setMenuItems(uniqueMenuItems);
      } catch (error) {
        setMenuItems([]);
        setRestaurant(null);
        console.log(error);
      }
    }
    
  return (
    <div>
      <h2>RestaurantMenu:{id} </h2>
      <h2>{restauraunt.name}</h2>
      </div>
  )
  }


export default RestaurantMenu