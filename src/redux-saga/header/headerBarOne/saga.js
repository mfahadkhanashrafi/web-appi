import {all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './acctions';
let cartArr = [];
function*cartdata({payload}){
    const { cartData } = payload;
    try {
        cartArr.push(cartData)
        yield put(
            actions.addedCart(
                cartArr,
                cartArr.length
            )
        );
    } catch (error) {
        
    }
}


export default function* rootSaga() {
    yield all([
        // takeEvery(actions.function const name,saga function name)
        takeEvery(actions.CART_DATA,cartdata)
    ])    
}