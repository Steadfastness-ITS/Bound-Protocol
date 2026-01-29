import { motion } from "framer-motion";
import { textReveal, staggerContainer, staggerItem, cardHover, imageReveal } from "../../utils/animations";

function Comparison() {
  const challenges = [
    {
      title: "Too Complicated",
      description: "Steep learning curves and complex tools make on-chain investing overwhelming.",
      icon: "red"
    },
    {
      title: "Risky Without Expertise",
      description: "Accessing on-chain financial products safely requires deep expertise.",
      icon: "red"
    },
    {
      title: "Takes Too Much Time",
      description: "Managing strategies, monitoring rates, and rebalancing require ongoing involvement.",
      icon: "red"
    }
  ];

  const solutions = [
    {
      title: "Easy Access",
      description: "One-tap access to a diversified basket of professionally managed on-chain strategies.",
      icon: "green"
    },
    {
      title: "Passive Exposure",
      description: "A professional, end-to-end approach designed to deliver passive returns without effort.",
      icon: "green"
    },
    {
      title: "You Stay in Control",
      description: "Enjoy full transparency and complete control over your funds at all times.",
      icon: "green"
    }
  ];

  return (
    <motion.section 
      /* Increased padding to px-20 so text isn't too close to page edges */
      className="w-full bg-white py-20 px-20"
      {...textReveal}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <motion.div 
          className="flex flex-col items-center gap-3 mb-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-[57px] font-semibold leading-[1.2] text-center text-[#1a1a1a] tracking-[-1px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Future of Savings is On-Chain
          </motion.h2>
          <motion.p 
            className="text-[19px] font-normal leading-6 text-center text-[#4D4D4D] max-w-[824px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            There's a smarter way to grow your savings.<br/> On-chain financial markets unlocks access to higher rates than traditional savings products.
          </motion.p>
        </motion.div>

        {/* Comparison Section */}
        <div className="relative w-full min-h-[660px] flex flex-row items-center justify-center">
          
          {/* Left Side - Challenges - Width set to w-[320px] to pull closer to image */}
          <motion.div 
            className="w-[320px] flex flex-col items-end gap-12 order-1 -mr-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-[37px] font-semibold leading-[1.25] text-right text-[#1a1a1a]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The challenge of<br />on-chain access
            </motion.h3>
            
            <motion.div 
              className="flex flex-col gap-12 w-full"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              {challenges.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 justify-end"
                  variants={staggerItem}
                  whileHover={{ x: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-1 flex flex-col items-end gap-2 order-1">
                    <h4 className="text-[18px] font-semibold leading-3 text-right text-[#1a1a1a]">
                      {item.title}
                    </h4>
                    <p className="text-[14px] font-normal leading-4 text-right text-[#9CA3AF]">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-8 h-14 flex-shrink-0 flex items-center justify-center order-2">
                    <img 
                      src="/close-circle-fill.svg" 
                      alt="" 
                      className="w-7 h-7"
                      aria-hidden="true"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Center Image - Fixed Middle Position */}
          <motion.div 
            className="flex-shrink-0 order-2 mt-20 z-10"
            {...imageReveal}
          >
            <div className="w-full max-w-[610px] mx-auto">
              <img 
                src="/comparision-image.png" 
                alt="Comparison" 
                style={{ height: "560px", width: "auto" }}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right Side - Solutions - Width set to w-[320px] to pull closer to image */}
          <motion.div 
            className="w-[320px] flex flex-col items-start gap-12 order-3 -ml-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-[37px] font-semibold leading-[1.25] text-left text-[#1a1a1a]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Simple access to<br />on-chain returns
            </motion.h3>
            
            <motion.div 
              className="flex flex-col gap-12 w-full"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              {solutions.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 justify-start"
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-16 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src="/checkbox-circle-fill.svg" 
                      alt="" 
                      className="w-7 h-7"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start gap-2">
                    <h4 className="text-[18px] font-semibold leading-3 text-left text-[#1a1a1a]">
                      {item.title}
                    </h4>
                    <p className="text-[14px] font-normal leading-4 text-left text-[#9CA3AF]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Comparison;