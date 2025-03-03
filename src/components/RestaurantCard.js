import { useContext } from "react";
import { IMG_CDN } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { restaurantData } = props;
    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = restaurantData?.info;
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="w-50 bg-gray-100 rounded-sm p-3 m-2">
                    <img className="max-h-48" src={IMG_CDN + cloudinaryImageId} />
                    <h4 className="text-2xl my-2">{name}</h4>
                    <h4 className="my-3">{cuisines.join(", ")}</h4>
                    <h4 className="my-2">{costForTwo}</h4>
                    <h5>{avgRating} stars</h5>
                    <p className="font-bold">User: {loggedInUser}</p>
                </div>
    )
}

export const WithPromotionLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-500 text-white p-2 m-2">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;