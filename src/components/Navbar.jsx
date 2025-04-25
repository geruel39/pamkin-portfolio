import { useEffect } from "react"
import { Link  } from "react-router-dom";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    //Set the overflow to hidden when Mobile Menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

    return <nav className="fixed top-0 w-full bg-[rgba[10,10,10,0.8]] backdrop-blur-lg border-white/10 shadow-lg z-50 opacity-100"> 
            
            <div className="max-w-5x1 mx-auto px-4">

                <div className="flex md:justify-around justify-between items-center h-16">

                    <Link to={"/"} className="flex items-center">
                        <img src="pamkin-portfolio/pumpkin.svg" alt="Pamkin Guild" width="50px" height="50px"/>
                        <h1 className="text-yellow-500 ml-1 uppercase"> Pamkin</h1>
                    </Link>
                    

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden hover:text-yellow-400" 
                        onClick={() => setMenuOpen((prev) => !prev)}> 
                        &#9776; 
                    </div>

                    <div className="hidden md:flex items-center space-x-15">
                        
                        <Link to="/"><span className="text-gray-200 hover:text-yellow-400 transition-colors">Home</span></Link>
                        <Link to="/about"><span className="text-gray-200 hover:text-yellow-400 transition-colors">About Us</span></Link>
                        <Link to="/team"><span className="text-gray-200 hover:text-yellow-400 transition-colors">Team</span></Link>
                        <Link to="/project"><span className="text-gray-200 hover:text-yellow-400 transition-colors">Projects</span></Link>
                        <Link to="/contact"><span className="text-gray-200 hover:text-yellow-400 transition-colors">Contacts</span></Link>
                    
                    </div>

                </div>

            </div>

        </nav>
}