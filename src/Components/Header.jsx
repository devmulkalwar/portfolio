import React, { useState, useEffect } from "react";
import HamburgerButton from "./HamburgerButton";
import ThemeButton from "./ThemeButton";
import Navmenu from "./Navmenu";
import { Link } from "react-router-dom";
import profile from "../assets/Images/devphoto.jpg";

const Header = () => {
  const [scrolling, setScrolling] = useState(false); // Track scrolling state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // User has scrolled down
      } else {
        setScrolling(false); // User is at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let sideMenuClass =
    "menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow";
  let topMenuClass = "menu menu-horizontal";

  return (
    <div
      className={`navbar bg-base-300 text-base-content sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolling ? " shadow-lg" : "bg-opacity-100 shadow-none"
      }`}
    >
      <div className="navbar-start">
        <details className="dropdown lg:hidden">
          <HamburgerButton />

          <Navmenu classes={sideMenuClass} />
        </details>
        <Link to="/" className="btn btn-ghost text-xl font-bold text-primary">
          Portfolio
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <Navmenu classes={topMenuClass} />
      </div>

      <div className="navbar-end">
        <ThemeButton />

        <div className="btn btn-ghost btn-circle avatar">
          <div className="w-8 rounded-full">
            <img alt="Profile" src={profile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
