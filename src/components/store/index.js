import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import Cart from "../Cart/Cart";
import cartSlice from "./CartSlice";



const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
       cart: cartSlice.reducer 
    }
})


export default store
