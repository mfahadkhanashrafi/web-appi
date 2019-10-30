const actions = {
   ACTION_NAME :'ACTION_NAME',
   CART_DATA:'CART_DATA',
   ADDED_CART:'ADDED_CART',


loadData: (data)=>({
    type:actions.ACTION_NAME,
    payload:{data}
}),
addToCart: (cartData)=>({
    type:actions.CART_DATA,
    payload:{cartData}
}),
addedCart: (cartAdded,cartLenght)=>({
    type:actions.ADDED_CART,
    payload:{cartAdded,cartLenght}
}),

}

export default actions;