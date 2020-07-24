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


    function add2Cart(cartItem){
        dispatch({
            type: 'ADD_TO_CART',
            payload: cartItem
        });
    }

    function addMore(cartItem){
        dispatch({
            type: 'ADD_MORE',
            payload: cartItem
        });
    }

    return(
        <GlobalContext.Provider value={{
            cart:state.cart,
            cartItems:state.cart.length,
            add2Cart,
            addMore
        }}>
            {children}
        </GlobalContext.Provider>
    )
}