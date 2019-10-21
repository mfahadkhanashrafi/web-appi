import { all, takeEvery } from 'redux-saga/effects';
// import component Saga file
import SampleOne from '../sampleOne/saga';
import Header from '../header/saga';
import AuthO from '../authO/saga';
import HeaderBarOne from '../header/headerBarOne/saga';
import HeaderBarTwo from '../header/headerBarTwo/saga';
import DealsForToday from '../dealsForToday/saga';
import dft_ViewAllRow from '../dealsForToday/viewAllRow/saga';
import dft_Products from '../dealsForToday/products/saga';

import Footer from '../footer/saga';
import Subscribe from '../footer/subscribe/saga';
import TabPanel from '../tabPanel/saga';


export default function* rootSaga(getState) {
    yield all([
        AuthO(),
        SampleOne(),
        Header(),
        HeaderBarOne(),
        HeaderBarTwo(),
        DealsForToday(),
        dft_ViewAllRow(),
        dft_Products(),
        Footer(),
        Subscribe(),
        TabPanel(),
    ]);
}