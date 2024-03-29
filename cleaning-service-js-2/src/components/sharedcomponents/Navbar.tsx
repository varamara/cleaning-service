import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { RegistrationContext } from "../../contexts/registrationContext/RegistrationProvider";

const Navbar = () => {
  const { currentUser, logoutUser } = useContext(RegistrationContext);
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
        className={`grid grid-cols-3 items-center justify-between py-2 px-6 fixed top-0 left-0 w-full z-10 transition-all duration-500 ease-in-out ${
          scrolled ? "bg-primaryBeige" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-start">
          <button className="text-secondaryOrange sm:text-xl lg:text-2xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center">
            <GiHamburgerMenu />
          </button>
        </div>
        <div>
          <Link className="flex items-center justify-center" to="/">
            <Logo />
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <Link to="/booking">
            <button className="text-white bg-secondaryOrange sm:text-base lg:text-base tracking-wider rounded-lg py-2 px-4 sm:mr-4 focus:outline-none focus:shadow-outline flex flex-row items-center hover:bg-primaryOrange transition duration-200">
              <span className=" sm:hidden">Boka </span>{" "}
              <span className=" hidden sm:flex text-xs sm:text-sm">
                Boka Städning
              </span>
            </button>
          </Link>
          {currentUser && (
            <Link to="/mina-sidor">
              <button className="text-secondaryOrange sm:text-xl lg:text-1xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center">
                <FaRegUser />{" "}
                <span className="ml-2 text-base hidden sm:flex">
                  {currentUser.username}
                </span>
              </button>
            </Link>
          )}
          <div className="">
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="text-secondaryOrange sm:text-xl lg:text-1xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              >
                <FiLogOut />
              </button>
            ) : (
              <Link to="/login">
                <button className="text-secondaryOrange sm:text-xl lg:text-1xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center">
                  <FiLogIn />
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
