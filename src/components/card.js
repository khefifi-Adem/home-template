import image from '../assets/img/1.svg';
import '../assets/css/card.css'
function Card({ head, description }) {
    return (
        <div className="card-container">
            <div className="card-image">
                <img className='home-pic' src={image} alt="home_pic" />            </div>
            <div className="card-body">
                <div className="card-head">
                    <p>
                        {head}
                    </p>
                </div>
                <div className="card-description">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default Card;