export default function Header() {
    return(
    <>
    <div className="nav-bar bg-white text-black h-15 w-screen p-2.5 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <h1 className="capitalize font-extrabold">REACT LANDING PAGE</h1>
        <div className="nav-bar-right">
            <ul className="flex space-x-8">
                <li>
                    <a href="#" className="relative group pb-1">Features
                        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
                <li><a href="#" className="relative group pb-1">About
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#" className="relative group pb-1">Services
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#" className="relative group pb-1">Gallery
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#" className="relative group pb-1">Testimonials
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#" className="relative group pb-1">Team
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#" className="relative group pb-1">Contact
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
            </ul>
        </div>
    </div>
    </>
    );
}