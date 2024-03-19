import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { HiArrowRight } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { RegistrationContext } from "../../contexts/registrationContext/RegistrationContext";


const Navbar = () => {

  const { currentUser } = useContext(RegistrationContext);


  return (
    <>
      <nav className="flex items-center justify-between bg-transparent py-4 px-6 fixed top-0 left-0 w-full z-10">
        <div className="flex items-center">
          <button className="text-gray-500 focus:outline-none focus:text-gray-700">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <Link to="/">
          <Logo />
        </Link>

        <div className="flex items-center">
          <Link to="/register">
            <button className="text-secondaryOrange sm:text-xl lg:text-2xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center">
              <FaUser />   {currentUser && (
                <span className="ml-2">{currentUser.username}</span>
              )}
            </button>
          </Link>
          <Link to="/booking">
            <button className="text-secondaryOrange sm:text-xl lg:text-2xl tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center">
              Boka nu{" "}
              <span className="pl-1 mt-1 sm:text-xl lg:text-2xl">
                <HiArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
