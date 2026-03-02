import { useState, useEffect } from "react";
import DesktopLayout from "./components/DesktopView/desktopLayout";
import MobileLayout from "./components/MobileView/mobileLayout";
import { navLinks, sectionMap } from "./utils/navLinks";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const getSectionId = (link) => sectionMap[link] || "";

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link);
    setIsMenuOpen(false);
    
    const id = getSectionId(link);
    const el = document.getElementById(id);
    
    if (el) {
      window.scrollTo({
      top: el.offsetTop, 
      behavior: "smooth"
    });
    }
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    // INTEGRATED: Changed h-auto to min-h-dvh for iOS dynamic height
    <div className="max-w-[1440px] mx-auto relative min-h-dvh overflow-y-visible">
      <header className="relative z-[1000] bg-white">
        
        <DesktopLayout 
            navLinks={navLinks} 
            activeLink={activeLink} 
            handleLinkClick={handleLinkClick} 
            getSectionId={getSectionId} 
        />

        <MobileLayout
            navLinks={navLinks}
            activeLink={activeLink}
            isMenuOpen={isMenuOpen}
            handleLinkClick={handleLinkClick}
            closeMenu={closeMenu}
            getSectionId={getSectionId}
        />
      </header>
    </div>
  );
}

export default App;