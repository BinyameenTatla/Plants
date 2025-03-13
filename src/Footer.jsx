import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] backdrop-blur-xl text-gray-300 py-12">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1 - Logo and Description */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-white mb-4">🌿 Plants</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Bringing nature to your home with fresh, beautiful plants. Discover the joy of greenery and transform your space today.
                        </p>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["Home", "About", "Services", "Products", "Contact"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-green-400 transition-colors duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-green-400 transition-colors duration-300">
                                <IoLogoFacebook className="text-2xl hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a href="#" className="hover:text-green-400 transition-colors duration-300">
                                <FaTwitter className="text-2xl hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a href="#" className="hover:text-green-400 transition-colors duration-300">
                                <FaInstagram className="text-2xl hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a href="#" className="hover:text-green-400 transition-colors duration-300">
                                <FaLinkedin className="text-2xl hover:scale-110 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Column 4 - Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
                        <form className="flex space-x-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="px-4 py-2 w-full rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-300 placeholder-gray-500"
                                required
                            />
                            <button 
                                type="submit" 
                                className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-6">
                    &copy; {new Date().getFullYear()} Plants by Binyameen. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
