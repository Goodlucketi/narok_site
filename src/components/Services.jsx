import { motion } from "framer-motion";
import {
  FaBolt,
  FaSolarPanel,
  FaSnowflake,
  FaCogs,
  FaVideo,
  FaFireExtinguisher,
  FaNetworkWired,
  FaIndustry,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Electrical Installation",
    description:
      "Professional electrical installations for residential, commercial, and industrial buildings.",
    icon: <FaBolt color="orange"/>,
  },
  {
    title: "Solar System Installation",
    description:
      "Reliable solar power solutions designed for efficiency and sustainability.",
    icon: <FaSolarPanel color="orange"/>,
  },
  {
    title: "Air Conditioner Installation",
    description:
      "Expert installation and maintenance of air conditioning systems.",
    icon: <FaSnowflake color="orange"/>,
  },
  {
    title: "Instrumentation & Controls",
    description:
      "Advanced industrial instrumentation and control system solutions.",
    icon: <FaCogs color="orange"/>,
  },
  {
    title: "CCTV Installation",
    description:
      "High-quality surveillance systems for homes, offices, and facilities.",
    icon: <FaVideo color="orange"/>,
  },
  {
    title: "Fire Alarm Installation",
    description:
      "Fire detection and alarm systems for enhanced safety.",
    icon: <FaFireExtinguisher color="orange"/>,
  },
  {
    title: "Intercom & Networking",
    description:
      "Structured cabling, intercom systems, and networking solutions.",
    icon: <FaNetworkWired color="orange"/>,
  },
  {
    title: "Industrial Machines Maintenance",
    description:
      "Installation and maintenance of industrial machines and systems.",
    icon: <FaIndustry color="orange"/>,
  },
  {
    title: "Electric Fencing",
    description:
      "Secure and reliable electric fencing installations.",
    icon: <FaShieldAlt color="orange"/>,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white bg-[url(../assets/bg5.jpg)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="mt-4 text-gray-600">
            We provide comprehensive electrical and electronic solutions
            tailored to meet your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-accent text-white text-2xl group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-block mt-4 text-accent font-semibold rounded-md shadow-md p-4 hover:bg-orange-300 duration-500 transition-all hover:text-white"
              >
                Request Service →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
