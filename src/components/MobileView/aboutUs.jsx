import { motion } from "framer-motion";
import { slideInLeft, slideInRight, imageReveal, textReveal, buttonHover } from "../../utils/animations";

const AboutUs = () => {
  return (
    <motion.section 
      className="w-full bg-white py-12 px-5 relative overflow-hidden"
      {...textReveal}
    >
      <div className="max-w-[1280px] mx-auto relative z-[2]">
        {/* Changed to items-center to match the centered UI in s.jpeg */}
        <div className="flex flex-col items-center justify-start gap-6">
          
          {/* Image Section - This now mimics s.jpeg exactly */}
          <motion.div 
            className="w-full flex-shrink-0 order-1" 
            {...slideInLeft}
          >
            <div className="w-full flex justify-center items-center">
            <motion.div 
              className="w-[100%] flex justify-center"
              {...imageReveal}
            >
              <img
                src="/about-Image.png"
                alt="About BOUND Protocol"
                style={{ 
                  width: '90%', 
                  maxWidth: '450px', 
                  height: 'auto', 
                  minHeight: '400px',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                  
                }}
              />
            </motion.div>
          </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="w-full max-w-[628px] order-2"
            {...slideInRight}
          >
            <div className="flex flex-col gap-6 text-left">
              <motion.h2
                className="text-[40px] font-semibold leading-[1.1] text-[#1a1a1a] tracking-[-0.5px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We make investing simple
              </motion.h2>

              <motion.p
                className="text-[16px] font-normal leading-[1.5] text-[#4D4D4D]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Everything we do is built around simplicity. We designed a
                savings app that simplifies investing and meets real needs.
                Behind that simplicity is a responsible approach to growing your
                savings passively, handled by experienced professionals.
              </motion.p>

              <motion.div 
                className="flex justify-start mt-2 w-full"
                {...buttonHover}
              >
                <button className="bg-[#6D5EED] text-white px-6 py-3.5 text-base font-bold rounded-xl w-full">
                  Start Earning
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutUs;