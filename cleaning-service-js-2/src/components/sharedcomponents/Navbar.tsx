import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaRegUser } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RegistrationContext } from "../../contexts/registrationContext/RegistrationContext";


const Navbar = () => {

  const { currentUser, logoutUser } = useContext(RegistrationContext);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-transparent py-4 px-6 fixed top-0 left-0 w-full z-10">
        <div className="flex items-center">
          <button className="text-secondaryOrange sm:text-xl lg:text-2xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center">
            <GiHamburgerMenu />
          </button>
        </div>

        <Link className="ml-40" to="/">
          <Logo />
        </Link>

        <div className="flex items-center">
          <Link to="/mina-sidor">
            <button className="text-secondaryOrange sm:text-xl lg:text-2xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center">
              <FaRegUser /> {currentUser && (
                <span className="ml-2">{currentUser.username}</span>
              )}
            </button>
          </Link>
          <div className="flex items-center">
            {currentUser ? ( 
              <button onClick={handleLogout} className="text-secondaryOrange sm:text-xl lg:text-2xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center">
                <FiLogOut />
              </button>
            ) : (
              <Link to="/register">
                <button className="text-secondaryOrange sm:text-xl lg:text-2xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center">
                  <FiLogIn />
                </button>
              </Link>
            )}
          </div>
          <Link to="/booking">
            <button className="text-secondaryOrange sm:text-xl lg:text-2xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center">
              <MdOutlineCleaningServices />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
