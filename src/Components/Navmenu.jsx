import React from "react";
import { Link } from "react-router-dom";

const Navmenu = ({classes}) => {
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
      name: "Resume",
      to: "/resume",
    },
  ];

  const renderLinks = (routes) => {
    return routes.map((route, index) => (
      <li key={index}>
        <Link to={route.to}>{route.name}</Link>
      </li>
    ));
  };
  return <ul className={classes}>{renderLinks(routes)}</ul>;
};

export default Navmenu;
