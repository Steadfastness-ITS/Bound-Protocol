import MobBound from "./mobBound";
import MobPartners from "./mobPartners";
import AboutUs from "./aboutUs";
import Compare from "./compare";
import FeaturedMobile from "./featuredMobile";
import MobStep from "./mobStep";
import MobBanner from "./mobBanner";
import MobTeam from "./mobTeam";
import Newsletter from "./newsLetter";


const MobileLayout = ({ navLinks, activeLink, isMenuOpen, setIsMenuOpen, handleLinkClick, closeMenu, getSectionId }) => {
  return (
    <div className="lg:hidden block"> 
      
      <section id="mobBound">
        <MobBound 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          handleLinkClick={handleLinkClick} 
        />
      </section>

      <section id="mobPartners">
        <MobPartners />
      </section>

      <section id="aboutUs">
        <AboutUs  />
      </section>

      <section id="compare">
        <Compare  />
      </section>

      <section id="featuredMobile">
        <FeaturedMobile />
      </section>

      <section id="MobStep">
        <MobStep  />
      </section>

      <section id="mobBanner">
        <MobBanner />
      </section>

      <section id="mobTeam">
        <MobTeam />
      </section>

      <section id="newsLetter">
        <Newsletter  />
      </section>
    </div>
  );
};

export default MobileLayout;