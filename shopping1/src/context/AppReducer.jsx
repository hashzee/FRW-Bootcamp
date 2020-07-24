
export default (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            if (!state.cart.find(item => item.id === action.payload.id)) {
                state.cart.push({
                    ...action.payload,
                    qty: 1
                })
            } 

            return {
                ...state,
                cart: [...state.cart]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                cart: [...state.cart.filter(item => item.id !== action.payload.id)]
            }
        case "ADD_MORE":
            state.cart[state.cart.findIndex(item => item.id === action.payload.id)].qty++
            return {
                ...state,
                cart: [...state.cart]
            }
        case "DECREASE":
            state.cart[state.cart.findIndex(item => item.id === action.payload.id)].qty--
            return {
                ...state,
                cart: [...state.cart]
            }          

        default:
            return state;
    }
    
}