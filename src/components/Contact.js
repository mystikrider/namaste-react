import { useState, useEffect } from "react";
import { useGetRestaurantsQuery } from "../utils/store/apiSlice";
import RestaurantCard, { WithPromotionLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";

const Contact = () => {

    const { data: listRestaurant, isLoading, isError } = useGetRestaurantsQuery();
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        if(listRestaurant) {
            setFilteredRestaurant(listRestaurant)
        }
    }, [listRestaurant])

    const RestaurantCardPromoted = WithPromotionLabel(RestaurantCard);

    if(isLoading) return <p>Loading.....</p>;
    if(isError) return <p>Something wrong!</p>

    return (
        <div className="">
      <h1>Restaurants</h1>
      <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => <Link to={"/restaurants/"+restaurant?.info?.id} key={restaurant?.info?.id}>
                {restaurant?.info?.avgRating >= 4.5 ? <RestaurantCardPromoted restaurantData={restaurant} /> : <RestaurantCard restaurantData={restaurant} />}
                
                </Link>)}
            </div>
      {/* <ul>
        {filteredRestaurant.map((restaurant) => (
          <li key={restaurant.info.id}>{restaurant.info.name}</li>
        ))}
      </ul> */}
    </div>
    )
}

export default Contact;