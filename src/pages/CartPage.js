import React from "react";
import { connect } from 'react-redux'
import { setCart, setToCart, deleteFromCart,setOrder } from '../redux/actions/cart'

function CartPage({ cart, deleteFromCart,setOrder }) {

    const handleClickOrder = () => {
        setOrder(cart)
    }

    return (
        <div class="cart">
            
            <div class="cart__body wrapper">
                <h3>Корзина</h3>
                <div class="cart__body__list">
                    {cart.map(e => {
                        return (
                            <div class="cart__body__list__item">
                                <img src={e.img_link} alt="" />
                                <h3>{e.product.name}</h3>
                                <p>Количество : {e.count}</p>
                                <p>{e.product.price} сум</p>
                            </div>
                        )
                    })}
                </div>
                <div class="cart__btn">
                    <button onClick={()=>handleClickOrder()}>Заказать</button>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteFromCart: (product) => dispatch(deleteFromCart(product)),
        setOrder:(cart)=>dispatch(setOrder(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)