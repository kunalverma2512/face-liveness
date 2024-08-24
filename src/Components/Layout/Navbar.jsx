
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex space-x-8">
          <NavLink 
            to="/" 
            className="text-white text-lg font-medium hover:text-indigo-300 transition-colors duration-300 relative group" 
            activeClassName="pb-1 after:absolute after:w-full after:h-[3px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 after:origin-right group-hover:after:origin-left group-hover:after:scale-x-100"
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/liveness" 
            className="text-white text-lg font-medium hover:text-indigo-300 transition-colors duration-300 relative group" 
            activeClassName="pb-1 after:absolute after:w-full after:h-[3px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 after:origin-right group-hover:after:origin-left group-hover:after:scale-x-100"
          >
            Liveness Check
          </NavLink>
          
        </nav>
  );
};

export default Navbar;
