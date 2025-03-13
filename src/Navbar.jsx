import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gradient-to-r from-green-700 to-green-500 py-3 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                {/* Logo */}
                <a href="#" className="text-white text-2xl font-extrabold tracking-wide">
                    🌿 Plants
                </a>

                {/* Hamburger Icon */}
                <button 
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                    onClick={toggleMenu}
                    tabIndex="0"
                >
                    {isOpen ? (
                        <X className="text-white w-7 h-7" />
                    ) : (
                        <Menu className="text-white w-7 h-7" />
                    )}
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                {['Home', 'About', 'Services', 'Product', 'Contact'].map((item) => (
    <NavLink 
        key={item} 
        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
        className="text-white hover:text-green-200 transition duration-300"
        onClick={() => setIsOpen(false)} // Close on click
    >
        {item}
    </NavLink>
))}
                    {/* Sign In Button */}
                    <a 
                        href="#signin"
                        className="bg-white text-green-600 px-5 py-2 rounded-full font-semibold hover:bg-green-100 transition duration-300 shadow"
                    >
                        Sign In
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-green-600 transition-all duration-300 ${
                    isOpen ? 'opacity-100 h-auto' : 'opacity-0 hidden'
                }`}
            >
                <div className="flex flex-col items-center space-y-2 py-2">
                    {['Home', 'About', 'Services', 'Product', 'Contact'].map((item) => (
                        <NavLink 
                            key={item} 
                            to={`/`} 
                            className="text-white hover:text-green-200 transition duration-300"
                            onClick={() => setIsOpen(false)} // Close on click
                        >
                            {item}
                        </NavLink>
                    ))}
                    {/* Sign In Button for Mobile */}
                    <a 
                        href="#signin"
                        className="mt-2 px-6 py-2 bg-white text-green-600 text-center font-semibold rounded-full hover:bg-green-100 transition duration-300 shadow"
                        onClick={() => setIsOpen(false)}
                    >
                        Sign In
                    </a>
                </div>
            </div>
        </nav>
    );
};
