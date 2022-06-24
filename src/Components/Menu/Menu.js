import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";
import logo from "../../../src/assets/images/elitedentalstudiousalogo.png";

import { GiHamburgerMenu } from "react-icons/gi";

const Menu = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div
      className=""
      style={{ margin: "0 auto", marginTop: "20px", marginButton: "20px" }}
    >
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <img src={logo} alt="Elite Dental Studio" className="w-48 h-16" />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {/* <i className="fas fa-bars"></i> */}
              <GiHamburgerMenu></GiHamburgerMenu>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 text-black text-xl font-bold ">
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 text-black text-xl font-bold ">
                    About
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blogs"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 text-black text-xl font-bold ">
                    Blog
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 text-black text-xl font-bold ">
                    Services
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 text-black text-xl font-bold ">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
