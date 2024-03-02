const ProductItemReducer = (state,action) => {
    
    /* eslint-disable */
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                added: true,
            }

        case 'REMOVE_FROM_CART':
            return{
                ...state,
                added: false

            }
    }

}

export default ProductItemReducer;