import NavBar from "../components/NavBar";
import '../assets/css/Home.css';
import home from '../assets/img/1.svg';
import Scrollable from "../components/scrollable";
function Home() {
    return (
        <div>
            <NavBar />
            <div className="home-container">
                <div className="home-left">
                    <div className="home-title">
                        <h1 >
                            What is Lorem Ipsum?
                        </h1>
                    </div>
                    <div className="home-description">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="home-right">
                    <img className='home-pic' src={home} alt="home_pic" />
                </div>

                <div className="scrollable">
                    <Scrollable />
                </div>
            </div>
        </div>
    );
}

export default Home;