import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const routes: RouteLink[] = [
  { name: "Home", path: "/" },
  { name: "Languages", path: "/languages" },
  { name: "Skills", path: "/skills" },
];

interface RouteLink {
  name: string;
  path: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [activeRoute, setActiveRoute] = useState<string>("Home");

  const navIcon = !isOpen ? (
    <FaBars
      className="text-5xl cursor-pointer hover:text-slate-300 fixed top-5 right-5 z-50 md:hidden"
      onClick={() => setIsOpen(true)}
    />
  ) : (
    <AiOutlineClose
      className="text-5xl cursor-pointer hover:text-slate-300 fixed top-5 right-5 z-50 md:hidden"
      onClick={() => setIsOpen(false)}
    />
  );

  const routeItems = routes.map((item) => (
    <li
      className={`${
        activeRoute === item.name ? "text-slate-400" : ""
      } text-2xl cursor-pointer my-8 transition-colors hover:text-slate-400 animate-fadeInBottom4`}
      onClick={() => setActiveRoute(item.name)}
    >
      <Link to={`${item.path}`}>{item.name}</Link>
    </li>
  ));

  return (
    <header className="fixed w-full z-10 top-0 left-0 right-0 container px-4 mx-auto">
      {navIcon}
      <div className="flex justify-between items-center py-5 px-2">
        <div className="text-5xl cursor-pointer hover:text-slate-300 fixed top-5 left-5 z-50 md:static">
          <Link to="/">
            <img src="logo.png" className="w-20 rounded-full" />
          </Link>
        </div>
        <nav
          className={` '' ${
            isOpen
              ? "fixed w-screen h-screen top-0 left-0 bg-blacka animate-overlayIn"
              : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col items-center align-center justify-center gap-10 md:flex-row h-full">
            {routeItems}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
