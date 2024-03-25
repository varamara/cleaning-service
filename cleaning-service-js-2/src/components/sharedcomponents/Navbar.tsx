import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { RegistrationContext } from "../../contexts/registrationContext/RegistrationProvider";

const Navbar = () => {
  const { currentUser, logoutUser } = useContext(
    RegistrationContext);
  const handleLogout = () => {
    logoutUser();
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
      if (offset > navbarHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className={`flex items-center justify-between py-2 px-6 fixed top-0 left-0 w-full z-10 transition-all duration-500 ease-in-out ${
          scrolled ? "bg-primaryBeige" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <button className="text-secondaryOrange sm:text-xl lg:text-2xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center">
            <GiHamburgerMenu />
          </button>
        </div>

        <Link className="ml-40" to="/">
          <Logo />
        </Link>

        <div className="flex items-center">
          {currentUser && (
            <Link to="/mina-sidor">
              <button className="text-secondaryOrange sm:text-xl lg:text-2xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center">
                <FaRegUser />{" "}
                <span className="ml-2">{currentUser.username}</span>
              </button>
            </Link>
          )}
          <div className="flex items-center">
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="text-secondaryOrange sm:text-xl lg:text-2xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center"
              >
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
