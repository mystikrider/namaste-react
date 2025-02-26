import { IMG_CDN } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restaurantData } = props;
    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = restaurantData?.info;
    return (
        <div className="restaurant-card">
                    <img src={IMG_CDN + cloudinaryImageId} />
                    <h4>{name}</h4>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{costForTwo}</h4>
                    <h5>{avgRating} stars</h5>
                </div>
    )
}

export default RestaurantCard;