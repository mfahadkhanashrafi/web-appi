const actions = {
   GET_PRODUCT :'GET_PRODUCT',
   GET_PRODUCT_SUCCESS :'GET_PRODUCT_SUCCESS',
   CALL_DATA :'CALL_DATA',
   CALL_DATA_SUCCESS :'CALL_DATA_SUCCESS',


loadData: (data)=>({
    type:actions.GET_PRODUCT,
    payload:{data}
}),
callData: (argReq)=>({
    type:actions.CALL_DATA,
    payload:{argReq}
}),
viewAllProduct:(products)=>({
    type:actions.GET_PRODUCT_SUCCESS,
    payload:{products}
}),
fetchedData:(fetchResult)=>(
    console.log('fetchResult',fetchResult),{
    type:actions.CALL_DATA_SUCCESS,
    payload:{fetchResult}
})
}

export default actions;