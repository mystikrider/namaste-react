import { useState } from "react";
import RestaurantMenuCategoryList from "./RestaurantMenuCategoryList";

const RestaurantMenuCategory = ({category, showItems, setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div className="w-9/12 bg-gray-100 mx-auto p-3 m-3 shadow-sm">
            <h1 onClick={handleClick} className="cursor-pointer font-bold flex justify-between mb-2">
                {category?.card?.card?.title} ({category?.card?.card?.itemCards?.length})
                <span>{"⬇️"}</span>
            </h1>
            {showItems && <ul>
                {category?.card?.card?.itemCards.map((item) => <RestaurantMenuCategoryList key={item?.card?.info?.id} itemList={item} />)}
            </ul>}
            

        </div>
    )
}

export default RestaurantMenuCategory;