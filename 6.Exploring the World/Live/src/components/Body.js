import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

// const topRatedRestaurantHandler = () => {
//     console.log("BUTTON clicked");
//     resList = resList.filter((r) => r.avgRating > 4.5);
//     console.log(resList);
// }

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchTxt, setSearchTxt] = useState("biryani");


    const filterSearchDataHandler = (searchTxt, allRestaurants) => {
        const filteredSearchData = allRestaurants.filter((r) => r?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase()));
        setFilteredRestaurants(filteredSearchData);
    }

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING');
        console.log(data);
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    // console.log(restaurants);

    // Early Return to avoid rendering a component
    if (!allRestaurants) return null;

    // if (filteredRestaurants?.length === 0) return <h1>No Restaurant Found!</h1>;

    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="search-container">
                <input value={searchTxt} type="text" className="search" placeholder="Search..."
                    onChange={(e) => setSearchTxt(e.target.value)}
                />
                <button onClick={() => filterSearchDataHandler(searchTxt, allRestaurants)} className="search-btn">Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    let filteredList = allRestaurants.filter((r) => r.data.avgRating > 4);
                    setFilteredRestaurants(filteredList);
                }

                }>
                    Top Rated Restaurants
                </button>
                {/* <button onClick={() => setRestaurants(resList)}
                >Clear Filter</button> */}
            </div>
            <div className="res-container">
                {
                    filteredRestaurants?.length === 0 ? <h1>No Restaurant Found!</h1> :
                        filteredRestaurants.map(resData => {
                            return <RestaurantCard key={resData.data.id} resData={resData} />
                        })
                }
            </div>
        </div>
    )
}

export default Body;