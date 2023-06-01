import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
    const params = useParams(); // const { menuId } = useParams(); 
    const { menuId } = params;
    // console.log(params);
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${menuId}&submitAction=ENTER`);
        const json = await res.json();
        // console.log(json);
        setRestaurant(json.data?.cards[0]?.card?.card?.info);
    }

    console.log(restaurant);



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