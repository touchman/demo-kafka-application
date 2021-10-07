import {NavLink} from 'react-router-dom';
import '../css/Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink to='/'>Home</NavLink>
            <br/>
            <NavLink to='/second'>SecondPage</NavLink>
        </nav>
    );
}

export default Navbar;