import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faChildren} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Frikha's Todo <FontAwesomeIcon icon={faChildren} /></h1>
            <div className="links">
                <Link to="/" style={{
                    backgroundColor: '#C39523',
                    borderRadius: '8px'
                }}><FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} /></Link>
                <Link to="/create" style={{
                    color: '#ffffff',
                    backgroundColor: '#C39523',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;