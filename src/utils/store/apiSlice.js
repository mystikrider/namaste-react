import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restaurantApi = createApi({
    reducerPath: "restaurantApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://www.swiggy.com/dapi"}),
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => "restaurants/list/v5?lat=8.5542388&lng=76.884132&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
            transformResponse: (response) => response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        })
    })
})

export const { useGetRestaurantsQuery } = restaurantApi;