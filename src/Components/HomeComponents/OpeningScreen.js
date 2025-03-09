import React from "react";
import HamburgerMenu from "../HamburgerMenu.js";
import disruptLogo from "../../img/logo_a.svg";
import hamburgerIcon from "../../img/hamburgerIcon.svg";
import backgroundVideo from "../../img/MiniAdDisrupt(NEW BRANDING).mp4";

export default function OpeningScreen({ hamburgerMenuOpen, toggleHamburgerMenu }) {
  return (
    <div className="relative flex flex-col items-center justify-start w-screen h-screen overflow-hidden">
      {/* Logo at the top center */}
      <div className="z-20 mt-5">
        <img src={disruptLogo} alt="Disrupt Logo" className="w-16 h-auto" />
      </div>

      {/* Render the video */}
    <video autoPlay loop muted className="absolute top-0 left-0 z-0 object-cover w-full h-full">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
    </video>


        {/* Render the hamburger button */}
      <div className={`absolute top-5 left-5 z-30 ${hamburgerMenuOpen ? 'hidden' : 'block'}`}>
        <button onClick={toggleHamburgerMenu} className="p-2 rounded-full bg-[#b5f727] hover:bg-green-700">
          <img src={hamburgerIcon} alt="Menu" className="w-8 h-8" />
        </button>
      </div>

      {/* Overlay Content within the video area */}
      <div className={`absolute bottom-10 w-full flex flex-col items-center z-10 ${hamburgerMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
        <h1 className="text-2xl font-bold text-center text-white sm:text-4xl md:text-5xl">Disrupt</h1>
        <p className="mb-4 text-base text-center text-white sm:text-lg md:text-xl">
        Northeastern's student-led fintech group;<br/>{" "}
            <em>where curiosity meets innovation</em>
        </p>
        {/*<button onClick={() => window.location = "https://airtable.com/appYvJkhyjQlVvoqV/shrXCWB0tMh79Ty5i"} className="px-6 py-3 text-white transition-colors bg-transparent border border-white rounded-full hover:bg-white hover:text-black">*/}
        {/*  Join Us*/}
        {/*</button>*/}
      </div>

      {/* Render the hamburger menu */}
      {hamburgerMenuOpen && (
        <HamburgerMenu
          hamburgerMenuOpen={hamburgerMenuOpen}
          toggleHamburgerMenu={toggleHamburgerMenu}
        />
      )}
    </div>
  );
}
