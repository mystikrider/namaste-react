import { useState, useEffect } from "react";
// import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listRestaurant, setListRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.5542388&lng=76.884132&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const response = await data.json();
        // console.log(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListRestaurant(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // Update Rest List
        setFilteredRestaurant(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // Update Filtered Rest List
    }

    // if(listRestaurant.length === 0) {
    //     return <Shimmer />
    // }

    return listRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search-box">
                <input className="search-inp" type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                <button onClick={() => {
                    const filteredRestaurant = listRestaurant.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredRestaurant(filteredRestaurant)
                }}>Search</button>
            </div>
            <div className="filter-toprated">
                <button onClick={() => {
                    const topRatedRestaurant = listRestaurant.filter((restaurant) => restaurant?.info?.avgRating > 4.2);
                    console.log(topRatedRestaurant)
                    setListRestaurant(topRatedRestaurant);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurant.map((restaurant) => <Link to={"/restaurants/"+restaurant?.info?.id} key={restaurant?.info?.id}><RestaurantCard restaurantData={restaurant} /></Link>)}
            </div>
        </div>
    )
}

export default Body;