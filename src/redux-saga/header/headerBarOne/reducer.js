import actions from './acctions';

const initState = {
    test:'',
    cartAdded:[],
    cartLenght:""
}

export default function reducre(state = initState,{type,payload}) {
    switch (type) {
        case actions.ACTION_NAME:
            return {
                ...state,
                test:'Fahad Test'
            }    
        case actions.ADDED_CART:
            return {
                ...state,
                cartAdded:payload.cartAdded,
                cartLenght:payload.cartLenght,
            }    
        default:
           return state;
    }
}