import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/Logo/narok_logo.png"


const Footer = () => {
  return (
    <footer id="footer" className="bg-navy text-gray-300 pt-16 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
            <img src={logo} alt="Narok Electricals Logo" className="w-3/12 md:w-8/12" />
            <p className="mt-4 text-sm leading-relaxed">
                Trusted electrical installations, CCTV systems, industrial wiring,
                and maintenance services delivered with precision.
            </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-accent transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-accent" />
              Nung Udoe, Ibesikpo, Akwa Ibom State, Nigeria
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-accent" />
              +234 813 718 0348
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-accent" />
              info@narokelectrical.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/10 hover:bg-accent transition"
                >
                  <Icon className="text-white" />
                </a>
              )
            )}
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">
            Subscribe to Newsletter
          </h4>
          <p className="text-sm mb-4">
            Get updates on our services, projects, and offers.
          </p>

          <form className="flex items-center bg-white/10 rounded-lg overflow-hidden">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 outline-none flex-1"
            />
            <button
              type="submit"
              className="bg-accent px-4 py-3 hover:bg-accent/90 transition"
              aria-label="Subscribe"
            >
              <FaPaperPlane className="text-white" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Narok Electrical. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
