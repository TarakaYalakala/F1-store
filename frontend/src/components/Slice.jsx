import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState: {
        cart: [],
        orders:[]
    },
    reducers: {
        addProducts: (state,action) => {
            state.cart.push(action.payload);
            console.log(state.cart);
        },
        removeProducts: (state,action) => {
           state.cart =  state.cart.filter((product) => product.id != action.payload.id);
        },
        addOrder: (state,action) => {
            state.orders.push(action.payload);
            console.log(state.orders);
        },
        removeOrder: (state,action) => {
            state.orders.length = 0;        
        }

    }
})

export const {addProducts,removeProducts,addOrder,removeOrder} = CartSlice.actions;
export default CartSlice.reducer;





