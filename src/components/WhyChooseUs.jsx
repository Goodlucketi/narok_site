import { motion } from "framer-motion";
import {
  FaUserCog,
  FaCheckCircle,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";

const points = [
  {
    title: "Skilled Professionals",
    icon: <FaUserCog />,
    color: "text-blue-600",
    desc: "Certified technicians with hands-on industry experience.",
  },
  {
    title: "High-Quality Standards",
    icon: <FaCheckCircle />,
    color: "text-green-600",
    desc: "Every project follows safety and quality best practices.",
  },
  {
    title: "Timely Project Delivery",
    icon: <FaClock />,
    color: "text-yellow-500",
    desc: "We respect timelines and deliver as promised.",
  },
  {
    title: "Affordable Rates",
    icon: <FaMoneyBillWave />,
    color: "text-purple-600",
    desc: "Quality service at competitive and transparent pricing.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why <span className="text-accent">Choose Us</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            We deliver dependable electrical solutions backed by experience,
            quality, and professionalism.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-gray-100 group-hover:bg-gray-200 transition">
                <span className={`text-2xl ${item.color}`}>
                  {item.icon}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
