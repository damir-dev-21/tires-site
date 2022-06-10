import {SET_INITIAL_PRODUCTS,SET_PRODUCTS, SET_CATALOG, SET_PRODUCERS, GET_PRODUCT,SET_POPULAR} from '../actions/actionType'

const initialState = {
    initialProducts:[],
    catalog:[],
    categories:[],
    producers:[],
    products:[],
    popular:[],
    product:{}
}

export default function productsReducer(state=initialState, action){
    switch (action.type) {
        case SET_INITIAL_PRODUCTS:
            return{
                ...state,
                initialProducts:action.products,
                popular: action.popular
            }  
        case SET_CATALOG:
            return{
                ...state,
                catalog:action.catalog
            }  
        case SET_PRODUCERS:
            return{
                ...state,
                producers:action.producers
            }                
        case SET_PRODUCTS:
            return{
                ...state,
                products:action.products
            }
        case SET_POPULAR:
            return{
                ...state,
                popular: action.popular
            }    
        case GET_PRODUCT:
            return{
                ...state,
                product:action.product
            }    
        default:
            return state
    }
}