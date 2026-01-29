import { motion } from "framer-motion";
import { textReveal, staggerContainer, staggerItem, imageReveal } from "../../utils/animations";

function Compare () {
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
      className="w-full bg-white py-12 px-5"
      {...textReveal}
    >
      <div className="max-w-full mx-auto">
        {/* 1. Header Section */}
        <motion.div 
          className="flex flex-col items-center gap-5 mb-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-[32px] font-semibold leading-[1.2] text-center text-[#1a1a1a] tracking-[-0.5px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Future of Savings is On-Chain
          </motion.h2>
          <motion.p 
            className="text-[16px] font-normal leading-6 text-center text-[#4D4D4D]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            There's a smarter way to grow your savings. On-chain financial markets unlocks access to higher rates than traditional savings products.
          </motion.p>
        </motion.div>

        {/* Comparison Section Container */}
        <div className="flex flex-col items-center justify-center gap-1">
          
          {/* 2. Center Image - MOVED UPWARDS using -mt-10 */}
          <motion.div 
            className="w-full flex-shrink-0 -mt-10 mb-0" 
            {...imageReveal}
          >
            <div className="w-full flex justify-center items-center">
              <motion.div className="w-full flex justify-center">
                <img 
                  src="/comparision-image.png" 
                  alt="Comparison" 
                  style={{ 
                    width: '125%', 
                    maxWidth: '500px', 
                    minHeight: '450px', 
                    objectFit: 'contain', 
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* 3. Solutions - MOVED UPWARDS using -mt-8 */}
          <motion.div 
            className="w-full flex flex-col items-start gap-6 -mt-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-[28px] font-semibold leading-[1.25] text-left text-[#1a1a1a] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Simple access to<br />on-chain returns
            </motion.h3>
            
            <motion.div 
              className="flex flex-col gap-3 w-full max-w-[320px]"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              {solutions.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4 justify-start"
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src="/checkbox-circle-fill.svg" 
                      alt="" 
                      className="w-7 h-7"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start gap-2">
                    <h4 className="text-[16px] font-semibold leading-6 text-left text-[#1a1a1a]">
                      {item.title}
                    </h4>
                    <p className="text-[12px] font-normal leading-4 text-left text-[#9CA3AF]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 4. Challenges - POSITION KEPT THE SAME */}
          <motion.div 
            className="w-full flex flex-col items-start gap-6 mt-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-[28px] font-semibold leading-[1.25] text-left text-[#1a1a1a] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The challenge of<br />on-chain access
            </motion.h3>
            
            <motion.div 
              className="flex flex-col gap-3 w-full max-w-[320px]"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              {challenges.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4 justify-start"
                  variants={staggerItem}
                  whileHover={{ x: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src="/close-circle-fill.svg" 
                      alt="" 
                      className="w-7 h-7"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start gap-2">
                    <h4 className="text-[16px] font-semibold leading-6 text-left text-[#1a1a1a]">
                      {item.title}
                    </h4>
                    <p className="text-[12px] font-normal leading-4 text-left text-[#9CA3AF]">
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

export default Compare;