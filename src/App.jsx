import { useState } from "react";
import DesktopLayout from "./components/DesktopView/desktopLayout";
import MobileLayout from "./components/MobileView/mobileLayout";
import { navLinks, desktopSectionMap, mobileSectionMap } from "./utils/navLinks";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const getSectionId = (link) => {
    const isMobile = window.innerWidth < 1024;
    return isMobile ? mobileSectionMap[link] : desktopSectionMap[link];
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();

    setActiveLink(link);
    setIsMenuOpen(false);

    const id = getSectionId(link);
    const el = document.getElementById(id);

    if (el) {
      const offset = window.innerWidth < 1024 ? 70 : 90;

      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white">
      <main className="block w-full">
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
          setIsMenuOpen={setIsMenuOpen}
          handleLinkClick={handleLinkClick}
          getSectionId={getSectionId}
        />
      </main>
    </div>
  );
}

export default App;