import { motion } from "framer-motion";
import {
  textReveal,
  staggerContainer,
  staggerItem,
  buttonHover,
  fadeInUp,
} from "../../utils/animations";

function NewsLetter() {
  // Map company links to section IDs
  const getSectionId = (link) => {
    const sectionMap = {
      "About Us": "mission",
      "Features": "features",
      "How it Works": "how-it-works",
      "Our Teams": "leadership",
      "Blog": "home", // or wherever blog section is
    };
    return sectionMap[link] || "";
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    const sectionId = getSectionId(link);
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100; // Offset for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <motion.section
      id="contact-us"
      className="w-full bg-[#19174F] py-12 px-5 mx-auto"
      {...textReveal}
    >
      {/* Top Section: Newsletter Signup */}
      <motion.div
        className="w-[100%] flex flex-col justify-between items-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-full flex flex-col justify-start items-start gap-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className="self-stretch justify-start text-white text-[28px] sm:text-3xl font-semibold font-['Hanken_Grotesk'] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay Ahead in the Investment Game
          </motion.div>
          <motion.div
            className="self-stretch justify-start text-stone-300 text-[15px] font-small font-['Hanken_Grotesk'] leading-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Subscribe to our newsletter for exclusive insights, updates, and
            opportunities in decentralized finance.
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full flex flex-col justify-center items-start gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="w-full px-6 py-5 bg-white/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/25 flex justify-center items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-shrink-0">
              <img
                src="/envelope.svg"
                alt=""
                className="w-5 h-5"
                aria-hidden="true"
              />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent text-white placeholder-white/70 outline-none text-base font-normal font-['Hanken_Grotesk']"
            />
          </motion.div>
          <motion.div
            className="p-4 bg-white rounded-lg  inline-flex justify-start items-start gap-1 cursor-pointer w-start"
            {...buttonHover}
          >
            <div className="justify-start text-violet-800 text-[16px] font-semibold font-['Hanken_Grotesk'] leading-5">
              Subscribe Now
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Middle Section: Footer Links */}
      <motion.div
        className="w-[100%] flex flex-col justify-between items-start gap-8 mt-28"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-full flex flex-col justify-start items-start gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="w-full justify-start text-white/80 text-sm font-medium font-['Hanken_Grotesk'] leading-5">
              BOUND protocol combines blockchain  <br /> innovation with traditional finance to <br />
              provide secure, scalable, and transparent <br />investment solutions.
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full flex flex-col justify-start items-start gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="w-full flex flex-row justify-start items-start gap-5">
            <div className="flex flex-col justify-start items-start gap-4 flex-1">
              <div className="justify-start text-stone-300 text-base sm:text-lg font-semibold font-['Hanken_Grotesk']">
                COMPANY
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <a
                  href="#mission"
                  onClick={(e) => handleLinkClick(e, "About Us")}
                  id="mission"
                  className="justify-start text-white text-[14px] font-medium font-['Hanken_Grotesk'] cursor-pointer"
                >
                  About Us
                </a>
                <a
                  href="#features"
                  onClick={(e) => handleLinkClick(e, "Features")}
                  id="features"
                  className="justify-start text-white text-[14px] font-medium font-['Hanken_Grotesk'] cursor-pointer"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleLinkClick(e, "How it Works")}
                  id="how-it-works"
                  className="justify-start text-white text-[14px] font-medium font-['Hanken_Grotesk'] cursor-pointer"
                >
                  How it Works
                </a>
                <a
                  href="#leadership"
                  onClick={(e) => handleLinkClick(e, "Our Teams")}
                  id="leadership"
                  className="justify-start text-white text-[14px] font-medium font-['Hanken_Grotesk'] cursor-pointer"
                >
                  Our Teams
                </a>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, "Blog")}
                  id="home"
                  className="justify-start text-white text-[14px] font-medium font-['Hanken_Grotesk'] cursor-pointer"
                >
                  Blog
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2.5 flex-1">
              <div className="justify-start text-stone-300 text-base sm:text-lg font-semibold font-['Hanken_Grotesk']">
                CONTACT US
              </div>
              <div className="flex flex-col justify-start items-start gap-3 sm:gap-4">
                <div className="justify-start text-white text-[14px] font-medium font-['Hanken_Grotesk']">
                  contact@boundprotocol.com
                </div>
                <div className="justify-start text-white text-[14px] font-medium font-['Hanken_Grotesk']">
                  (123) 456-7890
                </div>
                <div className="self-stretch justify-start text-white text-[14px] font-medium font-['Hanken_Grotesk']">
                  1234 Investment Lane,<br /> Blockchain City, Future State 56789
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-stone-300 text-base sm:text-lg font-semibold font-['Hanken_Grotesk']">
              FOLLOW US
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-3">
              <div className="self-stretch justify-start text-white text-[16px] font-small font-['Hanken_Grotesk']">
                Stay connected through <br />our social channels:
              </div>
              <div className="inline-flex justify-start items-center gap-2">
                <div className="p-2 bg-white rounded-[999px] flex justify-center items-center gap-1">
                  <div className="relative">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7447 1.42773H16.2748L10.7473 7.74535L17.25 16.3422H12.1584L8.17053 11.1283L3.60746 16.3422H1.07582L6.98808 9.58481L0.75 1.42773H5.97083L9.57555 6.19348L13.7447 1.42773ZM12.8567 14.8278H14.2587L5.20905 2.86258H3.7046L12.8567 14.8278Z"
                        fill="#0A091F"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Section: Copyright */}
      <motion.div
        className="w-[100%] flex flex-col-reverse justify-between items-center gap-4 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="justify-start text-stone-300 text-[15px] font-medium font-['Hanken_Grotesk'] text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          © 2026 BOUND Protocol. All Rights Reserved.
        </motion.div>
        <motion.div
          className="flex flex-row sm:flex-row justify-center items-center sm:items-start gap-14 sm:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="justify-start text-stone-300 text-[14px] font-medium font-['Hanken_Grotesk']"
            variants={staggerItem}
          >
            Terms of Service
          </motion.div>
          <motion.div
            className="justify-center text-stone-300 text-[14px] font-medium font-['Hanken_Grotesk']"
            variants={staggerItem}
          >
            Privacy Policy{" "}
          </motion.div>
          <motion.div
            className="justify-end text-stone-300 text-[14px] font-medium font-['Hanken_Grotesk']"
            variants={staggerItem}
          >
            Cookies
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default NewsLetter;