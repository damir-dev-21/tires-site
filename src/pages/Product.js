import Star from '../assets/images/star.png'
import StarGrey from '../assets/images/star-grey.png'
import Check from '../assets/images/check.png'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../redux/actions/products'
import { setCart } from '../redux/actions/cart'
import Modal from '../components/Modal'


function Product({ initialProducts, cart, product, getProduct, addToCart }) {

    const params = useParams()
    const id_of_product = params.id

    const [count, setCount] = useState(1)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getProduct(initialProducts, id_of_product)
    }, [])

    const handleClickAdd = (product) => {
        let item = {
            'product': product,
            'count': count
        }
        setShowModal(true)
        setTimeout(()=>{
           setShowModal(false)
        },2000)
        addToCart(item, cart)
     
    }

    const handleClickCount = (type) => {
        if (type == 'DEC') {
            if (count != 1) {
                setCount(
                    count - 1
                )
            }
        } else {
            setCount(
                count + 1
            )
        }
    }

    return (
        <div className="product-page wrapper">
                <Modal show={showModal} title={"Товар добавлен в корзину"}/>
                <div className="product-page__body">
                    <h3>{product['name']}</h3>
                    <div className="product-page__body__item">
                        <div className="image">
                            <img src="https://tires2.aspro-partner.ru/upload/iblock/36c/36cdc1982b7df8148f0c9fb4f3ac8687.jpg"
                                alt="" />
                        </div>
                        <div className="content">
                            <div className="title">

                                <img src="https://tires2.aspro-partner.ru/upload/iblock/f93/f932b5ae951914bdc7800aae6ba5eb85.png"
                                    alt="" />
                                <div className="stars">
                                    <div className="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div className="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div className="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div className="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div className="star">
                                        <img src={StarGrey} alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="item-info">
                                <p>От <span>420 000</span> сум</p>
                                <div className="status-count">
                                    <img src={Check} alt="" />
                                    <p>{product['remainder_count']}</p>
                                </div>
                                <div className="types__tire">
                                    <div className="types__content">
                                        <p className="type__prop">Шипы</p>
                                        <span>-----------</span>
                                        <p className="type__value">Нешипованные</p>
                                    </div>
                                    <div className="types__content">
                                        <p className="type__prop">Шипы</p>
                                        <span>-----------</span>
                                        <p className="type__value">Нешипованные</p>
                                    </div>
                                </div>
                                <div className="btn-cart" >
                                    <div className='count-bloc' style={{ "display": "flex", "alignItems": "center", "marginBottom": "10px" }}>
                                        <button onClick={() => handleClickCount("DEC")}>-</button>
                                        <div style={{ "margin": "0px 15px", fontSize: "17px", }}>{count}</div>
                                        <button onClick={() => handleClickCount("INC")}>+</button>
                                    </div>
                                    <button onClick={(() => handleClickAdd(product))}>
                                        Добавить в корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            

        </div>
    )
}


function mapStateToProps(state) {
    return {
        initialProducts: state.products.initialProducts,
        product: state.products.product,
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProduct: (products, id) => dispatch(getProduct(products, id)),
        addToCart: (product, cart) => dispatch(setCart(cart, product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)