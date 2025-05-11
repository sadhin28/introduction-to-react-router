import { Link} from "react-router-dom";

const Header = () => {
    return (
        <div className=" sticky top-0 text-md:2xl font-black border-b-4 border-amber-800 py-5 px-5 bg-amber-100 flex justify-end gap-4 ">
        
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact Us</Link>
         <Link to='/user'>User</Link>
         <Link to='/posts'>Posts</Link>
        </div>
    );
};

export default Header;