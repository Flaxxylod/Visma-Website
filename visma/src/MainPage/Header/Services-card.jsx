import './services-card.css'
const ServicesCard = ({ children, typeCard }) => {
    return (

        <div className={typeCard}>

            <span className='span-header'>
                Услуги
            </span>

            <strong>
                {children}
            </strong>

        </div>

    );
}

export default ServicesCard;