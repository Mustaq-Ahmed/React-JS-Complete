import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);
    const { data } = resData;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = data;
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt="Res-Logo" />
            <h3 className="font-bold text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} Mins</h4>
        </div>
    )
}

export default RestaurantCard;