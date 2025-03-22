import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return(
    <>
    <div className="nav-bar bg-white text-black h-16 w-screen p-2.5 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <h1 className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">TensorFleet</h1>
        
        <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
        </button>
        
        <div className="nav-bar-right hidden md:block">
            <ul className="flex space-x-8">
                <li>
                    <a href="#features" className="relative group pb-1">Features
                        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
                <li><a href="#about" className="relative group pb-1">About
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#services" className="relative group pb-1">Services
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#gallery" className="relative group pb-1">Gallery
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#testimonials" className="relative group pb-1">Testimonials
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#team" className="relative group pb-1">Team
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#contact" className="relative group pb-1">Contact
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
            </ul>
        </div>
    </div>
    
    {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full z-40">
            <ul className="flex flex-col space-y-4 text-black">
                <li><a href="#features" className="block py-2">Features</a></li>
                <li><a href="#about" className="block py-2">About</a></li>
                <li><a href="#services" className="block py-2">Services</a></li>
                <li><a href="#gallery" className="block py-2">Gallery</a></li>
                <li><a href="#testimonials" className="block py-2">Testimonials</a></li>
                <li><a href="#team" className="block py-2">Team</a></li>
                <li><a href="#contact" className="block py-2">Contact</a></li>
            </ul>
        </div>
    )}
    </>
    );
}