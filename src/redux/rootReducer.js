import {combineReducers} from 'redux'
import productsReducer from './reducers/products'
import authReducer from './reducers/auth'
import cartReducer from './reducers/cart'

export default combineReducers({
    products:productsReducer,
    auth:authReducer,
    cart:cartReducer
}) 