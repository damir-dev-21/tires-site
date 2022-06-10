import React, { useEffect } from 'react'
import Star from '../assets/images/star.png'
import Check from '../assets/images/check.png'
import { useParams, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCatalog, getProducers, getProductsProd } from '../redux/actions/products'


function Products({ initialProducts, products, getProductsProd }) {

    const params = useParams()
    const name_of_category = params.category_name
    const name_of_producer = params.producer

    useEffect(() => {
        getProductsProd(initialProducts, name_of_category, name_of_producer)
    }, [])

    return (
        <div class="products-page wrapper">
            <div class="products-page__body">
                <div class="products-page__body__title">
                    <h3>Aeolus</h3>
                </div>
                <div class="products-page__body__top">

                    <div class="products-page__body__top__nav">
                        <h3>Модели шин</h3>
                        <div class="products-page__body__top__nav__list">
                            <a href="/" class="active">Все шины</a>
                            <a href="/">Летняя</a>
                            <a href="/">Зимняя</a>
                            <a href="/">Всесезонная</a>
                            <a href="/">Нешипованные</a>
                            <a href="/">Шипованные</a>
                        </div>
                        <div class="bloc-view">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>

                <div class="products-page__body__bottom">
                    {
                        products.map(e => {
                            return (
                                <div class="products-page__body__bottom__item">
                                    <NavLink style={{"color" :"black"}} to={"/catalog"+"/"+name_of_category+"/"+name_of_producer+"/"+e['id']}>
                                        <div class="image">
                                            <img src="https://tires2.aspro-partner.ru/upload/iblock/36c/36cdc1982b7df8148f0c9fb4f3ac8687.jpg" alt="" />
                                        </div>
                                        <h3>{e['name']}</h3>
                                        <div class="stars">
                                            <div class="star">
                                                <img src={Star} alt="" />
                                            </div>
                                            <div class="star">
                                                <img src={Star} alt="" />
                                            </div>
                                            <div class="star">
                                                <img src={Star} alt="" />
                                            </div>
                                            <div class="star">
                                                <img src={Star} alt="" />
                                            </div>
                                            <div class="star">
                                                <img src="../assets/images/star-grey.png" alt="" />
                                            </div>
                                        </div>
                                        <p>От <span>420 000</span> сум</p>
                                    </NavLink>

                                </div>
                            )
                        })
                    }
                    {/* <div class="products-page__body__bottom__item">
                        <div class="image">
                            <img src="https://tires2.aspro-partner.ru/upload/iblock/36c/36cdc1982b7df8148f0c9fb4f3ac8687.jpg" alt="" />
                        </div>
                        <h3>Aeolus CrossAce A/T AS01</h3>
                        <div class="stars">
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src="../assets/images/star-grey.png" alt="" />
                            </div>
                        </div>
                        <p>От <span>420 000</span> сум</p>
                    </div>
                    <div class="products-page__body__bottom__item">
                        <div class="image">
                            <img src="https://tires2.aspro-partner.ru/upload/iblock/36c/36cdc1982b7df8148f0c9fb4f3ac8687.jpg" alt="" />
                        </div>
                        <h3>Aeolus CrossAce A/T AS01</h3>
                        <div class="stars">
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src="../assets/images/star-grey.png" alt="" />
                            </div>
                        </div>
                        <p>От <span>420 000</span> сум</p>
                    </div>
                    <div class="products-page__body__bottom__item">
                        <div class="image">
                            <img src="https://tires2.aspro-partner.ru/upload/iblock/36c/36cdc1982b7df8148f0c9fb4f3ac8687.jpg" alt="" />
                        </div>
                        <h3>Aeolus CrossAce A/T AS01</h3>
                        <div class="stars">
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src="../assets/images/star-grey.png" alt="" />
                            </div>
                        </div>
                        <p>От <span>420 000</span> сум</p>
                    </div>
                    <div class="products-page__body__bottom__item">
                        <div class="image">
                            <img src="https://tires2.aspro-partner.ru/upload/iblock/36c/36cdc1982b7df8148f0c9fb4f3ac8687.jpg" alt="" />
                        </div>
                        <h3>Aeolus CrossAce A/T AS01</h3>
                        <div class="stars">
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src={Star} alt="" />
                            </div>
                            <div class="star">
                                <img src="../assets/images/star-grey.png" alt="" />
                            </div>
                        </div>
                        <p>От <span>420 000</span> сум</p>
                    </div> */}
                </div>

                {/* <div class="products-page__body__bottom-rev">
                    <div class="products-page__body__bottom-rev__item">
                        <div class="image">
                            <img src="https://tires2.aspro-partner.ru/upload/iblock/36c/36cdc1982b7df8148f0c9fb4f3ac8687.jpg" alt="" />
                        </div>
                        <div class="content-block">
                            <div class="title">
                                <h3>Aeolus CrossAce A/T AS01</h3>
                                <div class="stars">
                                    <div class="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div class="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div class="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div class="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div class="star">
                                        <img src="../assets/images/star-grey.png" alt="" />
                                    </div>
                                </div>
                                <div class="status-count">
                                    <img src={Check} alt="" />
                                    <p>Много</p>
                                </div>

                            </div>
                            <div class="price-btn">
                                <p>От <span>420 000</span> сум</p>
                                <button>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="products-page__body__bottom-rev__item">
                        <div class="image">
                            <img src="https://tires2.aspro-partner.ru/upload/iblock/36c/36cdc1982b7df8148f0c9fb4f3ac8687.jpg" alt="" />
                        </div>
                        <div class="content-block">
                            <div class="title">
                                <h3>Aeolus CrossAce A/T AS01</h3>
                                <div class="stars">
                                    <div class="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div class="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div class="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div class="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div class="star">
                                        <img src="../assets/images/star-grey.png" alt="" />
                                    </div>
                                </div>
                                <div class="status-count">
                                    <img src={Check} alt="" />
                                    <p>Много</p>
                                </div>

                            </div>
                            <div class="price-btn">
                                <p>От <span>420 000</span> сум</p>
                                <button>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="products-page__body__bottom-rev__item">
                        <div class="image">
                            <img src="https://tires2.aspro-partner.ru/upload/iblock/36c/36cdc1982b7df8148f0c9fb4f3ac8687.jpg" alt="" />
                        </div>
                        <div class="content-block">
                            <div class="title">
                                <h3>Aeolus CrossAce A/T AS01</h3>
                                <div class="stars">
                                    <div class="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div class="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div class="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div class="star">
                                        <img src={Star} alt="" />
                                    </div>
                                    <div class="star">
                                        <img src="../assets/images/star-grey.png" alt="" />
                                    </div>
                                </div>
                                <div class="status-count">
                                    <img src={Check} alt="" />
                                    <p>Много</p>
                                </div>

                            </div>
                            <div class="price-btn">
                                <p>От <span>420 000</span> сум</p>
                                <button>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        initialProducts: state.products.initialProducts,
        products: state.products.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProductsProd: (products, category, producer) => dispatch(getProductsProd(products, category, producer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)