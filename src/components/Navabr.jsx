import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo/narok-logo.png"

const sections = [
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* ---------------- AUTO HIDE ON SCROLL ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ---------------- ACTIVE LINK ON SCROLL ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 shadow"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
         <img src={logo} alt="Narok Electricals Logo" className="w-3/12 md:w-2/12" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium">
            {sections.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`transition ${
                    active === item.id
                      ? "text-accent font-semibold"
                      : "text-gray-700 hover:text-accent"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="tel:08137180348"
            className="hidden md:flex items-center gap-2 bg-accent px-4 py-2 rounded font-semibold border rounded-md"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-primary"
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE SLIDE-IN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="flex justify-between items-center px-6 py-4 shadow">
             <img src={logo} alt="Narok Electricals Logo" className="w-3/12 md:w-2/12" />

              <button
                onClick={() => setOpen(false)}
                className="text-2xl"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="flex flex-col space-y-6 px-6 py-10 text-lg font-medium">
              {sections.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`block ${
                      active === item.id
                        ? "text-accent font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              {/* Mobile CTA */}
              <a
                href="tel:08137180348"
                className="mt-10 flex items-center justify-center gap-2 bg-accent py-3 rounded font-semibold border rounded-md"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
