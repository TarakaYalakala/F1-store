import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addProducts: (state,action) => {
            state.cart.push(action.payload);
        }

    }
})

export const {addProducts} = CartSlice.actions;
export default CartSlice.reducer;