import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/Sanjaylogo.png"
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Navbar = () => {
    return (
      <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} className="mx-2" width={50} height={33} alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/sanjay-sahani-96b81b204/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/Sanjay6388" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github">
                <FaGithub/>
            </a>
            <a href="https://www.instagram.com/s_a_n_j_a_y_0711/?hl=en" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram">
                <FaInstagram/>
            </a>
            <a href="https://x.com/Sarnavo0711" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter">
                <FaSquareXTwitter/>
            </a>
        </div>
      </nav>
    );
  };
  
export default Navbar; 
  