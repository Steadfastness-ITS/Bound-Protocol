import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, imageReveal, textReveal, buttonHover } from "../../utils/animations";

const MobBound = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Mission", id: "mission" },
    { name: "Features", id: "features" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Leadership", id: "leadership" },
    { name: "Contact Us", id: "contact-us" },
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-white min-h-screen font-sans overflow-hidden relative">
      {/* 1. HEADER - Integrated Hamburger Logic */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-white z-[1002] h-[70px] border-b border-gray-50">
        <img 
          src="/boundprotocollogo.png" 
          alt="Bound Protocol" 
          className="h-8 w-auto" 
        />
        
        {/* Animated Hamburger Icon */}
        <button
          type="button"
          className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer relative"
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

      {/* 2. MOBILE MENU OVERLAY & DRAWER */}
      <div
        className={`fixed inset-0 bg-black/50 z-[1000] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

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
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium uppercase no-underline transition-colors duration-300
              py-4 border-b border-[#f0f0f0] last:border-b-0 text-[#4D4D4D] hover:text-[#6D5EED]"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* 3. HERO SECTION - Original Video Layout */}
      <section id="home" className="px-4 pt-24 pb-16">
        <div className="relative flex justify-center items-center mb-12">
          <video
            src="/herovideomobile.mp4"
            poster="/backgroundmobile.png"
            autoPlay
            loop
            muted
            playsInline
            className="block lg:hidden max-h-[340px] sm:max-h-[400px] md:max-h-[540px] w-full object-contain mx-auto border-0 outline-none scale-125"
            style={{ border: "none", outline: "none" }}
          />
        </div>

        {/* Text Content */}
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

          {/* Savings Rate Link/Text */}
          <motion.div 
          initial={{ opacity: 1 }}
          className="mb-10 text-[18px] sm:text-[15px] flex items-center flex-wrap"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }} // Inter is the closest match to the UI shape
>
          <span className="text-[#6D5EED] font-semibold tracking-tight">
            BOUND savings rate 
          </span>
  
          <span className="relative ml-2 font-semibold">
        {/* Text Gradient: Bright blue on left, Darker violet on right */}
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

          {/* THE FIX: The Organic Tapered Underline */}
          <span 
            className="absolute left-0 -bottom-2 w-[110%] h-[10px]"
            style={{
              /* 1. The Gradient: Bright on left, Dark on right */
              background: "linear-gradient(90deg, #4facfe 0%, #6D5EED 100%)",
              
              /* 2. THE CURVE: This specific mask creates the 'smile' dip and tapered ends */
              clipPath: "ellipse(50% 40% at 50% 40%)", 
              
              /* 3. Subtle rotation to match the 'hand-drawn' feel in the UI */
              transform: "rotate(-2.5deg) translateX(-1%)",
              
              filter: "blur(0.2px)",
              opacity: 0.9
            }}
    />
  </span>
</motion.div>

          {/* Action Buttons */}
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