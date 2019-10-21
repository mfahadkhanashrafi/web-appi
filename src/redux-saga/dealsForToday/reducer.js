import actions from './acctions';

const initState = {
    products: '',
    loading: false,
    error: false,
}

export default function reducre(state = initState, action) {
    switch (action.type) {
        case actions.GET_PRODUCT:
            return {
                ...state,
                test: 'Fahad Test',
                loading: true,
            };
        case actions.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                loading: false,
            };
        case actions.CALL_DATA:
            return {
                ...state,
                loading: true,
            };
        case actions.CALL_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                fetchResultArr: action.payload.fetchResult,
                error:false,
            };
        case actions.CALL_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error:true
            };
        default:
            return state;
    }
}