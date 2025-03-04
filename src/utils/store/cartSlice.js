import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, actions) => {
            
            state.items.push(actions.payload)
        },
        deleteCart: (state, actions) => {
            state.items.pop()
        },
        clearCart: (state, actions) => {
            state.items = []
        }
    }
})

export const { addToCart, deleteCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;