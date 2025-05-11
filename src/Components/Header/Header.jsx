import { Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-end gap-4 ">
        
         <Link to='/'>Home</Link>
         <Link to='about'>About</Link>
         <Link to='contact'>Contact Us</Link>
         <Link to='user'>User</Link>
        </div>
    );
};

export default Header;