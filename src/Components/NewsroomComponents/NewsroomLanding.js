import React from "react";
import HamburgerMenu from "../HamburgerMenu.js";
import disruptLogo from "../../img/logo_a.svg";
import hamburgerIcon from "../../img/hamburgerIcon.svg";
import { NavLink } from "react-router-dom";

export default function NewsroomLanding({
                                          hamburgerMenuOpen,
                                          toggleHamburgerMenu,
                                        }) {
  // Use this state to toggle the hamburger menu, false = closed, true = open
  function handleClickHamburgerMenu() {
    toggleHamburgerMenu();
  }

  if (!hamburgerMenuOpen) {
    return (
        <div className="relative w-screen ">
          <div className="flex items-center justify-between p-4 md:p-0">
            <NavLink to="/">
              <img
                  src={disruptLogo}
                  alt="testLogo"
                  className="w-16"
              />
            </NavLink>
            <button
                onClick={handleClickHamburgerMenu}
                className="p-2 border border-solid rounded-full border-[#b5f727] hover:scale-110"
            >
              <img
                  src={hamburgerIcon}
                  alt="hamburgerMenuIcon"
                  className="w-8 h-auto"
              />
            </button>
          </div>
          <div className="flex flex-col items-start pl-8 mt-5 md:pl-32 md:mt-10">
            <div
                className="py-8 text-5xl font-bold text-white md:text-7xl"
                style={{ fontFamily: "Faucet" }}
            >
              <p>Blog</p>
            </div>
          </div>
        </div>
    );
  } else {
    return (
        <HamburgerMenu
            hamburgerMenuOpen={hamburgerMenuOpen}
            toggleHamburgerMenu={toggleHamburgerMenu}
        />
    );
  }
}
