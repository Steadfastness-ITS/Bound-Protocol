import { useState } from "react";
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
    setIsMenuOpen(false); // Closes menu on click
    
    const id = getSectionId(link);
    const el = document.getElementById(id);
    
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70, 
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto block bg-white">
      {/* HEADER ONLY CONTAINS NAV LOGIC */}
      <header className="relative z-[1000]">
        <DesktopLayout 
            navLinks={navLinks} 
            activeLink={activeLink} 
            handleLinkClick={handleLinkClick} 
            getSectionId={getSectionId} 
        />
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="relative block">
        <MobileLayout
            navLinks={navLinks}
            activeLink={activeLink}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen} // Pass the setter down!
            handleLinkClick={handleLinkClick}
            getSectionId={getSectionId}
        />
      </main>
    </div>
  );
}

export default App;