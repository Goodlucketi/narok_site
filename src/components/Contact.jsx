import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "+2349066600060";
    const text = `Hello Narok Electrical,%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Message: ${formData.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-50"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Local SEO Schema */}
      <meta itemProp="name" content="Narok Electrical" />
      <meta
        itemProp="address"
        content="#34 Uyo Road, Nung Udoe, Ibesikpo Asutan, Akwa Ibom State, Nigeria"
      />
      <meta itemProp="telephone" content="+2348137180348" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-blue-900">
            Contact Narok Electrical Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Visit or contact Narok Electrical at Nung Udoe, Ibesikpo Asutan for
            professional electrical installations, CCTV systems, and
            maintenance services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form className="space-y-8 md:p-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Describe your project"
                required
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* Map + Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Clickable Map */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=34+Uyo+Road+Nung+Udoe+Ibesikpo+Asutan+Akwa+Ibom"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-[350px] rounded-xl overflow-hidden shadow-lg relative group"
            >
              <iframe
                title="Narok Electrical Akwa Ibom Location"
                src="https://www.google.com/maps?q=34+Uyo+Road+Nung+Udoe+Ibesikpo+Asutan+Akwa+Ibom&output=embed"
                className="w-full h-full pointer-events-none p-2"
                loading="lazy"
              ></iframe>
              <span className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition">
                Open in Google Maps
              </span>
            </a>

            {/* Address & Contact */}
            <div className="bg-white rounded-xl shadow p-8 space-y-4 text-blue-900">
              <div className="flex items-center gap-4 ">
                <FaMapMarkerAlt />
                <span>
                  #34 Uyo Road, Nung Udoe, Ibesikpo Asutan, Akwa Ibom State
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt />
                <span>+234 813 718 0348</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope />
                <span>info@narokelectrical.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
