import {  NavLink} from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <nav className=" sticky top-0 text-md:2xl font-black border-b-4 border-amber-800 py-5 px-5 bg-amber-100 flex justify-end gap-4 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        <NavLink  to='/user'>User</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
        
        </nav>
    );
};

export default Header;