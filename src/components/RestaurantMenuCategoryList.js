import { IMG_CDN } from "../utils/constants";

const RestaurantMenuCategoryList = ({itemList}) => {
    
    return (
        <div className="p-4 border-b border-gray-300 flex justify-between">
            <div className="w-9/12">
                <h1 className="font-bold">{itemList?.card?.info?.name}</h1>
                <h2 className="font-bold my-2">Rs.{itemList?.card?.info?.price ? itemList?.card?.info?.price / 100 : itemList?.card?.info?.defaultPrice / 100}</h2>
                <h3>{itemList?.card?.info?.description}</h3>
            </div>
            <div className="w-3/12 relative">
                <button className="absolute right-0 bg-black text-white p-1.5">Add+</button>
                <img className="w-full shadow-sm" src={IMG_CDN + itemList?.card?.info?.imageId} />
            </div>
        </div>
    )
}

export default RestaurantMenuCategoryList;