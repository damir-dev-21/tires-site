import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from "../components/footer.component"
import { getCatalog, getProducts } from '../redux/actions/products'

function CatalogPage({ getCatalog, initialProducts, catalog }) {
    useEffect(() => {
        getCatalog(initialProducts)
    }, [])


    return (
        <div style={{"display":"flex"}}>
          
            <div className="catalog-page wrapper">
            <div className="catalog-page__body">
                <div className="catalog-page__body__title">
                    <h3>Каталог</h3>
                </div>
                <div className="catalog-page__body__list">
                    {
                        catalog.map(e => {
                            return (

                                <div className="catalog-page__body__item">
                                    <NavLink style={{"color":"black"}} to={'/catalog/' + e['category']}>
                                        <h3>{e['category']}</h3>
                                        <p>{e['count_items']} товаров</p>
                                    </NavLink>
                                </div>

                            )
                        })
                    }
                    {/* <div className="catalog-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/38b/38b36846664a2de4b05d00da9afaf6d6.png"
                            alt="" />
                        <h3>Шины</h3>
                        <p>120 товаров</p>
                    </div>
                    <div className="catalog-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/83a/83add7b0ef782ee828039993a9ff67d7.png"
                            alt="" />
                        <h3>Мотошины</h3>
                        <p>201 товаров</p>
                    </div>
                    <div className="catalog-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/f75/f759454d4c9334b5f94d6bd844a36d6f.png"
                            alt="" />
                        <h3>Грузовые шины</h3>
                        <p>21 товаров</p>
                    </div>
                    <div className="catalog-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/002/002adcbdb3c583dcdbc8f6f5a0c763c3.png"
                            alt="" />
                        <h3>Диски</h3>
                        <p>211 товаров</p>
                    </div>
                    <div className="catalog-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/e56/e5695d75e1e2f4e97f235aab030740fc.png"
                            alt="" />
                        <h3>АКБ</h3>
                        <p>144 товаров</p>
                    </div>
                    <div className="catalog-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/52a/52a075ab00d27bceaa9c49f3f11b0898.png"
                            alt="" />
                        <h3>Масла</h3>
                        <p>104 товаров</p>
                    </div>
                    <div className="catalog-page__body__item">
                        <img src="https://tires2.aspro-partner.ru/upload/iblock/677/67720bb1bba42b5657071561655b6907.png"
                            alt="" />
                        <h3>Фильтры</h3>
                        <p>14 товаров</p>
                    </div> */}
                </div>

            </div>
        </div>
        </div>
       
    )
}

function mapStateToProps(state) {
    return {
        initialProducts: state.products.initialProducts,
        catalog: state.products.catalog
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCatalog: (products) => dispatch(getCatalog(products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage)