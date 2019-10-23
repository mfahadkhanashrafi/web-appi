import { all, takeEvery, put, call } from 'redux-saga/effects';
import AD_PRODUCT from '../../utils/ad-product';
import actions from './acctions';
import Axios from 'axios';

const onGetProduct =  (data) =>{
    try {
     return( Axios.get('http://192.168.10.6/ecom/api/Products/Get')
    //  return( Axios.get('http://ntier.co/response.json')
            .then(res => res.data)
            // .catch(error => console.log(error))
     )} catch (error) {
        console.log('ERROR')
        // yield put(actions.viewDonorSuccess());
    }
}
    // await fetch('https://jsonplaceholder.typicode.com/posts')
    //  fetch('http://192.168.0.104/ecom/api/Products/Get')
    //     .then(res => res.json())
    //     .then(res => console.log(res ) )
    //     .catch(error => error);
        //  Axios.get('http://192.168.0.104/ecom/api/Products/Get')
        //     .then(res => res.data)
        //     .catch(error => error);

function* getProduct({ payload }) {
    const { data } = payload;
    try {
        const fetchResult = yield call(onGetProduct, data);
        if (fetchResult) {
            yield put(
                actions.fetchedData(
                    fetchResult,
                )
            );
        }
    } catch (error) {
        yield put(actions.viewDonorSuccess());
    }
}

const onFetchRequst = async (argReq) => {
    // demoData.map(val => {
    //     (val.product).filter(val => {
    //         val.category.deal===argReq;
    //         // return val.category.deal === argReq;
    //     })
    // })
};

// function* fetchRequst({ payload }) {
//     const { argReq } = payload;
//     console.log('argSaga', argReq)
//     try {
//         // const fetchResult = yield call(onFetchRequst, argReq);
//         let data = (demoData[0].product);
//         // console.log('data', data);

//         const fetchResult = data.filter(val => val.category.deal == argReq)

//         if (fetchResult) {
//             console.log('fetchResult mp', fetchResult);
//             yield put(
//                 actions.fetchedData(
//                     fetchResult,
//                 )
//             );
//         }
//     } catch (error) {
//         console.log(error, 'fetchRequst saga')
//         yield put(actions.viewDonorSuccess());
//     }
// }


export default function* rootSaga() {
    // yield all([  takeEvery(actions.function const name,saga function name)  ])
    yield all([takeEvery(actions.GET_PRODUCT, getProduct)]);
    // yield all([takeEvery(actions.CALL_DATA, fetchRequst)]);
}