import { createSlice } from "@reduxjs/toolkit";

const initialState={
    totalQuantity:0,
    itemsList:[],
    showCart:false
  
}

const cartSlice=createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        addToCart(state,action){
            const itemExist=state.itemsList.find(item=>item.id===action.payload.id)
            if(itemExist){
                itemExist.quantity=itemExist.quantity+1
                itemExist.totalPrice=itemExist.price*itemExist.quantity
               
            }
            else{
                state.itemsList.push({
                    id:action.payload.id,
                    name:action.payload.name,
                    quantity:1,
                    price:action.payload.price,
                    totalPrice:action.payload.price
                })
                state.totalQuantity=state.totalQuantity+1
            }

        },
        showCart(state){
            state.showCart=!state.showCart

        },
        removeFromCart(state,action){
            const itemExist=state.itemsList.find(item=>item.id===action.payload.id)

           
                if(itemExist.quantity===1){
                    state.itemsList=state.itemsList.filter(item=>item.id!==itemExist.id)
                    state.totalQuantity=state.totalQuantity-1

                }
                else{
                    itemExist.quantity=itemExist.quantity-1
                    itemExist.totalPrice=itemExist.price*itemExist.quantity
                }
            

        }


    }
})

export const {addToCart,removeFromCart,showCart}=cartSlice.actions

export default cartSlice