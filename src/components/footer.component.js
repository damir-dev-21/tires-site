import { NavLink } from 'react-router-dom'

function Footer({ initialProducts, catalog, }) {
    return (
        <div className="footer ">
            <div className="footer__body wrapper">
                <div className="footer__body__item">
                    <h3>Каталог</h3>
                    <ul>
                        {catalog.map(e => {
                            return (
                                <li><NavLink to={'/catalog/' + e['category']}>{e['category']}</NavLink></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="footer__body__item">
                    <h3>Покупателю</h3>
                    <ul>
                        <li>
                            <a href='#'>
                                Условия оплаты
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Условия доставки
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Гарантия на товар
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Вопрос-ответ
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Акции
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Возможности
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__body__item">
                    <h3>О магазине</h3>
                    <ul>
                        <li>
                            <a href='#'>
                                Новости
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Магазины
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Статьи
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Обзоры
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Политика
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="footer__body__item">
                    <div className='input-form'>
                        <h3>Будьте всегда в курсе</h3>
                        <div className='input'>
                            <input type="email" placeholder='Ваш e-mail' />
                            <button>
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className='block-share'>
                        <h3>Оставайтесь на связи</h3>
                        <div className='block-links'>
                            <button className='vk'>
                                <i class="fab fa-vk"></i>
                            </button>
                            <button className='twitter'>
                                <i class="fab fa-twitter"></i>
                            </button>
                            <button className='telegram'>
                            <i class="fab fa-telegram-plane"></i>
                            </button>
                            <button className='facebook'>
                                <i class="fab fa-facebook-f"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="footer__body__item">
                    <div className='contact-block'>
                        <h3>Наши контакты</h3>
                        <div className='contacts-list'>
                            <div className='contact-item'>
                                <i class="fas fa-phone-alt"></i>
                                <p>+998 91 123-45-67</p>
                            </div>
                            <div className='contact-item'>
                                <i class="fas fa-envelope"></i>
                                <p>siyobagromash@gmail.com</p>
                            </div>
                            <div className='contact-item'>
                                <i class="fas fa-map-marker-alt"></i>
                                <p>Самаркандская область, Тайлякский район, Кургонча</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer