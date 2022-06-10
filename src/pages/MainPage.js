import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Footer from "../components/footer.component";
import Header from '../components/header.component'
import Star from '../assets/images/star.png'
import StarGrey from '../assets/images/star-grey.png'
import Check from '../assets/images/check.png'
import { getCatalog, getPopular, getProducts } from '../redux/actions/products'
import BtnSlider from "../components/BtnSlider";

import { v4 as uuidv4 } from "uuid";

const dataSlider = [
 
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img:"https://lionharttires.com/wp-content/uploads/2019/11/Lionhart-Tires-LH-Five-Red-Lamborghini-Huracan-1.jpg"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img:"https://www.lesschwab.com/on/demandware.static/-/Library-Sites-LesSchwabLibrary/default/dw18d3c73a/images/learningCenter/article/hero/HeroArticleTireSizeExplainedDesktop_2048.jpg"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img:"https://www.lesschwab.com/on/demandware.static/-/Library-Sites-LesSchwabLibrary/default/dwebc743e6/images/seo/tires/HeroTiresDesktop_1024.jpg"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img:"https://www.tires-easy.com/blog/wp-content/uploads/2019/10/tire-replacement-guide-1280x720.jpg"
  },
];


function MainPage({ products, getProducts, getCatalog, catalog, popular, getPopular }) {

    //const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        console.log(products);
        getCatalog(products)
    }, [])

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }


    return (

        <div className="main">

            <div className="wrapper">

                <div className="main__body">
                    <div className="main__body__nav">

                        <ul>
                            <li>
                                <NavLink to="/catalog">Шины</NavLink>
                                <div className="dropdown">
                                    <div className="dropdown-nav">
                                        <div className="dropdown-nav__item">
                                            <div>
                                                <p>Подбор шин</p>
                                                <a href="/">Каталог шин</a>
                                                <a href="/">Подбор по параметрам</a>
                                            </div>
                                            <div>
                                                <p>Сезон</p>
                                                <a href="/">Всесезонные шины</a>
                                                <a href="/">Зимние шины</a>
                                                <a href="/">Летние шины</a>
                                            </div>
                                        </div>
                                        <div className="dropdown-nav__item">
                                            <div>
                                                <p>Популярные типоразмеры</p>
                                                <a href="/">175/65 R14</a>
                                                <a href="/">185/65 R14</a>
                                                <a href="/">185/65 R15</a>
                                                <a href="/">195/60 R16</a>
                                                <a href="/">195/65 R15</a>
                                                <a href="/">205/55 R16</a>
                                                <a href="/">215/55 R16</a>
                                                <a href="/">215/60 R17</a>
                                                <a href="/">225/60 R18</a>
                                                <a href="/">235/55 R17</a>
                                                <a href="/">235/55 R18</a>
                                            </div>
                                        </div>
                                        <div className="dropdown-nav__item">
                                            <div>
                                                <p>Популярные производители</p>
                                                <div className="menu_img">
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/488/100_25_1/488de39f076de5e5a6e3df3105f889fa.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f93/100_25_1/f932b5ae951914bdc7800aae6ba5eb85.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f96/100_25_1/f96b9f5a46e476dd72c4d9bb36b7cd23.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f47/100_25_1/f47d63d586f92a2fd7134a120c4f7938.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f6e/100_25_1/f6e580b3e6e36722a65ce851139688e3.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/ea1/100_25_1/ea1aedbc79f3dca2ce28c3160a59bde7.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/dc8/100_25_1/dc8145c67be9ece623a19ee03c97a86b.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/da2/100_25_1/da2e5c0c7828a552c936f916e9b49137.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/d68/100_25_1/d685a894cefeed94238e12cad9301604.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/d40/100_25_1/d404e25f462036063780c3831a6eba70.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/d0d/100_25_1/d0d8fee4108a8ee682967c7b97057927.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/cc2/100_25_1/cc29e327f4f9e96bd585b76cb41c35b8.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/ca4/100_25_1/ca482c9a7e03ffb22d2d58ba903a0139.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/c94/100_25_1/c94b7b9a224674fdf945e61cc4f24a1b.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/c0f/100_25_1/c0facf45e3f1a20e58e3b268d7937c78.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/c0a/100_25_1/c0a21cf3762f5327aa95c6af8cfe1024.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/bc4/100_25_1/bc4e04c9ef2f0c4e05acd2fc2c5b0d9a.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/ba1/100_25_1/ba1d4f93fc62a54b79132b6c7622639a.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/b51/100_25_1/b516a9fbc091ad57fb47cda9a31da7bd.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/aac/100_25_1/aacdb8dab060f40e2ce0c8b316406610.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/iblock/a8b/a8b006f4d8b03f47fe90492f18d1b965.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/a5b/100_25_1/a5be978acae8e25884b61ee7f01d641b.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/658/100_25_1/65806d70186f088b4b4643f2089cca36.png"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <a href="/">Диски</a>
                                <div className="dropdown">
                                    <div className="dropdown-nav">
                                        <div className="dropdown-nav__item">
                                            <div>
                                                <p>Подбор дисков</p>
                                                <a href="/">Каталог дисков</a>
                                                <a href="/">Подбор по параметрам</a>
                                            </div>
                                            <div>
                                                <p>Тип диска</p>
                                                <a href="/">Литые диски</a>
                                                <a href="/">Стальные диски</a>
                                            </div>
                                        </div>
                                        <div className="dropdown-nav__item">
                                            <div>
                                                <p>Диаметр обода</p>
                                                <a href="/">13"</a>
                                                <a href="/">14"</a>
                                                <a href="/">15"</a>
                                                <a href="/">16"</a>
                                                <a href="/">17"</a>
                                                <a href="/">18"</a>
                                                <a href="/">19"</a>
                                                <a href="/">20"</a>
                                                <a href="/">21"</a>
                                                <a href="/">22"</a>
                                            </div>
                                        </div>
                                        <div className="dropdown-nav__item">
                                            <div>
                                                <p>Популярные производители</p>
                                                <div className="menu_img">
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/488/100_25_1/488de39f076de5e5a6e3df3105f889fa.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f93/100_25_1/f932b5ae951914bdc7800aae6ba5eb85.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f96/100_25_1/f96b9f5a46e476dd72c4d9bb36b7cd23.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f47/100_25_1/f47d63d586f92a2fd7134a120c4f7938.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f6e/100_25_1/f6e580b3e6e36722a65ce851139688e3.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/ea1/100_25_1/ea1aedbc79f3dca2ce28c3160a59bde7.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/dc8/100_25_1/dc8145c67be9ece623a19ee03c97a86b.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/da2/100_25_1/da2e5c0c7828a552c936f916e9b49137.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/d68/100_25_1/d685a894cefeed94238e12cad9301604.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/d40/100_25_1/d404e25f462036063780c3831a6eba70.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/d0d/100_25_1/d0d8fee4108a8ee682967c7b97057927.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/cc2/100_25_1/cc29e327f4f9e96bd585b76cb41c35b8.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/ca4/100_25_1/ca482c9a7e03ffb22d2d58ba903a0139.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/c94/100_25_1/c94b7b9a224674fdf945e61cc4f24a1b.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/c0f/100_25_1/c0facf45e3f1a20e58e3b268d7937c78.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/c0a/100_25_1/c0a21cf3762f5327aa95c6af8cfe1024.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/bc4/100_25_1/bc4e04c9ef2f0c4e05acd2fc2c5b0d9a.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/ba1/100_25_1/ba1d4f93fc62a54b79132b6c7622639a.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/b51/100_25_1/b516a9fbc091ad57fb47cda9a31da7bd.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/aac/100_25_1/aacdb8dab060f40e2ce0c8b316406610.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/iblock/a8b/a8b006f4d8b03f47fe90492f18d1b965.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/a5b/100_25_1/a5be978acae8e25884b61ee7f01d641b.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/658/100_25_1/65806d70186f088b4b4643f2089cca36.png"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li><a href="/">АКБ</a></li>
                            <li>
                                <a href="/">Мотошины</a>
                                <div className="dropdown">
                                    <div className="dropdown-nav">
                                        <div className="dropdown-nav__item">
                                            <div>
                                                <p>Подбор мотошин</p>
                                                <a href="/">Каталог шин</a>
                                                <a href="/">Подбор по параметрам</a>
                                            </div>
                                            <div>
                                                <p>Применение</p>
                                                <a href="/">Бездорожье</a>
                                                <a href="/">Городские</a>
                                                <a href="/">Смешанные</a>
                                            </div>
                                        </div>
                                        <div className="dropdown-nav__item">
                                            <div>
                                                <p>Популярные типоразмеры</p>
                                                <a href="/">175/65 R14</a>
                                                <a href="/">185/65 R14</a>
                                                <a href="/">185/65 R15</a>
                                                <a href="/">195/60 R16</a>
                                                <a href="/">195/65 R15</a>
                                                <a href="/">205/55 R16</a>
                                                <a href="/">215/55 R16</a>
                                                <a href="/">215/60 R17</a>
                                                <a href="/">225/60 R18</a>
                                                <a href="/">235/55 R17</a>
                                                <a href="/">235/55 R18</a>
                                            </div>
                                        </div>
                                        <div className="dropdown-nav__item">
                                            <div>
                                                <p>Популярные производители</p>
                                                <div className="menu_img">
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/488/100_25_1/488de39f076de5e5a6e3df3105f889fa.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f93/100_25_1/f932b5ae951914bdc7800aae6ba5eb85.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f96/100_25_1/f96b9f5a46e476dd72c4d9bb36b7cd23.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f47/100_25_1/f47d63d586f92a2fd7134a120c4f7938.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f6e/100_25_1/f6e580b3e6e36722a65ce851139688e3.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/ea1/100_25_1/ea1aedbc79f3dca2ce28c3160a59bde7.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/dc8/100_25_1/dc8145c67be9ece623a19ee03c97a86b.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/da2/100_25_1/da2e5c0c7828a552c936f916e9b49137.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/d68/100_25_1/d685a894cefeed94238e12cad9301604.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/d40/100_25_1/d404e25f462036063780c3831a6eba70.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/d0d/100_25_1/d0d8fee4108a8ee682967c7b97057927.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/cc2/100_25_1/cc29e327f4f9e96bd585b76cb41c35b8.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/ca4/100_25_1/ca482c9a7e03ffb22d2d58ba903a0139.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/c94/100_25_1/c94b7b9a224674fdf945e61cc4f24a1b.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/c0f/100_25_1/c0facf45e3f1a20e58e3b268d7937c78.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/c0a/100_25_1/c0a21cf3762f5327aa95c6af8cfe1024.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/bc4/100_25_1/bc4e04c9ef2f0c4e05acd2fc2c5b0d9a.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/ba1/100_25_1/ba1d4f93fc62a54b79132b6c7622639a.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/b51/100_25_1/b516a9fbc091ad57fb47cda9a31da7bd.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/aac/100_25_1/aacdb8dab060f40e2ce0c8b316406610.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/iblock/a8b/a8b006f4d8b03f47fe90492f18d1b965.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/a5b/100_25_1/a5be978acae8e25884b61ee7f01d641b.png"
                                                        alt="" />
                                                    <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/658/100_25_1/65806d70186f088b4b4643f2089cca36.png"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="/">Грузовые шины</a>

                                <div className="dropdown">
                                    <div className="dropdown-nav">

                                        <div className="dropdown-nav__item">
                                            <div>
                                                <p>Популярные типоразмеры</p>
                                                <a href="/">175/65 R14</a>
                                                <a href="/">185/65 R14</a>
                                                <a href="/">185/65 R15</a>
                                                <a href="/">195/60 R16</a>
                                                <a href="/">195/65 R15</a>
                                                <a href="/">205/55 R16</a>
                                                <a href="/">215/55 R16</a>
                                                <a href="/">215/60 R17</a>
                                                <a href="/">225/60 R18</a>
                                                <a href="/">235/55 R17</a>
                                                <a href="/">235/55 R18</a>
                                            </div>
                                        </div>
                                        <div className="dropdown-nav__item">
                                            <div>
                                                <p>Популярные производители</p>
                                                <div>
                                                    <div className="menu_img">
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/488/100_25_1/488de39f076de5e5a6e3df3105f889fa.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f93/100_25_1/f932b5ae951914bdc7800aae6ba5eb85.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f96/100_25_1/f96b9f5a46e476dd72c4d9bb36b7cd23.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f47/100_25_1/f47d63d586f92a2fd7134a120c4f7938.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/f6e/100_25_1/f6e580b3e6e36722a65ce851139688e3.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/ea1/100_25_1/ea1aedbc79f3dca2ce28c3160a59bde7.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/dc8/100_25_1/dc8145c67be9ece623a19ee03c97a86b.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/da2/100_25_1/da2e5c0c7828a552c936f916e9b49137.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/d68/100_25_1/d685a894cefeed94238e12cad9301604.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/d40/100_25_1/d404e25f462036063780c3831a6eba70.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/d0d/100_25_1/d0d8fee4108a8ee682967c7b97057927.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/cc2/100_25_1/cc29e327f4f9e96bd585b76cb41c35b8.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/ca4/100_25_1/ca482c9a7e03ffb22d2d58ba903a0139.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/c94/100_25_1/c94b7b9a224674fdf945e61cc4f24a1b.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/c0f/100_25_1/c0facf45e3f1a20e58e3b268d7937c78.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/c0a/100_25_1/c0a21cf3762f5327aa95c6af8cfe1024.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/bc4/100_25_1/bc4e04c9ef2f0c4e05acd2fc2c5b0d9a.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/ba1/100_25_1/ba1d4f93fc62a54b79132b6c7622639a.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/b51/100_25_1/b516a9fbc091ad57fb47cda9a31da7bd.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/aac/100_25_1/aacdb8dab060f40e2ce0c8b316406610.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/iblock/a8b/a8b006f4d8b03f47fe90492f18d1b965.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/a5b/100_25_1/a5be978acae8e25884b61ee7f01d641b.png"
                                                            alt="" />
                                                        <img src="https://tires2.aspro-partner.ru/upload/resize_cache/iblock/658/100_25_1/65806d70186f088b4b4643f2089cca36.png"
                                                            alt="" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="/">Расходные материалы</a></li>
                            <li><a href="/">Акции</a></li>
                            <li><a href="/">Услуги</a></li>
                        </ul>
                    </div>
                    <div className="main__body__content">
                        <div className="main__body__content__slider">
                            <div className="container-slider">
                                {dataSlider.map((obj, index) => {
                                    return (
                                        <div
                                            key={obj.id}
                                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                                        >
                                            <img
                                                src={obj.img}
                                            />
                                        </div>
                                    )
                                })}
                                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                                <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                                <div className="container-dots">
                                    {Array.from({ length: dataSlider.length }).map((item, index) => (
                                        <div
                                            onClick={() => moveDot(index + 1)}
                                            className={slideIndex === index + 1 ? "dot active" : "dot"}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main__body__select wrapper">
                    <div className="main__body__select__body">
                        <div className="main__body__select__item">
                            <h3>Подбор шин</h3>
                            <div className="select__item__content">
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
                                </div>
                                <div className="select-checkbox">
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <img src="./assets/images/sezon.png" alt="" width="20" />
                                        <p>Всесезонные</p>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <img src="./assets/images/winter.png" alt="" width="20" />
                                        <p>Зимняя</p>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <img src="./assets/images/summer.png" alt="" width="20" />
                                        <p>Летняя</p>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <img src="./assets/images/withoutship.png" alt="" width="20" />
                                        <p>Нешипованная</p>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <img src="./assets/images/ship.png" alt="" width="18" />
                                        <p>Шипованные</p>
                                    </div>

                                </div>
                                <div className="select-btns">
                                    <button className="select-btn">Подобрать</button>
                                    <button className="cancel-btn">Сбросить</button>
                                </div>
                            </div>
                        </div>
                        <div className="main__body__select__item">
                            <h3>Подбор дисков</h3>
                            <div className="select__item__content">
                                <div className="select-item-disc">
                                    <div>
                                        <p>Ширина диска</p>
                                        <select name="" id="">
                                            <option value="">Все</option>
                                            <option value="">28</option>
                                            <option value="">14</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p>Посадочный диаметр</p>
                                        <select name="" id="">
                                            <option value="">Все</option>
                                            <option value="">28</option>
                                            <option value="">14</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p>Количество отверстии</p>
                                        <select name="" id="">
                                            <option value="">Все</option>
                                            <option value="">28</option>
                                            <option value="">14</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p>Межболтовое расстояние</p>
                                        <select name="" id="">
                                            <option value="">Все</option>
                                            <option value="">28</option>
                                            <option value="">14</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="select-btns">
                                    <button className="select-btn">Подобрать</button>
                                    <button className="cancel-btn">Сбросить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="main__body__popular">
                    <div className="main__body__popular__nav__popular">
                        <h3>Популярные товары</h3>
                        <ul>
                            <li>Акция</li>
                            <li>Новинка</li>
                            <li>Советуем</li>
                            <li>Хит</li>
                        </ul>
                    </div>
                    <div className="main__body__popular__list">
                        {popular.map(e => {
                            return (
                                <div class="main__body__popular__list__item">
                                    <img className="item-img" src="https://tires2.aspro-partner.ru/upload/iblock/36c/36cdc1982b7df8148f0c9fb4f3ac8687.jpg"
                                        alt="" />
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
                                            <img src={StarGrey} alt="" />
                                        </div>
                                    </div>
                                    <div class="haves">
                                        <img src={Check} alt="" />
                                        <p>Много</p>
                                    </div>
                                    <div class="price">
                                        <p>${e['price']}сум./шт</p>
                                    </div>
                                    <div class="add-cart">
                                        <div class="count-bloc">
                                            <div class="btn-min">
                                                <p>-</p>
                                            </div>
                                            <span class="count">1</span>
                                            <div class="btn-pl">
                                                <p>+</p>
                                            </div>
                                        </div>
                                        <button class="add" onclick="addToCart(${e.id});">
                                            В корзину
                                        </button>
                                    </div>
                                    <div class="info">
                                        <div class="share">
                                            <p>Акция</p>
                                        </div>
                                        <div class="new">
                                            <p>Новинка</p>
                                        </div>
                                        <div class="advice">
                                            <p>Советуем</p>
                                        </div>
                                        <div class="hit">
                                            <p>Хит</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>


        </div>
    )
}


function mapStateToProps(state) {
    return {
        products: state.products.initialProducts,
        catalog: state.products.catalog,
        popular: state.products.popular
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts()),
        getCatalog: (products) => dispatch(getCatalog(products)),
        getPopular: (products) => dispatch(getPopular(products))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)