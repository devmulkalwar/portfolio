import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navmenu = ({ classes }) => {
  const routes = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Projects",
      to: "/projects",
    },
    {
      name: "Contact",
      to: "/contact",
    },
    {
      name: "Certificates",
      to: "/certificates",
    },
  ];

  const renderLinks = (routes) => {
    return routes.map((route, index) => (
      <li key={index}>
        <NavLink
          to={route.to}
          className={({ isActive }) =>
            `font-medium transition duration-300 ease-in-out 
    hover:text-primary   mx-1
    ${isActive ? "text-primary " : "text-base-content"}`
          }
        >
          {route.name}
        </NavLink>
      </li>
    ));
  };
  return <ul className={classes}>{renderLinks(routes)}</ul>;
};

export default Navmenu;
