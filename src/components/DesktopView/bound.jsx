import { motion } from "framer-motion";
import { fadeInUp, textReveal, buttonHover, imageReveal } from "../../utils/animations";

const Bound = () => {
  const navLinks = [
    "HOME", "MISSION", "FEATURES", "HOW IT WORKS", "LEADERSHIP", "CONTACT US"
  ];

  return (
    <div className="hidden lg:block bg-white min-h-screen font-sans overflow-hidden">
      {/* 1. DESKTOP NAVIGATION */}
      <nav className="flex justify-between items-center px-16 py-8 max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 1 }}
          className="flex items-center"
        >
          <img 
            src="/boundprotocollogo.png" 
            alt="Bound Protocol" 
            className="h-12 w-auto" 
          />
        </motion.div>

        <div className="flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[12px] text-[#4D4D4D] font-medium hover:text-[#6D5EED] transition-colors tracking-widest"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* 2. HERO CONTENT SECTION - Adjusted justification to push video to the edge */}
      <section id="Home" className="relative max-w-[1440px] mx-auto px-16 flex items-center pt-32 pb-40 overflow-hidden">
        
         {/* Full Screen Video  */}
        <div className="absolute inset-0 z-0 w-full h-full flex justify-center items-center pointer-events-none">
          <video
            src="/herovideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[668px] object-cover border-0 outline-none"
            style={{ 
              border: "none", 
              outline: "none", 
              background: "transparent",
              mixBlendMode: "screen", // Keeps the video transparent over the white background
            }}
          />
        </div>

        {/* LEFT SIDE: Text and Actions */}
        <div className="w-fit flex flex-col justify-start shrink-0 relative z-10">
          <motion.h1 
            initial={{ opacity: 1, y: 0 }} 
            variants={textReveal}
            animate="animate"
            className="text-[74px] font-medium text-[#1a1a1a] leading-[1.05] mb-8 tracking-tight"
          >
            Grow Your Savings <br /> with Better Rates
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 1, y: 0 }}
            variants={fadeInUp}
            animate="animate"
            className="text-[#4D4D4D] text-[20px] leading-relaxed mb-10 max-w-[520px]"
          >
            Access better savings rates through an easy to use <br /> savings app powered by on-chain financial markets.
          </motion.p>

                    {/* Savings Rate Link/Text */}
          <motion.div 
            initial={{ opacity: 1 }}
            className="mb-12 text-[28px] sm:text-[25px] flex items-center flex-wrap"
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
        clipPath: "ellipse(50% 40% at 50% 50%)", 
        
        /* 3. Subtle rotation to match the 'hand-drawn' feel in the UI */
        transform: "rotate(-1.5deg) translateX(-2%)",
        
        filter: "blur(0.2px)",
        opacity: 0.9
      }}
    />
  </span>
</motion.div>

          {/* Action Buttons - Explicit animations added here */}
          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, opacity: 0.9 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-[#6D5EED] text-white font-semibold py-2.5 px-6 rounded-lg shadow-md text-[14px] w-fit"
            >
              Start Earning
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-white text-[#4D4D4D] border border-[#E5EAF2] font-semibold py-2.5 px-7 rounded-lg text-[14px] w-fit"
            >
              Docs
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bound;