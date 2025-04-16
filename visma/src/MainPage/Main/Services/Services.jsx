import './services.css'
import ServicesCard from '../../Header/Services-card';

const Main = () => {
    return (
        <div className='Services-content'>
            <div className='container'>
                <div className="ServiceBlock">
                    <div className="Service-left">
                        <h2>Услуги</h2>
                        <ul className='InfoBlock'>
                            <li>
                                <a href="#!">Тарифы на услуги по обеспечению контроля доступа на территорию VISMA на 2022 год</a>
                                <div className='PDF'>pdf</div>
                            </li>

                            <li>
                                <a href="#!">Условия определения цены <br />договора и тарифы на работы</a>
                                <div className='PDF'>pdf</div>
                            </li>

                            <li>
                                <a href="#!">Договор перевалки<br />(типовая форма)</a>
                                <div className='PDF'>pdf</div>
                            </li>

                        </ul>
                    </div>
                    <div className="Service-right">
                        <ServicesCard typeCard="card-blockMain">Хранение грузов</ServicesCard>
                        <ServicesCard typeCard="card-blockMain">Швартовые операции</ServicesCard>
                        <ServicesCard typeCard="card-blockMain">Складские операции</ServicesCard>
                        <ServicesCard typeCard="card-blockMain">Агентское обслуживание судов</ServicesCard>
                        <ServicesCard typeCard="card-blockMain">Буксировка / сопровождение судов</ServicesCard>
                        <ServicesCard typeCard="card-blockMain">Погрузочно-разгрузочная деятельность</ServicesCard>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;