import { useEffect, useRef, useState } from 'react'
import '../assets/css/nav.css'
import {NavLink} from 'react-router-dom'
// import '../assets/js/nav'


function Nav({ producers, catalog,name_of_category }) {

    const [showProd, setShowProd] = useState(false)
    const [showCatalog, setShowCatalog] = useState(false)

    useEffect(() => { })

    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <a href="#" className="feat-btn" onClick={() => setShowCatalog(!showCatalog)}>Категории
                        <span className="fas fa-caret-down first"></span>
                    </a>
                    <ul className={`feat-show ${showCatalog ? 'show' : ''}`} >
                        {catalog.map(e => {
                            return (
                                <li><a href="#">{e['category']}</a></li>
                            )
                        })}
                    </ul>
                </li>
                <li>
                    <a href="#" className="serv-btn" onClick={() => setShowProd(!showProd)}>Производитель
                        <span className="fas fa-caret-down second"></span>
                    </a>
                    <ul className={`serv-show ${showProd ? 'show1' : ''}`}>
                        {producers.map(e => {
                            return (
                                <li>
                                    <NavLink to={"/catalog/" + name_of_category + '/' + e['producer']}>{e['producer']}</NavLink>
                                </li>
                            )
                        })}

                    </ul>
                </li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Overview</a></li>
                <li><a href="#">Shortcuts</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </nav>
    )
}


export default Nav