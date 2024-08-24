
import { FaUserShield } from 'react-icons/fa';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#ff9933] via-[#FFFFFF] to-[#138808] shadow-2xl p-4 sticky top-0 z-50 animate-fadeIn">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex items-center space-x-3 text-black">
          <FaUserShield className="text-4xl animate-pulse" />
          <span className="text-3xl font-extrabold tracking-tight">
            UIDAI Face Auth
          </span>
        </div>

        <Navbar/>
      </div>
    </header>
  );
};

export default Header;
