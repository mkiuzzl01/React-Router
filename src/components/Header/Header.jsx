import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

    return (
    <nav>
            <NavLink className="header_style" to="/">Home</NavLink>
            <NavLink className="header_style" to="/About">About</NavLink>
            <NavLink className="header_style" to="/Contact">Contact</NavLink>
            <NavLink className="header_style" to="/Users">Users</NavLink>
        </nav>
    );
};

export default Header;