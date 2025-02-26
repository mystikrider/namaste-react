import { useState } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listRestaurant, setListRestaurant] = useState(restaurantList);
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="filter-toprated">
                <button onClick={() => {
                    const topRatedRestaurant = listRestaurant.filter((restaurant) => restaurant?.info?.avgRating > 4.2);
                    console.log(topRatedRestaurant)
                    setListRestaurant(topRatedRestaurant);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {listRestaurant.map((restaurant) => <RestaurantCard key={restaurant?.info?.id} restaurantData={restaurant} />)}
            </div>
        </div>
    )
}

export default Body;