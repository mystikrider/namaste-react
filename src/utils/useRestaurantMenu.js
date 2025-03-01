import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const response = await data.json();

        setRestaurantInfo(response?.data)
    }

    return restaurantInfo;
}

export default useRestaurantMenu;