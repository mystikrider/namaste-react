import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const restaurantInfo = useRestaurantMenu(resId);

    if(restaurantInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = restaurantInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            <h2>Menu</h2>
            <ul>
                {/* <li>{itemCards[2]?.card?.info?.name}</li> */}
                {itemCards?.map((menu) => <li key={menu?.card?.info?.name}>{menu?.card?.info?.name} - {(menu?.card?.info?.price / 100) || menu?.card?.info?.defaultPrice}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;