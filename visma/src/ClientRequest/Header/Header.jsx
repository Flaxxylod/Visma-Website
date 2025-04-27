import Nav from "../../СommonElements/Navigation/Nav";
import NavLine from "../../СommonElements/Navigation/NavLine/NavLine";
const Header = () => {
    return (
        <header>
            <div className="container">
                <Nav />
            </div>
            <NavLine />
        </header>
    );
}

export default Header;