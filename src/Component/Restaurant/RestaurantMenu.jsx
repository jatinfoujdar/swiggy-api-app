import React from 'react'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params
  return (
    <div>RestaurantMenu:{id}</div>
  )
}

export default RestaurantMenu