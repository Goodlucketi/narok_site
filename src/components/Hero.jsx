import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../assets/bg1.webp"
import hero2 from "../assets/bg2.webp"
import hero3 from "../assets/bg3.webp"

const slides = [
  {
    image: hero1 ,
    title: "Reliable Electrical Solutions",
    subtitle: "Residential • Commercial • Industrial",
    cta: "Get a Free Quote",
  },
  {
    image: hero2,
    title: "CCTV & Security Systems",
    subtitle: "Protect your property with modern surveillance",
    cta: "Secure Your Space",
  },
  {
    image: hero3,
    title: "Industrial Installations & Maintenance",
    subtitle: "Instrumentation, controls & heavy-duty systems",
    cta: "Talk to Experts",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-xl text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {slides[index].title}
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                {slides[index].subtitle}
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="#contact"
                  className="bg-accent px-6 py-3 rounded font-semibold border border-white"
                >
                  {slides[index].cta}
                </a>

                <a
                  href="https://wa.me/+2348137180348"
                  className="border border-white px-6 py-3 rounded font-semibold"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index ? "bg-accent" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
