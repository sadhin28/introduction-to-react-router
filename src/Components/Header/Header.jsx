import React from 'react';

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <ul className='font-bold flex gap-5'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
            </ul>
        </div>
    );
};

export default Header;