import React from "react";
import { NavLink } from "react-router-dom";
import disruptLogoBlack from "../img/logo_black.svg";
import hamburgerIcon from "../img/hamburgerIcon.svg";
import "./HamburgerMenuStyles.css";

export default function HamburgerMenuOpen({
                                            hamburgerMenuOpen,
                                            toggleHamburgerMenu,
                                          }) {
  function handleClickHamburgerMenu() {
    toggleHamburgerMenu();
  }

  function handleClickJoin() {
    window.location =
        "https://join.slack.com/t/disruptthefin-jlz8378/shared_invite/zt-2by2eubit-TX1I42vHghkBAW965jexlw";
  }

  function handleClickInstagram() {
    window.location = "https://www.instagram.com/neudisrupt";
  }
  function handleClickLinkedIn() {
    window.location = "https://www.linkedin.com/company/neudisrupt/";
  }
  function handleClickEmail() {
    window.location = "mailto:%20nufintech@gmail.com";
  }
  function handleClickNewsletter() {
    window.location = "https://disrupt-fintech.medium.com/";
  }

  return (
      <div
          className={`
        fixed top-0 left-0 z-50 flex flex-col h-screen
        transform transition-transform duration-300
        bg-blue-500
        w-64
        ${hamburgerMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-black">
          <NavLink to="/" onClick={handleClickHamburgerMenu}>
            <img
                src={disruptLogoBlack}
                alt="testLogo"
                className="w-12 brightness-90"
            />
          </NavLink>

          <div className="flex items-center space-x-4">
            <button
                onClick={handleClickJoin}
                className="text-black text-sm font-bold bg-[#b5f727] px-4 py-2 rounded-md"
            >
              JOIN
            </button>
            <img
                src={hamburgerIcon}
                alt="hamburgerMenuIcon"
                onClick={handleClickHamburgerMenu}
                className="w-8 h-8 hover:cursor-pointer filter grayscale brightness-200"
            />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto py-6 px-4">
          <NavItem to="/" label="Home" onClick={handleClickHamburgerMenu} />
          <NavItem to="/about" label="About" onClick={handleClickHamburgerMenu} />
          <NavItem
              to="/finnovate"
              label="Finnovate"
              onClick={handleClickHamburgerMenu}
          />
          <NavItem
              to="/consulting"
              label="Consulting"
              onClick={handleClickHamburgerMenu}
          />
          <NavItem to="/events" label="Events" onClick={handleClickHamburgerMenu} />
          <NavItem
              to="/newsroom"
              label="Newsroom"
              onClick={handleClickHamburgerMenu}
          />
        </div>

        <div className="flex flex-col items-end text-white text-base font-light pr-4 pb-4 space-y-2">
          <button onClick={handleClickEmail}>Email</button>
          <button onClick={handleClickInstagram}>Instagram</button>
          <button onClick={handleClickLinkedIn}>LinkedIn</button>
          <button onClick={handleClickNewsletter}>Newsletter</button>
        </div>
      </div>
  );
}

function NavItem({ to, label, onClick }) {
  return (
      <div className="mb-4">
        <NavLink
            to={to}
            onClick={onClick}
            className="
          text-2xl font-bold text-white
          transition-all
          hover:ml-2
        "
        >
          {label}
        </NavLink>
      </div>
  );
}
