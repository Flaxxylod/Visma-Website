import "./getRequestClient.css"
import Nav from "../СommonElements/Navigation/Nav";
import NavLine from "../СommonElements/Navigation/NavLine/NavLine";
import Footer from "../СommonElements/Footer/Footer";
import Main from "./main/Main";
const GetRequestClient = () => {
    return (
        <div className="GetRequestClient-content">
            <Nav />
            <NavLine />
            <Main/>
            <Footer />
        </div>
    );
}

export default GetRequestClient;