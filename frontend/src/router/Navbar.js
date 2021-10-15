import {NavLink} from 'react-router-dom';
import '../css/Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink to='/'>Home</NavLink>
            <br/>
            <NavLink to='/level1'>level1</NavLink>
            <br/>
            <NavLink to='/level2'>level2</NavLink>
        </nav>
    );
}

export default Navbar;