import { useEffect, useState } from "react";

const useRestaurant = (menuId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${menuId}&submitAction=ENTER`);
        const json = await res.json();
        console.log(json);
        setRestaurant(json.data?.cards[0]?.card?.card?.info);
        setMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }

    return { restaurant, menu };
}

export default useRestaurant;