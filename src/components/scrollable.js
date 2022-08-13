import cards from '../data/cards.json'
import Card from './card';
import '../assets/css/Scrollable.css'


function Scrollable() {
    return (
        <ul className='cards'>
            {
                cards.map((card) => (
                    <li className="card" key={card.id}>
                        <Card head={card.title} description={card.description} />
                    </li>

                ))
            }

        </ul>
    );
}

export default Scrollable;
