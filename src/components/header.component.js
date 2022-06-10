import React,{useState} from "react"
import Logo from '../assets/images/logo-2.png'
import { NavLink } from 'react-router-dom'
import '../assets/css/search.css'
import { connect } from "react-redux";

function Header({products}) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = products.filter((value) => {
            return value['name'].toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
            console.log(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div>
            <header className="header">
                <div className="header__body wrapper">
                    <div className="header__body__top">
                        <div className="header__body__top__left">
                            <div className="address">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>Самарканд</p>
                            </div>
                            <div className="full-address">
                                <p>Самаркандская область, Тайлякский район, Кургонча</p>
                            </div>
                        </div>
                        <div className="header__body__top__right">
                            <div className="phone">
                                <i className="fa fa-phone"></i>
                                <p>+998 91 123-45-67</p>
                            </div>
                            <a href="/" style={{ "color": "#2585e5" }}>Заказать звонок</a>
                            <div className="search">
                                <i className="fa fa-search" style={{ "color": "black" }}></i>
                                <p>Поиск</p>
                            </div>
                            <div className="login">
                                <i className="fas fa-user"></i>
                                <p>Войти</p>
                            </div>
                            <div className="likes">
                                <i className="fas fa-heart"></i>
                                <p>0</p>
                            </div>

                        </div>
                    </div>
                    <div className="header__body__bottom">
                        <div className="header__body__bottom__left">
                            <div className="logo">
                                <img src={Logo} alt="" width="60" />
                                <h3>TireShop</h3>
                            </div>
                        </div>
                        <div className="header__body__bottom__right">
                            <div className="header__body__bottom__right__item search-item">
                                <input type="text" placeholder="Я ищу..." value={wordEntered}
                                    onChange={handleFilter} />
                                <div className="box-search-icon">
                                    <i className="fa fa-search"></i>
                                </div>
                            </div>
                            {filteredData.length != 0 && (
                                <div className="dataResult">
                                    {filteredData.slice(0, 15).map((value, key) => {
                                        return (
                                            <NavLink className="dataItem" to={"/catalog"+"/"+value["category_name"]+"/"+value["producer"]+"/"+value['id']} onClick={clearInput}>
                                                <p>{value['name']} </p>
                                            </NavLink>
                                        );
                                    })}
                                </div>
                            )}
                            <div className="header__body__bottom__right__item">
                                <div className="cart">
                                    <div className="cart-count">
                                        <i className="fas fa-shopping-cart"></i>

                                    </div>
                                    <NavLink to="/cart">
                                        <p>Корзина</p>
                                    </NavLink>
                                    <span className="cart-count-idx">0</span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

function mapStateToProps(state){
    return{
        products: state.products.initialProducts
    }
}

export default connect(mapStateToProps,null)(Header)