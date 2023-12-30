import { createContext, useReducer, useState } from "react";

export const CartContext = createContext(null)

function cartReducer(state, action) {
    if(action.type === 'ADD_ITEM'){
        const exestingcartIndex = state.items.findIndex(
            (item) => item.id === action.item.id)
            const updatedItems = [...state.items]
            if(exestingcartIndex > -1){
                const updatedItem = { ...state.items[exestingcartIndex],
                    quantity : state.items[exestingcartIndex].quantity + 1}
                updatedItems[exestingcartIndex] = updatedItem
            }else{
                updatedItems.push({...action.item,quantity:1})
            }

            return{
                ...state,items:updatedItems
            }
    }
    // if(action.type === 'ADD_ITEM'){
    //     const existingCartItem = state.items.findIndex(
    //         (item) => item.id === action.item.id)
 
    //         const updatedItems = [...state.items]
    
    // if (existingCartItem > -1){
    //     const updatedItem = {
    //         ...state.items[existingCartItem],
    //         quantity:state.items[existingCartItem].quantity + 1
    //     }
    //     let a = updatedItem
    //     updatedItems[existingCartItem]= updatedItem
    // }else{
    //     updatedItems.push({...action.item,
    //         quantity:1})
    // }

    // return {...state,items:updatedItems};
    // }

    if(action.type === 'REMOVE_ITEM'){
        const exestingcartIndex = state.items.findIndex(
            (item) => item.id === action.id)

        const exestingcartItem = state.items[exestingcartIndex]
        const updatedItems = [...state.items]
        if(exestingcartItem.quantity === 1){
            updatedItem.splice(exestingcartIndex, 1)
        }else{
            const updatedItem ={...exestingcartItem, quantity:exestingcartItem.quantity - 1}
        // updatedItems = {...state.items, updatedItem}
        updatedItem[exestingcartIndex] = updatedItem
        }
        return {...state, items: updatedItems}
    }

    return cart
}

export default function CartContextProvider(props){
   
    const [cart, dispatch] = useReducer(cartReducer, {items:[]});
    // console.log(state);
    const addtocart=(item)=>{
        dispatch({type:'ADD_ITEM',item})
    }

    const removeItemCart = () => {
        dispatch({type:'REMOVE_ITEM',id})
    }

    const contextValue ={items:cart.items,addtocart,removeItemCart}
    console.log(contextValue);
    return(
    <CartContext.Provider value={contextValue}>
        {props.children}
    </CartContext.Provider>)
}