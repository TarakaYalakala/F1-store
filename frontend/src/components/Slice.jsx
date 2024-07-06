import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addProducts: (state,action) => {
            state.cart.push(action.payload);
        },
        removeProducts: (state,action) => {
           state.cart =  state.cart.filter((product) => product.id != action.payload.id);
        }

    }
})

export const {addProducts,removeProducts} = CartSlice.actions;
export default CartSlice.reducer;