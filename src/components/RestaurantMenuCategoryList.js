import { useDispatch } from "react-redux";
import { IMG_CDN } from "../utils/constants";
import { addToCart } from "../utils/store/cartSlice";

const RestaurantMenuCategoryList = ({itemList}) => {
    const dispatch = useDispatch();
    const handleAddToCart = (itemList) => {
        dispatch(addToCart(itemList))
    }
    
    return (
        <div className="p-4 border-b border-gray-300 flex justify-between">
            <div className="w-9/12">
                <h1 className="font-bold">{itemList?.card?.info?.name}</h1>
                <h2 className="font-bold my-2">Rs.{itemList?.card?.info?.price ? itemList?.card?.info?.price / 100 : itemList?.card?.info?.defaultPrice / 100}</h2>
                <h3>{itemList?.card?.info?.description}</h3>
            </div>
            <div className="w-3/12 relative">
                <button onClick={() => handleAddToCart(itemList)} className="absolute right-0 bg-black text-white p-1.5">Add+</button>
                <img className="w-full shadow-sm" src={IMG_CDN + (itemList?.card?.info?.imageId ? itemList?.card?.info?.imageId : null)} />
            </div>
        </div>
    )
}

export default RestaurantMenuCategoryList;