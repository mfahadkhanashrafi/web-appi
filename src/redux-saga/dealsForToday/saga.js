import { all, takeEvery, put, call } from 'redux-saga/effects';
import demoData from '../../utils/demoData';
import actions from './acctions';

const onGetProduct = async (data) =>
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => res)
        .catch(error => error);

function* getProduct({ payload }) {
    const { data } = payload;
    try {
        const fetchResult = yield call(onGetProduct, data);
        // console.log(fetchResult)
        if (fetchResult) {
            // console.log(fetchResult,"Donor fetch result");
            yield put(
                actions.viewAllProduct(
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

function* fetchRequst({ payload }) {
    const { argReq } = payload;
    console.log('argSaga', argReq)
    try {
        // const fetchResult = yield call(onFetchRequst, argReq);
        let data = (demoData[0].product);
        // console.log('data', data);

        const fetchResult = data.filter(val => val.category.deal == argReq)

        if (fetchResult) {
            console.log('fetchResult mp', fetchResult);
            yield put(
                actions.fetchedData(
                    fetchResult,
                )
            );
        }
    } catch (error) {
        console.log(error, 'fetchRequst saga')
        yield put(actions.viewDonorSuccess());
    }
}


export default function* rootSaga() {
    // yield all([  takeEvery(actions.function const name,saga function name)  ])
    yield all([takeEvery(actions.GET_PRODUCT, getProduct)]);
    yield all([takeEvery(actions.CALL_DATA, fetchRequst)]);
}