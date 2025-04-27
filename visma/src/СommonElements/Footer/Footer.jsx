import './footer.css'
import PointMap from './../../assets/Landing/Footer/PointMap.svg'
import Logo from './../../assets/Landing/Footer/LogoWhite.svg'
import Mail from './../../assets/Landing/Footer/Mail.svg'
import call from './../../assets/Landing/Footer/Call.svg'

const Footer = () => {
    return (
        <div className="Footer-content">
            <div className="BackgroundFooter-Top" />
            <div className="container">
                <div className="Footer-top">
                    <div>
                        <img className='PointMap' src={PointMap} alt="Адрес" />

                        <span>
                            <a href="#!">123456, г. Тавима, ул. Морская, д. 21</a>
                        </span>

                    </div>
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    <div>
                        <img className='Call' src={call} alt="Телефон" />
                        <span>
                            <a href="tel:#!">+7 (123) 456-67-89</a>
                        </span>
                        
                        <img className='Mail' src={Mail} alt="Почта" />
                        <span>
                            <a href="#!">order@visma.ru</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="BackgroundFooter-Bottom" />
            <div className="container">
                <div className="Footer-bottom">
                    <div className='FooterBottom-block'>
                        <strong>информация о юр. лице</strong>
                        <ul>
                            <li><a href="#!">ОГРН 1234565119911</a></li>
                            <li><a href="#!">ИНН 2224912332222</a></li>
                            <li><a href="#!">ОКПО 4672218874744 ОКВЭД 52 24</a></li>
                            <li><a href="#!">ОКТМО 831234719</a></li>
                        </ul>
                    </div>

                    <div>
                        <strong>Закупки</strong>
                        <ul>
                            <li><a href="#!">Нормативные документы</a></li>
                            <li><a href="#!">Закупки на VISMA Order</a></li>
                            <li><a href="#!">Закупки на VISMA Tender</a></li>
                        </ul>
                    </div>

                    <div>
                        <strong>Акционерам</strong>
                        <ul>
                            <li><a href="#!">Устав VISMA</a></li>
                            <li><a href="#!">Свидетельства госрегистрации</a></li>
                            <li><a href="#!">Список аффилированных лиц</a></li>
                            <li><a href="#!">Информация</a></li>
                            <li><a href="#!">Отчеты</a></li>
                        </ul>
                    </div>

                    <div>
                        <strong>О компании</strong>
                        <ul>
                            <li><a href="#!">Порт сегодня</a></li>
                            <li><a href="#!">Характеристика порта</a></li>
                            <li><a href="#!">История</a></li>
                            <li><a href="#!">Дипломы и награды</a></li>
                            <li><a href="#!">Транспортная безопасность</a></li>
                            <li><a href="#!">Экология</a></li>
                            <li><a href="#!">Правовая информация</a></li>
                        </ul>
                    </div>
                </div>
                <div className='ProtectRight'>
                    <span className='ProtectText'>
                        все права защищены АО VISMA
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;