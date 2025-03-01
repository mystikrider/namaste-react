import { IMG_CDN } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restaurantData } = props;
    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = restaurantData?.info;
    return (
        <div className="w-50 bg-gray-100 rounded-sm p-3 m-2">
                    <img className="max-h-48" src={IMG_CDN + cloudinaryImageId} />
                    <h4 className="text-2xl my-2">{name}</h4>
                    <h4 className="my-3">{cuisines.join(", ")}</h4>
                    <h4 className="my-2">{costForTwo}</h4>
                    <h5>{avgRating} stars</h5>
                </div>
    )
}

export default RestaurantCard;