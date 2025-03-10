import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import disruptLogo from "../../img/logo_a.svg";
import hamburgerIcon from "../../img/hamburgerIcon.svg";
import { NavLink } from "react-router-dom";

export default function PastVenturesOpeningScreen({
                                                    hamburgerMenuOpen,
                                                    toggleHamburgerMenu,
                                                  }) {
  function handleClickHamburgerMenu() {
    toggleHamburgerMenu();
  }

  if (!hamburgerMenuOpen) {
    return (
        <div>
          <div className="w-screen h-screen relative">
            <div className="w-screen h-20 flex items-start justify-between">
              <div className="flex items-center">
                <NavLink to="/">
                  <img
                      src={disruptLogo}
                      alt="testLogo"
                      className="w-16 ml-4 mt-4"
                  />
                </NavLink>
              </div>
              <div className="flex items-center py-4 border border-solid rounded-full border-[#b5f727] mr-5 mt-5 hover:scale-110">
                <img
                    src={hamburgerIcon}
                    alt="hamburgerMenuIcon"
                    onClick={handleClickHamburgerMenu}
                    className="w-14 h-5 hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="w-screen h-3/4 flex flex-col justify-center items-center">
              <div className=" w-auto flex flex-col items-cente justify-center">
                <p
                    className="h-3/4 text-white font-semibold text-8xl"
                    style={{
                      fontFamily: "Faucet",
                      fontFeatureSettings: "'dlig' on, 'ss01' on",
                    }}
                >
                  PAST FINNOVATE EVENTS
                </p>
                <p
                    className="text-white text-2xl self-end"
                    style={{ fontFamily: "Usual-Light" }}
                >
                  by disrupt
                </p>
              </div>
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
