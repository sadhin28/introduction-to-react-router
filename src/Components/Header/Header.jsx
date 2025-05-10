import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className=' sticky rounded-br-2xl rounded-bl-2xl z-40 top-0 h-20 px-4 py-6 bg-black text-white flex font-bold justify-between '>
            <h2>Navbar</h2>
            <nav className='font-bold flex gap-5'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;