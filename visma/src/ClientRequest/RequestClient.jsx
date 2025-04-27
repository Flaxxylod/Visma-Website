import Footer from "../СommonElements/Footer/Footer";
import Header from "../ClientRequest/Header/Header";
import Main from "./Main/Main";
const RequestClient = () => {
    return (
        <div className="wrap">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default RequestClient;