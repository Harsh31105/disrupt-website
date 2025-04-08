import React, { useState, useEffect } from "react";
import Events from "./HomeComponents/Events";
import WhoWeAre from "./HomeComponents/WhoWeAre";
import OpeningScreen from "./HomeComponents/OpeningScreen";
import WhatWeDo from "./HomeComponents/WhatWeDo";
import Footer from "./HomeComponents/Footer";

export default function Home() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  };

  useEffect(() => {
    if (hamburgerMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div>
      <OpeningScreen
        hamburgerMenuOpen={hamburgerMenuOpen}
        toggleHamburgerMenu={toggleHamburgerMenu}
      />
      <WhoWeAre />
      {/*<Events />*/}
      <WhatWeDo />
      <Footer />
    </div>
  );
}
