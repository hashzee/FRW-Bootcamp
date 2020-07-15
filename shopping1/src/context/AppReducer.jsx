
export default (state, actions) => {
    switch(actions.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== actions.payload)
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart:[actions.payload, ...state.cart]
            }
      
        case 'ADD_EX_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== actions.payload.id),
                cart:[actions.payload, ...state.cart]
            }
        
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[actions.payload, ...state.transactions]
            }
        default:
            return state;
    }
}