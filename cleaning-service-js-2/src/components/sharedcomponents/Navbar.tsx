import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-transparent py-4 px-6">
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

        <Logo/>

        <div>
          <Link to="/BookingPage">
            <button className="bg-primaryOrange text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Gå vidare
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
