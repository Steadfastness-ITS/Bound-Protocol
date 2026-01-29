import { motion } from "framer-motion";
import { textReveal, stepReveal, staggerContainer, staggerItem,
} from "../../utils/animations";

function mobStep() {
  const steps = [
    {
      number: 1,
      title: "Register",
      description: "Create an account and verify your Identity on the IOTIO platform.",
      icon: "/arrow-right-circle-fill-blue.svg",
      titleColor: "text-[#220DFF]",
      descriptionColor: "text-[#220DFF]",
    },
    {
      number: 2,
      title: "Choose Your Investment Porfolio",
      description: "Select a diversified asset-backed portfolio based on your goals.",
      icon: "/arrow-right-circle-fill.svg",
      titleColor: "text-[#282828]",
      descriptionColor: "text-[#4D4D4D]",
    },
    {
      number: 3,
      title: "Acquire IO INVESTMENT Tokens",
      description: "Purchase tokens supported by real assets to start your journey.",
      icon: "/arrow-right-circle-fill.svg",
      titleColor: "text-[#282828]",
      descriptionColor: "text-[#4D4D4D]",
    },
    {
      number: 4,
      title: "Monitor & Reinvest",
      description: "Track your assets and optimize returns with our intuitive dashboard.",
      icon: "/arrow-right-circle-fill.svg",
      titleColor: "text-[#282828]",
      descriptionColor: "text-[#4D4D4D]",
    },
  ];

  return (
    <motion.section className="relative w-full overflow-hidden" {...textReveal}>
      {/* Background Image - Adjusted for accurate UI scaling */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src="/stepperbackgroundmobile.svg"
          alt=""
          className="block lg:hidden w-full h-full object-cover object-center"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-[2] w-full flex justify-center items-center mb-5 px-5 py-10">
        <div className="max-w-[1280px] w-full overflow-hidden flex flex-col justify-start items-center gap-20">
          
          {/* Header Section - Mobile Styling */}
          <motion.div
            className="lg:hidden w-full flex flex-col justify-start items-center gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="w-full text-center text-[#282828] text-[28px]
               font-semibold font-sans leading-[33.6px] break-words"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              How to Grow Your <br />Wealth with BOUND App in 4 Easy Steps    
            </motion.h2>
            <motion.p
              className="w-full text-center text-[#A8A8A8] text-base 
              font-normal font-sans leading-6 break-words"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience a simpler, smarter way to earn better rates with DeFi
              powered professional returns.
            </motion.p>
          </motion.div>

          {/* Steps Content Section */}
          <div
             className="lg:hidden w-full max-w-[353px] px-5 py-10 
            bg-gradient-to-b from-[#F3F2FD] to-[#D6D3F8] rounded-[24px] 
            backdrop-blur-[50px] flex flex-col justify-start items-center gap-10"
          >
            {/* Image Section */}
            <div
              style={{
                width: "100%",
                height: "280px",
                position: "relative",
                overflow: "visible",
                marginBottom: "-70px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center", 
                  alignItems: "flex-start",
                }}
              >
                <img
                  style={{
                    width: "260px",
                    height: "531px",
                    top: "0px",
                    position: "absolute",
                    opacity: 0.7,
                    zIndex: 5,
                  }}
                  src="data:image/png;base64,
                  iVBORw0KGgoAAAANSUhEUgAAAQQAAAFZCAYAAAB+GFEjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGBSURBVHgB7dZBDQAgEAOwG/49jw8keKBV0bTNHEk6wLfWAFzvEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICfbBmdBwLURNRTAAAAAElFTkSuQmCC"
                  alt=""
                  aria-hidden="true"
                />
                <img
                  src="/step-image.png"
                  alt="BOUND App Steps"
                    style={{ 
                    width: "580px",      
                      height: "auto",      
                      minHeight: "600px",  
                      position: "absolute",
                      top: "-132px",        
                      zIndex: 10,
                      maxWidth: "none",
                      WebkitMaskImage: 'linear-gradient(to bottom, black 412px, transparent 412px)',
                      maskImage: 'linear-gradient(to bottom, black 340px, transparent 340px)',
                    }}
                />
                    <div
                    style={{
                    width: "238.20px",
                    height: "512.46px",
                    left: "11.60px",
                    top: "9.29px",
                    position: "absolute",
                  }}
                ></div>
              </div>
            </div>

            {/* Steps List */}
            <motion.div
              className="w-full flex flex-col justify-start items-start gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="w-full flex justify-start items-center gap-5"
                  variants={staggerItem}
                  {...stepReveal(index)}
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src={step.icon}
                      alt=""
                      className="w-7 h-7"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-start items-start gap-2">
                    <h3
                      className={`w-full ${step.titleColor} text-base font-semibold font-sans leading-[19.2px] break-words`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`w-full ${step.descriptionColor} text-sm font-normal font-sans leading-[21px] break-words`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default mobStep;