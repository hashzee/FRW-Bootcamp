import { Typography } from "@material-ui/core";

export default (state, actions) => {
    switch(actions.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== actions.payload)
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