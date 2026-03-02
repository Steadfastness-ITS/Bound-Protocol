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

  // useEffect(() => {
  //   document.body.style.overflow = isMenuOpen ? "hidden" : "";
  //   return () => (document.body.style.overflow = "");
  // }, [isMenuOpen]);

  return (
    <div className="max-w-[1440px] mx-auto relative h-auto">
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