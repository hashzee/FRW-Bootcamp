import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    cart: [],
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function delTransaction(id){
        
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function add2Cart(cartItem){

        // Check is item existing, then add 1 else add product 
        state.cart.map(item => {
            if (item.id === cartItem.id) {
                cartItem.qty++;
                dispatch({
                    type: 'ADD_EX_CART',
                    payload: cartItem
                });                 
            }
            else
            {
                dispatch({
                    type: 'ADD_TO_CART',
                    payload: cartItem
                });
            }
        });

       
    }


    return(
        <GlobalContext.Provider value={{
            cart:state.cart,
            cartItems:state.cart.length,
            add2Cart
        }}>
            {children}
        </GlobalContext.Provider>
    )
}