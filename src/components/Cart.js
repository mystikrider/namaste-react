import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuCategoryList from "./RestaurantMenuCategoryList";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    console.log(cartItems)
    return (
        <div className="cart-page p-4 mx-auto w-9/12">
        <h1 className="my-5 font-bold text-3xl text-center mb-2 flex justify-between">
            Shopping Cart
            {cartItems?.length !== 0 && <button onClick={handleClearCart} className="text-sm bg-red-700 text-white p-2 rounded-sm">Clear Cart</button>}
            
        </h1>
        {cartItems?.length === 0 && <h1>Cart is empty</h1>}
        {cartItems?.map((item) => <RestaurantMenuCategoryList key={item?.card?.info?.id} itemList={item} />)}
        
    </div>
    )
}

export default Cart;