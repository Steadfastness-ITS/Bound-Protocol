import Bound from "./bound";
import Partners from "./partners";
import Aboutus from "./aboutus";
import Comparison from "./comparison";
import Featured from "./featured";
import Step from "./step";
import Banner from "./banner";
import Team from "./team";
import Newsletter from "./newsletter";

const DesktopLayout = ({ navLinks, activeLink, handleLinkClick, getSectionId }) => {
  return (
    <div className="hidden lg:block">
      
      <section id="bound">
        <Bound />
      </section> 

      <section id="partners">
        <Partners />
      </section> 

      <section id="aboutus">
        <Aboutus />
      </section>

      <section id="comparison">
        <Comparison />
      </section>

      <section id="featured">
        <Featured />
      </section>

      <section id="step">
        <Step />
      </section> 

      <section id="banner">
        <Banner />
      </section>


      <section id="team">
        <Team />
      </section>

      <section id="newsletter">
        <Newsletter />
      </section> 

    </div>
  );
};

export default DesktopLayout;


