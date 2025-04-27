import './theCompany.css'
import Video from "../../../assets/Landing/Main/Videos.png"
const TheCompany = () => {
    return (

        <div className="TheCompany-content">
            <div className="TheCompanyBackground">

            </div>
            <div className="container">
                <div className="CompanyBlock">
                    <div className="Company-left">
                        <h2>О компании</h2>
                        <div className="CompanyInfo">
                            <p>Tristique orci consectetur sit felis. Sed ac auctor tellus lobortis. Enim non turpis nulla nec a sapien sit amet molestie. Et id malesuada gravida sit volutpat. Volutpat sed lectus elementum diam neque facilisis in. Convallis nibh sem in viverra quis. Interdum pharetra.</p>

                            <p>Libero nunc porttitor id mi convallis ultricies convallis erat. At sagittis nisi at in diam sit.</p>

                            <ul>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae!</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae!</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto impedit nobis alias ab ullam consectetur quas eveniet, vero inventore amet illum nulla laudantium iure porro natus? Nobis?</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium.</li>
                            </ul>

                            <p>Quam accumsan mauris enim quam. A commodo ultrices urna vitae nibh rhoncus at nisl. Duis nibh libero ut enim. Metus aliquam cursus molestie sapien risus. Suspendisse volutpat.</p>

                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse!</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae!</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Company-right">
                        <img src={Video} alt="" />
                        <a href="#!">
                            <div className="Link-Service">
                                <p>Запрос ставки и условий погрузочно-разгрузочных работ</p>
                                <strong>Рассчитайте моментально стоимость полных портовых услуг в порту VISMA</strong>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheCompany;