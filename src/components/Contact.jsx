import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-50"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Local SEO */}
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
          <h2 className="text-3xl font-bold text-gray-900">
            Contact Narok Electrical
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Send us a message and we’ll respond promptly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition"
              >
                Send Message
              </button>

              {status && (
                <p className="text-sm text-center text-green-600 mt-3">
                  {status}
                </p>
              )}
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
            <a
              href="https://www.google.com/maps/search/?api=1&query=34+Uyo+Road+Nung+Udoe+Ibesikpo+Asutan+Akwa+Ibom"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-[350px] rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                title="Narok Electrical Location"
                src="https://www.google.com/maps?q=34+Uyo+Road+Nung+Udoe+Ibesikpo+Asutan+Akwa+Ibom&output=embed"
                className="w-full h-full pointer-events-none"
                loading="lazy"
              ></iframe>
            </a>

            <div className="bg-white rounded-xl shadow p-6 space-y-4">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-accent" />
                <span>#34 Uyo Road, Nung Udoe, Ibesikpo Asutan</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-accent" />
                <span>+234 813 718 0348</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-accent" />
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
