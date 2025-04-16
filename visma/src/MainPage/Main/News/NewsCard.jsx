import { Fragment } from 'react';
import './news.css'
import { NewsCards } from './NewsData';
const NewsCard = () => {
    const Cards = NewsCards.map(cards =>

        <div className='Card-Block'>
            <a href="">
                <img className='CardPicture' src={cards.img} alt="Новости" />
            </a>
            <div className='NewsText'>
                <span className='span-news'>{cards.date}</span>
                <strong className='StrBlack'>{cards.Strong}</strong>
                <p className='p-news'>{cards.paragraph}</p>
            </div>
        </div>

    )
    return (
        <Fragment>
            {Cards}
        </Fragment>


    );
}

export default NewsCard;