import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";


const RestaurantMenu = () => {
    const params = useParams(); // const { menuId } = useParams(); 
    const { menuId } = params;
    // console.log(params);
    const { restaurant, menu } = useRestaurant(menuId);   // useRestaurant --> custom hook
    // console.log(restaurant);

    const dispatch = useDispatch();

    const addFoodItemHandler = (itemObj) => {
        dispatch(addItem(itemObj));
    }

    return (!restaurant) ? <Shimmer /> : (
        <div className="flex">
            <div className="m-5">
                <h1>Restaurant ID: {menuId}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={CDN_URL + restaurant?.cloudinaryImageId} />
                <h3>{restaurant?.areaName}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating} stars</h3>
                <h3>{restaurant?.costForTwoMessage} stars</h3>
            </div>
            {/* <button onClick={addItemHandler}
                className="p-2 m-5 bg-green-300">AddItem</button> */}
            <div className="m-5" data-testid="menu">
                {menu?.map((menuItem) => <li key={menuItem.card.info.id}>
                    {menuItem.card.info.name} -
                    <button data-testid="add-btn"
                    onClick={() => addFoodItemHandler({ id: menuItem.card.info.id, name: menuItem.card.info.name })}
                        className="px-2 bg-green-50 border">Add</button>
                </li>)}
            </div>
        </div>
    )
}

export default RestaurantMenu;