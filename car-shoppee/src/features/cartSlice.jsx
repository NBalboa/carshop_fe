import {createSlice} from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`Increased ${state.cartItems[itemIndex].name} cart quantity`, {
                    position: toast.POSITION.BOTTOM_LEFT,
                    theme: "dark"
                })
            }else{
                const tempProd = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProd)
                toast.success(`${action.payload.name} Added to Cart`, {
                    position: toast.POSITION.BOTTOM_LEFT,
                    theme: "dark"
                  });
            }
        },
        removeFromCart(state, action) {
            const new_cart = state.cartItems.filter (
                cartItem => cartItem.id !== action.payload.id
            )

            state.cartItems = new_cart
            toast.warn(`${action.payload.name} was removed from the cart`, {
                position: toast.POSITION.BOTTOM_LEFT,
                theme: "dark"
              });
        },
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )

            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;
            }
        },
        increaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )

            if(state.cartItems[itemIndex].cartQuantity >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
            }
        },
        getTotalPrice(state,action) {
            
            cartItems.map(cartItem => {
                state.cartTotalAmount = cartItem.cartQuantity *  cartItem.price
                state.totalQuantity += cartItem.cartQuantity
            })
            
        }

    }
})

export const {addToCart, removeFromCart, decreaseCart, increaseCart, getTotal}  = cartSlice.actions

export default cartSlice.reducer