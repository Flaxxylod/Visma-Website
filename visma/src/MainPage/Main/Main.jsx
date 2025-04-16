import Services from './Services/Services.jsx'
import TheCompany from './TheCompany/TheCompany.jsx'
import News from './News/News.jsx'
import './main.css'
const Main = () => {
    return (
        <main className='Main-content'>
                <Services></Services>
                <TheCompany></TheCompany>
                <News></News>
                
        </main>
    );
}

export default Main;