import { Link } from "react-router-dom";
import links from "../data/Routes.json"
import { useState } from "react";
import '../assets/css/NavBar.css'


function NavBar() {

    const [active, setActive] = useState("");

    const handleHumburger = () => {
        if (!active) {
            setActive('active');
        } else {
            setActive("");
        }
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <h2>LOGO.</h2>
            </div>
            <ul className={`links-list ${active}`} >
                {
                    links.map((link) => (
                        <li className="links-item" key={link.id}>
                            <Link className="link" to={link.link}>{link.text}</Link>
                        </li>
                    ))}
            </ul>
            <div className={`hamburger ${active}`} onClick={handleHumburger}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </div>
        </nav>
    )
}
export default NavBar;