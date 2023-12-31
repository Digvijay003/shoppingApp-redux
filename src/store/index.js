import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth-slice";
import cartSlice from "../slices/cart-slice";

const mystore=configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart:cartSlice.reducer

    }
})

export default mystore