import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    
    const [showIndex, setShowIndex] = useState(null) // 0 for 1st open
    const {resId} = useParams();

    const restaurantInfo = useRestaurantMenu(resId);

    if(restaurantInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = restaurantInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    //console.log(restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const itemCategories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    

    return (
        <div className="p-4">
            <h1 className="font-bold text-2xl text-center mb-2">{name}</h1>
            <h2 className="text-center">{cuisines.join(", ")} - {costForTwoMessage}</h2>
            
            <ul>
                {itemCategories.map((category, index) => <RestaurantMenuCategory showItems={index === showIndex} setShowIndex={() => setShowIndex(prevIndex => prevIndex === index ? null : index)} key={category?.card?.card?.title} category={category} />)}
                {/* <li>{itemCards[2]?.card?.info?.name}</li> */}
                {/* {itemCards?.map((menu) => <li key={menu?.card?.info?.name}>{menu?.card?.info?.name} - {(menu?.card?.info?.price / 100) || menu?.card?.info?.defaultPrice}</li>)} */}
            </ul>
        </div>
    )
}

export default RestaurantMenu;