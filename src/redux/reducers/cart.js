import { SET_CART } from "../actions/actionType";

const initialState = {
    cart:[]
}

export default function cartReducer(state=initialState,action){
    switch (action.type) {
        case SET_CART:
            return{
                ...state,
                cart:action.cart
            }
        default:
            return state;
    }
}