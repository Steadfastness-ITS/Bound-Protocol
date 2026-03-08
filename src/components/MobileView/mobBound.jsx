import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp, textReveal, buttonHover } from "../../utils/animations";

const MobBound = ({ isMenuOpen, setIsMenuOpen, handleLinkClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    "HOME",
    "MISSION",
    "FEATURES",
    "HOW IT WORKS",
    "LEADERSHIP",
    "CONTACT US",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white h-auto font-sans relative">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-white z-[2000] h-[70px] transition-all
          ${isScrolled ? "border-b border-gray-100 shadow-sm" : "border-b-0"}
        `}
      >
        <img
          src="/boundprotocollogo.png"
          alt="Bound Protocol"
          className="h-8 w-auto"
        />

        {/* Animated Hamburger Icon */}
        <button
          type="button"
          className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer relative z-[1003]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-[4px]" : "-translate-y-1"
          }`} />
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ease-in-out my-0.5 ${
            isMenuOpen ? "opacity-0 scale-0" : "opacity-100"
          }`} />
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-[4px]" : "translate-y-1"
          }`} />
        </button>
      </header>

      {/* MOBILE MENU OVERLAY - Fixed to stop touch trapping */}
      <div
        className={`fixed inset-0 bg-black/50 z-[1000] transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ display: isMenuOpen ? 'block' : 'none' }} 
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* MOBILE NAV DRAWER */}
      <nav
        className={`fixed top-0 right-0 w-[280px] h-[500px] rounded-bl-2xl bg-white z-[1001] 
        transform transition-transform duration-300 ease-in-out
        shadow-[-10px_0_30px_rgba(0,0,0,0.1)]
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col pt-24 px-8 gap-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-base font-medium uppercase no-underline transition-colors duration-300
              py-4 border-b border-[#f0f0f0] last:border-b-0 text-[#4D4D4D] hover:text-[#6D5EED]"
              onClick={(e) => {
                handleLinkClick(e, link);
                setIsMenuOpen(false); // Ensure menu closes on click
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="px-4 pt-24 pb-16 w-full overflow-hidden">
        <div className="relative flex justify-center w-full items-center mb-12 overflow-hidden rounded-xl">
          <video
            src="/herovideomobile.mp4"
            poster="/backgroundmobile.png"
            autoPlay
            loop
            muted
            playsInline
            className="block lg:hidden h-[340px] max-w-full object-cover w-full"
            style={{ border: "none", outline: "none" }}
          />
        </div>

        <div className="text-left mt-8">
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            variants={textReveal}
            whileInView="animate"
            viewport={{ once: true }}
            className="text-[45px] font-semibold text-[#1a1a1a] leading-[1.1] mb-6"
          >
            Grow Your Savings with Better Rates
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            variants={fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
            className="text-[#4D4D4D] text-[17px] leading-relaxed mb-8 max-w-[95%]"
          >
            Access better savings rates through an easy to use savings app powered by on-chain financial.
          </motion.p>

          <motion.div
            initial={{ opacity: 1 }}
            className="mb-10 text-[18px] sm:text-[15px] flex items-center flex-wrap"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            <span className="text-[#6D5EED] font-semibold tracking-tight">
              BOUND savings rate
            </span>
            <span className="relative ml-2 font-semibold">
              <span
                style={{
                  background: "linear-gradient(90deg, #4facfe 0%, #6D5EED 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                18.83% APY
              </span>
              <span
                className="absolute left-0 -bottom-2 w-[110%] h-[10px]"
                style={{
                  background: "linear-gradient(90deg, #4facfe 0%, #6D5EED 100%)",
                  clipPath: "ellipse(50% 40% at 50% 40%)",
                  transform: "rotate(-2.5deg) translateX(-1%)",
                  filter: "blur(0.2px)",
                  opacity: 0.9,
                }}
              />
            </span>
          </motion.div>

          <div className="flex gap-3">
            <motion.button
              variants={buttonHover}
              whileHover={{ scale: 1.05, opacity: 0.9 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6D5EED] text-white font-bold py-2 px-6 rounded-xl shadow-md text-[15px] w-[140px]"
            >
              Start Earning
            </motion.button>
            <motion.button
              variants={buttonHover}
              whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#4D4D4D] border border-[#E5EAF2] font-semibold py-3 px-8 rounded-xl text-[16px] w-fit"
            >
              Docs
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobBound;