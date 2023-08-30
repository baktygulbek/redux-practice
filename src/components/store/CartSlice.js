import { createSlice } from "@reduxjs/toolkit";



const cartSlice=createSlice ({
    name:"cart",
    initialState:{
        items: [],
        totalQuantity:0
    },
    reducers:{
        addItemToCart(state,action){
            state.totalQuantity++
            const currentItem = action.payload
            const exsistingItem = state.items.find(el =>el.id === currentItem.id)
            if(!exsistingItem){
                state.items.push({
                    id:currentItem.id,
                    price:currentItem.price,
                    title:currentItem.title,
                    totalPrice:currentItem.price,
                    quantity:1,

                })
            }else{
                exsistingItem.totalPrice += currentItem.price
                exsistingItem.quantity++
            }
            
         
        },
        removeItemToCart(state,action){
         state.totalQuantity--
         const currentId = action.payload
         const exsistingItem = state.items.find(el => el.id===currentId)
         if(exsistingItem.quantity>1){
            exsistingItem.totalPrice-=exsistingItem.price
            exsistingItem.quantity-- 
         }  else{
            state.items=state.items.splice(1,1)
         }       
        }
    }
})


export const {addItemToCart,removeItemToCart} = cartSlice.actions
export default cartSlice