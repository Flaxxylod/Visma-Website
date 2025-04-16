import Logo from './../../assets/Header/Logo.svg'
import Search from './../../assets/Header/Search.svg'
import SearchArrow from './../../assets/Header/ListArrow.svg'

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
                <li><a href="">О компании</a></li>
                <li><a href="">Новости</a></li>
                <li><a href="">Новости</a></li>
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
                <li className='Language-item'><button onClick={() => {SetLanguage(true); SetOpenList(!OpenList)}}>RU</button></li>
                <li className='Language-item'><button onClick={() => {SetLanguage(false); SetOpenList(!OpenList)}}>EN</button></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;