import Logo from './../../assets/Landing/Header/Logo.svg'
import Search from './../../assets/Landing/Header/Search.svg'
import SearchArrow from './../../assets/Landing/Header/ListArrow.svg'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import './nav.css'
const Nav = () => {
    const [Language, SetLanguage] = useState(true)
    const [OpenList, SetOpenList] = useState(false)


    return (
        <nav className="nav-content">
            <div className='LogoBlock'>
                <img src={Logo} alt="Логотип" />
            </div>
            <ul className="list-items">
                <Link to="/Landing"><li>О компании</li></Link>
                <Link to="/get+request+client"><li>Просмотр заявок</li></Link>
                <Link to="/request+client"><li>Оставить заявку</li></Link>
                <li><a href="">Новости</a></li>
                <li><a href="">Новости</a></li>
                <li><a href="">Новости</a></li>

            </ul>

            <form className='Search' action="input">
                <img className='SearchIcon' src={Search} alt="" />
                <input type="text" />
            </form>
            <div className='Language-block'>
                <span>{Language ? 'RU' : 'EN'}</span>
                <button onClick={() => SetOpenList(!OpenList)}><img src={SearchArrow} alt="" /></button>
                <ul className={OpenList ? 'Language-list open' : 'Language-list close'}>
                    <li className='Language-item'><button onClick={() => { SetLanguage(true); SetOpenList(!OpenList) }}>RU</button></li>
                    <li className='Language-item'><button onClick={() => { SetLanguage(false); SetOpenList(!OpenList) }}>EN</button></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;