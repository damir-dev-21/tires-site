import { DELETE_ITEM, SET_CART } from "./actionType"
import axios from "axios";

export function setCart(cart, product) {
    return (dispatch) => {
        cart.push(product)
        console.log(cart);
        dispatch()
    }
}

export function deleteFromCart() { }

export function setOrder(order) {
    return async (dispatch) => {
        let cart = []

        order.forEach(element => {
            cart.push(
                {
                    "product": element['product']['guid'],
                    "amount": 100,
                    "quantity": element['count']
                }
            )
        });


        let url = "http://127.0.0.1:8000/api/orderCreate/"
        let orderData = {
            "buyer": "1",
            "cart": cart,
            "phone_number": 123,
            "success": false
        }
        const responce = await axios.post(url, orderData)

        const data = responce.data

        console.log(data);
    }

}

export function setToCart(cart) {
    return {
        type: SET_CART,
        cart
    }
}

export function deleteItem(cart) {
    return {
        type: DELETE_ITEM,
        cart
    }
}

