import { motion } from "framer-motion";
import {
  textReveal,
  stepReveal,
  staggerContainer,
  staggerItem,
} from "../../utils/animations";

function Step() {
  const steps = [
    {
      number: 1,
      title: "Fund Your Account",
      description: "Top up your account using your card or crypto wallet.",
      icon: "/arrow-right-circle-fill-blue.svg",
      titleColor: "text-[#220DFF]",
      descriptionColor: "text-[#220DFF]",
    },
    {
      number: 2,
      title: "Deposit into Savings",
      description: "Move your balance into your savings vault with one tap.",
      icon: "/arrow-right-circle-fill.svg",
      titleColor: "text-[#282828]",
      descriptionColor: "text-[#4D4D4D]",
    },
    {
      number: 3,
      title: "Activate Your Savings",
      description: "Turn on yield and let your money work automatically.",
      icon: "/arrow-right-circle-fill.svg",
      titleColor: "text-[#282828]",
      descriptionColor: "text-[#4D4D4D]",
    },
    {
      number: 4,
      title: "Watch Your Balance Grow",
      description: "Your yield compounds automatically. No complexity. Just growing wealth, on autopilot.",
      
      icon: "/arrow-right-circle-fill.svg",
      titleColor: "text-[#282828]",
      descriptionColor: "text-[#4D4D4D]",
    },
  ];

  return (
    <motion.section id="how-it-works" className="relative w-full overflow-hidden" {...textReveal}>
      {/* Background Images - Desktop Only */}
      {/* Stepper Background Image */}
      i
<div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
  <img
    src="/stepperbackground.png"
    alt=""
    className="w-full h-full object-cover object-top"
    aria-hidden="true"
    style={{ 
      position: "absolute",
      /* Moves it UPWARDS as requested */
      top: "-520px", 
      /* Moves it slightly LEFT to give it more breathing room */
      left: "-1%", 
      /* Ensures the image is large enough to cover the shift */
      width: "105%", 
      height: "auto",
      minHeight: "140%", 
      opacity: 0.5,
      zIndex: -1
    }}
  />
</div>

      <div className="relative z-[2] w-full flex justify-center items-center mb-5 px-20 py-[100px]">
        <div className="max-w-[1280px] w-full overflow-hidden flex flex-col justify-start items-center gap-40">
          
          {/* Header Section - Desktop Version */}
          <motion.div
            className="w-full flex flex-col justify-start items-center gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="w-full text-center text-[#282828] text-[48px] font-semibold font-sans leading-[57.6px] break-words"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              How to Grow Your Wealth with
              <br />
              BOUND App in 4 Easy Steps
            </motion.h2>
            <motion.p
              className="w-full max-w-[820px] text-center text-[#6B6767] text-lg font-normal font-sans leading-[27px] break-words"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience a simpler, smarter way to earn better rates with
              On-Chain powered professional returns.
            </motion.p>
          </motion.div>

          {/* Desktop Steps Content Section */}
          <div
            className="w-full max-w-[1060px] px-12 py-10 bg-gradient-to-b from-[#F3F2FD] to-[#D6D3F8] rounded-[32px] backdrop-blur-[50px] flex flex-row justify-between items-center gap-0"
          >
            {/* Image Section */}
            <div
              style={{
                width: "498px",
                height: "380px",
                position: "relative",
              }}
              className="flex-shrink-0 order-1 mx-0"
            >
              <div
                style={{
                  width: "397.99px",
                  height: "390.99px",
                  left: "0px",
                  top: "0px",
                  position: "absolute",
                  background: "#9387ec",
                  borderRadius: "9999px",
                }}
              ></div>

              <div
                style={{
                  width: "777.26px",
                  height: "810px",
                  left: "0px",
                  top: "-123.24px",
                  position: "absolute",
                }}
              >
                <img
                  style={{
                    width: "398.26px",
                    height: "814px",
                    left: "0px",
                    top: "0px",
                    position: "absolute",
                    opacity: 0.7,
                  }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY8AAAIyCAYAAAAzJkbRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOaSURBVHgB7dnLDcAgEEPBdfrveXPOBwFnZpp4spzuTr0k6QKAgasAYNMnHlYHADOPeAgHAEv+Pg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5xA7tmCQourdEeAAAAAElFTkSuQmCC"
                  alt=""
                  aria-hidden="true"
                />
                <img
                  style={{
                    width: "92%",
                    height: "830px",
                    left: "-159px",
                    top: "-76.76px",
                    position: "absolute",
                  }}
                  src="/step-image.png"
                  alt="BOUND App Steps"
                />
                <div
                  style={{
                    width: "364.87px",
                    height: "785.58px",
                    left: "0px",
                    top: "242.6px",
                    position: "absolute",
                  }}
                ></div>
              </div>
            </div>

            {/* Steps List */}
            <motion.div
              className="w-[450px] flex flex-col justify-start items-start gap-6 order-2"
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
                  whileHover={{ x: 5 }}
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src={step.icon}
                      alt=""
                      className="w-8 h-8"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-start items-start gap-1">
                    <h3
                      className={`w-full ${step.titleColor} text-lg sm:text-xl font-semibold font-sans leading-6 break-words`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`w-full ${step.descriptionColor} text-base font-normal font-sans leading-6 break-words`}
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

export default Step;