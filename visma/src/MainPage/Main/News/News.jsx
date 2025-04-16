import './news.css'
import NewsCard from './NewsCard';
import ButtonNews from './../../../assets/Main/Button-news.svg'

const News = () => {
    return (
        <div className="News-Content">
            <div className="container">

                <div className="NewsTop">
                    <h2>Новости</h2>
                    <div>
                        <span className='AllNews'>Все новости</span>
                        <button>
                            <a href="#!">
                                <img src={ButtonNews} alt="" />
                            </a>
                        </button>
                    </div>
                </div>
                <div className="NewsBottom">
                    <NewsCard />
                </div>
            </div>
        </div>

    );
}

export default News;