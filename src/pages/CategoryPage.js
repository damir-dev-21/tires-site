import React, { useEffect } from "react"
import { useParams, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCatalog, getProducers, getProducts } from '../redux/actions/products'
import Nav from "../components/nav.component"


function CategoryPage({ getProducers, getCatalog,initialProducts, catalog,producers }) {

    const params = useParams()
    const name_of_category = params.category_name

    useEffect(() => {
        getCatalog(initialProducts)
        getProducers(initialProducts, name_of_category)
    }, [])


    return (
        <div className="category-page wrapper">
            <Nav producers={producers} catalog={catalog} name_of_category={name_of_category}/>

            <div className="category-page__body">
                <div className="category-page__body__title">
                    <h3>{name_of_category}</h3>
                </div>
                <div className="category-page__body__filter">
                    <div className="category-page__body__filter__select__item__content">
                        <div className="select-item">
                            <div>
                                <p>Ширина</p>
                                <select name="" id="">
                                    <option value="">Все</option>
                                    <option value="">28</option>
                                    <option value="">14</option>
                                </select>
                            </div>
                            <div>
                                <p>Высота</p>
                                <select name="" id="">
                                    <option value="">Все</option>
                                    <option value="">28</option>
                                    <option value="">14</option>
                                </select>
                            </div>
                            <div>
                                <p>Диаметр</p>
                                <select name="" id="">
                                    <option value="">Все</option>
                                    <option value="">28</option>
                                    <option value="">14</option>
                                </select>
                            </div>
                            <div>
                                <p>Производитель</p>
                                <select name="" id="">
                                    <option value="">Aeolus</option>
                                    <option value="">Amtel</option>
                                    <option value="">Barum</option>
                                    <option value="">Cordiant</option>
                                    <option value="">Continental</option>
                                </select>
                            </div>
                        </div>
                        <div className="select-checkbox">
                            <div className="checkbox-item">
                                <input type="checkbox" />
                                <img src="../assets/images/sezon.png" alt="" width="20" />
                                <p>Всесезонные</p>
                            </div>
                            <div className="checkbox-item">
                                <input type="checkbox" />
                                <img src="../assets/images/winter.png" alt="" width="20" />
                                <p>Зимняя</p>
                            </div>
                            <div className="checkbox-item">
                                <input type="checkbox" />
                                <img src="../assets/images/summer.png" alt="" width="20" />
                                <p>Летняя</p>
                            </div>
                            <div className="checkbox-item">
                                <input type="checkbox" />
                                <img src="../assets/images/withoutship.png" alt="" width="20" />
                                <p>Нешипованная</p>
                            </div>
                            <div className="checkbox-item">
                                <input type="checkbox" />
                                <img src="../assets/images/ship.png" alt="" width="18" />
                                <p>Шипованные</p>
                            </div>

                        </div>
                        <div className="select-btns">
                            <button className="select-btn">Подобрать</button>
                            <button className="cancel-btn">Сбросить</button>
                        </div>
                    </div>
                </div>

                <div className="category-page__body__list">
                    {producers.map(e => {
                        return (

                            <div className="category-page__body__item">
                                <NavLink style={{"color":"black"}} to={"/catalog/" + name_of_category + '/' + e['producer']}>
                                    <h3>{e['producer']}</h3>
                                </NavLink>
                            </div>

                        )
                    })

                    }
                    {/* <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/488/100_25_1/488de39f076de5e5a6e3df3105f889fa.png"
                            alt="" />
                        <h3>Achiles</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/f93/f932b5ae951914bdc7800aae6ba5eb85.png" alt="" />
                        <h3>Aeolus</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f96/100_25_1/f96b9f5a46e476dd72c4d9bb36b7cd23.png" alt="" />
                        <h3>Carvel</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f47/100_25_1/f47d63d586f92a2fd7134a120c4f7938.png" alt="" />
                        <h3>Matador</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/3ca/3caa52f70f8334f82f14243d1ce09e44.png" alt="" />
                        <h3>Barum</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/f6e/f6e580b3e6e36722a65ce851139688e3.png" alt="" />
                        <h3>BFGoodrich</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/95e/95ed9405e858acbe76cb0e7befc554af.png" alt="" />
                        <h3>Continental</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/3ca/3caa52f70f8334f82f14243d1ce09e44.png" alt="" />
                        <h3>Barum</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/488/100_25_1/488de39f076de5e5a6e3df3105f889fa.png"
                            alt="" />
                        <h3>Achiles</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/f6e/f6e580b3e6e36722a65ce851139688e3.png" alt="" />
                        <h3>BFGoodrich</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/95e/95ed9405e858acbe76cb0e7befc554af.png" alt="" />
                        <h3>Continental</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f96/100_25_1/f96b9f5a46e476dd72c4d9bb36b7cd23.png" alt="" />
                        <h3>Carvel</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f47/100_25_1/f47d63d586f92a2fd7134a120c4f7938.png" alt="" />
                        <h3>Matador</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/3ca/3caa52f70f8334f82f14243d1ce09e44.png" alt="" />
                        <h3>Barum</h3>
                    </div>
                    <div className="category-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/95e/95ed9405e858acbe76cb0e7befc554af.png" alt="" />
                        <h3>Continental</h3>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        initialProducts: state.products.initialProducts,
        producers: state.products.producers,
        catalog: state.products.catalog,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProducers: (products, category) => dispatch(getProducers(products, category)),
        getCatalog: (products) => dispatch(getCatalog(products)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)