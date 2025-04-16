import './footer.css'
import PointMap from './../../assets/Footer/PointMap.svg'
import Logo from './../../assets/Footer/LogoWhite.svg'
import Mail from './../../assets/Footer/Mail.svg'
import call from './../../assets/Footer/Call.svg'

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
                            <li>ОГРН 1111111111111</li>
                            <li>ИНН 2222222222222</li>
                            <li>ОКПО 444444444444 ОКВЭД 52 24</li>
                            <li>ОКТМО 5555555555</li>
                        </ul>
                    </div>

                    <div>
                        <strong>Закупки</strong>
                        <ul>
                            <li>Нормативные документы</li>
                            <li>Закупки на VISMA Order</li>
                            <li>Закупки на VISMA Tender</li>
                        </ul>
                    </div>

                    <div>
                        <strong>Акционерам</strong>
                        <ul>
                            <li>Устав VISMA</li>
                            <li>Свидетельства госрегистрации</li>
                            <li>Список аффилированных лиц</li>
                            <li>Информация</li>
                            <li>Отчеты</li>
                        </ul>
                    </div>

                    <div>
                        <strong>О компании</strong>
                        <ul>
                            <li>Порт сегодня</li>
                            <li>Характеристика порта</li>
                            <li>История</li>
                            <li>Дипломы и награды</li>
                            <li>Транспортная безопасность</li>
                            <li>Экология</li>
                            <li>Правовая информация</li>
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