import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const {id} = useParams();

    useEffect(()=>{
      getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
      
    }
    
  return (
    <div>RestaurantMenu:{id}</div>
  )
}

export default RestaurantMenu