import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        user: cartSlice
    }
})

export default store;