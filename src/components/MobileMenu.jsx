import { Link  } from "react-router-dom";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {

    return (
        <div className={`fixed top-0 right-0 h-screen bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-300 ease-in-out 
                        ${menuOpen ? "w-80 opacity-100 pointer-events-auto" : "w-0 opacity-0 pointer-events-none"}`}>
            
            <button onClick={() => setMenuOpen((prev) => !prev)} className="absolute top-4 right-7 text-gray-200 text-3xl focus:outline-none cursor-pointer">
                &times;
            </button>

            <Link to="/"><span className="text-gray-200 hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen((prev) => !prev)}>Home</span></Link>
            <Link to="/about"><span className="text-gray-200 hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen((prev) => !prev)}>About Us</span></Link>
            <Link to="/team"><span className="text-gray-200 hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen((prev) => !prev)}>Team</span></Link>
            <Link to="/project"><span className="text-gray-200 hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen((prev) => !prev)}>Projects</span></Link>
            <Link to="/contact"><span className="text-gray-200 hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen((prev) => !prev)}>Contacts</span></Link>
        </div>
    );


}