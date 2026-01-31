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

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error as user types
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

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
          setErrors({});
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent ${
                  errors.message ? "border-red-500" : ""
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm text-center mt-3 text-green-600">
                {status}
              </p>
            )}
          </form>
        </motion.div>

        {/* MAP + INFO */}
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
            />
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
    </section>
  );
};

export default Contact;
