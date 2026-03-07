import { motion } from "framer-motion";
import { textReveal } from "../../utils/animations";

function Partners() {
  // Top row logos - duplicate for seamless loop
  const topRowLogos = [
    { name: "Aave", src: "/partners/Aave.svg", alt: "Aave" },
    { name: "Sumsub", src: "/partners/Sumsub.svg", alt: "Sumsub" },
    { name: "Uniswap", src: "/partners/Uniswap.svg", alt: "UNISWAP" },
    { name: "Microsoft", src: "/partners/Microsoft.svg", alt: "Microsoft" },
    { name: "Avantgarde", src: "/partners/Avantgarde.svg", alt: "AVANTGARDE" },
    { name: "Yard Hub", src: "/partners/yard hub.svg", alt: "ya" },
  ];

  // middle row logos - duplicate for seamless loop
  const middleRowLogos = [
    { name: "Goldfinch", src: "/partners/Goldfinch.svg", alt: "dfinch" },
    { name: "Enzyme", src: "/partners/Enzyme.svg", alt: "enzyme" },
    { name: "LI.FI", src: "/partners/LI.FI.svg", alt: "LI.FI" },
    { name: "LayerZero", src: "/partners/LayerZero.svg", alt: "Layer Zero." },
    { name: "Ondo Finance", src: "/partners/Ondo finance.svg", alt: "Ondo" },
    { name: "Pendle", src: "/partners/Pendle.svg", alt: "PENDLE" },
    { name: "Morpho", src: "/partners/Morpho logo.svg", alt: "M" },
  ];

  // Bottom row logos - duplicate for seamless loop
  const bottomRowLogos = [
    { name: "Aave", src: "/partners/Aave.svg", alt: "Aave" },
    { name: "Sumsub", src: "/partners/Sumsub.svg", alt: "Sumsub" },
    { name: "Uniswap", src: "/partners/Uniswap.svg", alt: "UNISWAP" },
    { name: "Microsoft", src: "/partners/Microsoft.svg", alt: "Microsoft" },
    { name: "Avantgarde", src: "/partners/Avantgarde.svg", alt: "AVANTGARDE" },
    { name: "Yard Hub", src: "/partners/yard hub.svg", alt: "ya" },
  ];

  // Duplicate arrays multiple times for seamless infinite scroll
  const topRowDuplicated = [...topRowLogos, ...topRowLogos, ...topRowLogos];
  const middleRowDuplicated = [...middleRowLogos, ...middleRowLogos, ...middleRowLogos];
  const bottomRowDuplicated = [...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos];

  return (
    <motion.section
      className="w-full bg-white py-10 px-8 overflow-x-hidden"
      {...textReveal}
    >
      <div className="mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-[13px] text-[#A8A8A8] font-semibold leading-[1.2] text-center tracking-[-0.5px] bg-clip-text bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a00]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
        </motion.div>

        {/* Logos Scrolling Container */}
        <div className="flex flex-col gap-4">
          
          {/* Top Row - Moves right to leftt */}
          <div className="overflow-hidden relative w-full">
            <div className="flex items-center gap-8 animate-scroll-left">
              {topRowDuplicated.map((logo, index) => (
                <div
                  key={`top-${logo.name}-${index}`}
                  className="flex items-center justify-center flex-shrink-0 px-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain"
                    style={{ height: "20px", width: "70px", maxWidth: "none", display: "block" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Middle Row - Moves leftt to right */}
          <div className="overflow-hidden relative w-full">
            <div className="flex items-center gap-8 animate-scroll-right">
              {middleRowDuplicated.map((logo, index) => (
                <div
                  key={`middle-${logo.name}-${index}`}
                  className="flex items-center justify-center flex-shrink-0 px-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain"
                    style={{ height: "20px", width: "70px", maxWidth: "none", display: "block" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Moves right to left */}
          <div className="overflow-hidden relative w-full">
            <div className="flex items-center gap-8 animate-scroll-left">
              {bottomRowDuplicated.map((logo, index) => (
                <div
                  key={`bottom-${logo.name}-${index}`}
                  className="flex items-center justify-center flex-shrink-0 px-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain"
                    style={{ height: "20px", width: "70px", maxWidth: "none", display: "block" }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default Partners;