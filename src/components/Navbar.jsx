import { LOGO_URL } from "../utils/constant";

import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="flex items-center justify-between px-10 py-3 text-2xl">
          <div>
            <img src="title_logo.svg" alt="Store Logo" className="w-15 h-15" />
          </div>
          <ul className="flex justify-between list-none w-96 gap-10">
            <li>
              <Link
                to="/"
                className="px-10 py-2 text-sm font-medium text-black rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus: ring-offset-2 text-xl hover:transition duration-500 border-2 border-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-10 py-2 text-sm font-medium text-black rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus: ring-offset-2 text-xl hover:transition duration-500 border-2 border-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-10 py-2 text-sm font-medium text-black rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus: ring-offset-2 text-xl hover:transition duration-500 border-2 border-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="px-10 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-xl cursor-pointer">
            Cart
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
