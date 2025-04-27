import FormRequest from "./FormRequest/FormRequest";
import "./main.css"
const Main = () => {
    return (
        <div className="Main-content">
            <div className="container">
                <div  className="Form-Block">
                <span style={{textAlign: "center"}}><h2>Запрос ставки и условий погрузочно-разгрузочных работ</h2></span>
                <FormRequest/>
                </div>
            </div>
        </div>
    );
}

export default Main;