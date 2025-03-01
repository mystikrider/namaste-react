import { useState, useEffect } from "react";
// import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listRestaurant, setListRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();



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

    if(onlineStatus === false) return <h1 style={{ textAlign: "center"}}>Please check your Internet!</h1>

    return listRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex justify-between p-5">
            <div className="search-box">
                <input className="border border-gray-400 p-2 rounded-sm mr-3" type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                <button className="bg-blue-500 text-white p-2 rounded-sm" onClick={() => {
                    const filteredRestaurant = listRestaurant.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredRestaurant(filteredRestaurant)
                }}>Search</button>
            </div>
                <button className="bg-blue-500 text-white p-2 rounded-sm" onClick={() => {
                        const topRatedRestaurant = listRestaurant.filter((restaurant) => restaurant?.info?.avgRating > 4.2);
                        console.log(topRatedRestaurant)
                        setListRestaurant(topRatedRestaurant);
                    }}>Top Rated Restaurants</button>
            </div>
            
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => <Link to={"/restaurants/"+restaurant?.info?.id} key={restaurant?.info?.id}><RestaurantCard restaurantData={restaurant} /></Link>)}
            </div>
        </div>
    )
}

export default Body;