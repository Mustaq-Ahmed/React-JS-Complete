import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";


const RestaurantMenu = () => {
    const params = useParams(); // const { menuId } = useParams(); 
    const { menuId } = params;
    // console.log(params);

    const restaurant = useRestaurant(menuId);   // useRestaurant --> custom hook
    // console.log(restaurant);

    return (!restaurant) ? <Shimmer /> : (
        <>
            <h1>Restaurant ID: {menuId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={CDN_URL + restaurant?.cloudinaryImageId} />
            <h3>{restaurant?.areaName}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwoMessage} stars</h3>
        </>
    )
}

export default RestaurantMenu;