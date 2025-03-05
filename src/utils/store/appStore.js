import { configureStore } from "@reduxjs/toolkit";
//RTK Query
import { setupListeners } from "@reduxjs/toolkit/query";
// import { pokemoneApi } from "../../services/pokemon";
//RTK Query
//RTK Query
import { restaurantApi } from "./apiSlice";
//RTK Query
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer: {
        // [pokemoneApi.reducerPath]: pokemoneApi.reducer,
        [restaurantApi.reducerPath]: restaurantApi.reducer,
        cart: cartReducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemoneApi.middleware)
    // Adding the middleware required for caching and fetching
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restaurantApi.middleware)
})

export default appStore;