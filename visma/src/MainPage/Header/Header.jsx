import Nav from "./Nav";
import './header.css'
import Background from './../../assets/Header/Header-Background.png'
import Button from './../../assets/Header/ByCompanyBtn.svg'
import ServicesCard from "./Services-card";
const Header = () => {
    return (
        <header className="header-content">
            <div className="container">
                <Nav></Nav>
            </div>
            <div className="Background-block">
                <img className="Background" src={Background} alt="" />
            </div>
            <div className="container">
                <div className="header-main">
                    <div className="header-left">
                        <h1 className="CompanyName">Тавимский морской порт VISMA</h1>
                        <span className="info">
                            Vel posuere nibh odio placerat massa vel tellus tortor.
                            Varius eget nunc scelerisque etiam felis facilisi ante viverra sem.
                            Nunc eros elementum.
                        </span>
                        <div className="CompanyInfo-Header">
                            <span className="information">о компании</span>
                            <button className="AboutCompany"><img src={Button} alt="" /></button>
                        </div>

                    </div>
                    <div className="header-right">
                        <a href="#!">
                            <button>
                                <ServicesCard typeCard="card-blockHeader">
                                    Погрузочно-разгрузочная деятельность
                                </ServicesCard>
                            </button>
                        </a>
                        <a href="#!">
                            <button>
                                <ServicesCard typeCard="card-blockHeader">
                                Хранение <br /> грузов
                                </ServicesCard>
                            </button>
                        </a>
                        <a href="#!">
                            <button>
                                <ServicesCard typeCard="card-blockHeader">
                                Складские <br /> операции
                                </ServicesCard>
                            </button>
                        </a>
                        <a href="#!">
                            <button>
                                <ServicesCard typeCard="card-blockHeader"> 
                                Швартовые <br /> операции
                                </ServicesCard>
                            </button>
                        </a>

                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;