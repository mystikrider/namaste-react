import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const data = await fetch(RESTAURANT_API+resId);
        const response = await data.json();

        setRestaurantInfo(response?.data);
    }

    if(restaurantInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = restaurantInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="restaurant-page">
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            <h2>Menu</h2>
            <ul>
                {/* <li>{itemCards[2]?.card?.info?.name}</li> */}
                {itemCards.map((menu) => <li key={menu?.card?.info?.name}>{menu?.card?.info?.name} - {(menu?.card?.info?.price / 100) || menu?.card?.info?.defaultPrice}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantPage;