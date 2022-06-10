import { AUTH_OVER, AUTH_START } from "../actions/actionType";

const initialState = {
    token:localStorage.getItem('token'),
    isAuth:true
}

export default function authReducer(state=initialState,action){
    switch (action.type) {
        case AUTH_START:
            return{
                ...state,
                token:action.token,
                isAuth:action.isAuth
            }
        case AUTH_OVER:
            return{
                ...state,
                token:null,
                isAuth:false
            }
        default:
            return state;
    }
}