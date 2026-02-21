import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, imageReveal, textReveal, buttonHover } from "../../utils/animations";

function Aboutus() {
  return (
    <motion.section 
    id="mission"  
    className="w-full bg-white py-24 px-20 relative overflow-hidden"
      {...textReveal}
    >
      {/* Background Image Container */}
<div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
  <img
    src="/background-about.png"
    alt=""
    /* 1. Ensure object-cover is present to fill the space */
    className="w-full h-full object-cover object-center" 
    aria-hidden="true"
    style={{ 
      position: "absolute",
      /* 2. Reduced the negative bottom to ensure it's within the viewport */
      bottom: "-1px", 
      left: "-1px",
      width: "auto",
      /* 3. Changed height to ensure the image is tall enough to be seen */
      height: "auto",
      minHeight: "50%", 
      zIndex: -1
    }}
  />
</div>

      <div className="max-w-[1280px] mx-auto relative z-[2]">
        <div className="flex flex-row items-center justify-center gap-28">
          
          {/* Image Section - Locked to Left */}
          <motion.div 
            className="w-96 flex-shrink-0 order-1"
            {...slideInLeft}
          >
            <div className="relative w-full max-w-[384px] mx-0">
              <motion.div 
                className="w-full"
                {...imageReveal}
              >
                <img
                  className="w-full h-full object-cover"
                  src="/about-Image.png"
                  alt="About BOUND Protocol"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section - Locked to Right */}
          <motion.div 
            className="w-auto flex-1 max-w-[628px] order-2"
            {...slideInRight}
          >
            <div className="flex flex-col gap-9 text-left">
              {/* Heading */}
              <motion.h2
                className="text-[47px] font-semibold leading-[1] text-[#1a1a1a] tracking-[-1px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We make investing simple
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-[15px] font-normal leading-6 text-[#4D4D4D] max-w-[593px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Everything we do is built around simplicity. We designed a
                savings app that simplifies <br />investing and meets real needs.
                Behind that simplicity is a responsible approach to growing your
                savings passively, handled by experienced professionals.
              </motion.p>

              {/* CTA Button */}
              <motion.div 
                className="flex justify-start mt-2 w-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button
                  className="btn-base bg-[#6D5EED] text-white 
                  px-7 py-4 text-base font-bold rounded-xl w-auto"
                  {...buttonHover}
                >
                  Start Earning
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Aboutus;