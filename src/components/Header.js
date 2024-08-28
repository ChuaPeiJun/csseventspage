import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Change this path as needed

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-primary text-white py-4 px-12">
            <div className="flex items-center justify-between">
                <div className="flex items-center cursor-pointer">
                    <a href="https://cssocietyusm.com/">
                        <img className="h-16 mr-4" src={logo} alt="CSS Society Logo" />
                    </a>
                    <a href="https://cssocietyusm.com/">
                    <div className="text-white font-logo text-xl tracking-wide">
                        <p>USM COMPUTER</p>
                        <p>SCIENCE SOCIETY</p>
                    </div>
                    </a>
                </div>
                {/* Navigation for larger screens */}
                <nav className="hidden md:flex space-x-4 text-lg text-white">
                    <a href="https://cssocietyusm.com/about/">
                    <button className="bg-primary hover:bg-primaryDark px-4 py-2 rounded transition duration-300">
                        About
                    </button>
                    </a>
                    <Link to="/events">
                    <button className="bg-primary hover:bg-primaryDark px-4 py-2 rounded transition duration-300">
                        Events
                    </button>
                    </Link>
                </nav>
                {/* Menu icon for smaller screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
            </div>
            {/* Dropdown menu for smaller screens */}
            {isMenuOpen && (
                <div className="text-lg text-white md:hidden mr-5 w-48 p-2 bg-navdropdown absolute right-0 rounded-2xl">
                    <a href="https://cssocietyusm.com/about/">
                    <button className="block w-40  hover:bg-primaryDark px-6 py-2 rounded-2xl text-left">
                        About
                    </button>
                    </a>
                    <Link to="/events">
                    <button className="block w-40 hover:bg-primaryDark px-6 py-2 rounded-2xl text-left">
                        Events
                    </button>
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
