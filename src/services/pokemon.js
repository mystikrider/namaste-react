import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//define an api service
export const pokemoneApi = createApi({
    reducerPath: "pokemoneApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://pokeapi.co/api/v2/"}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`
        })
    })
})

export const { useGetPokemonByNameQuery } = pokemoneApi