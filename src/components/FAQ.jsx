import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What electrical services do you offer?",
    answer:
      "We offer electrical installations, solar systems, CCTV installation, fire alarms, industrial instrumentation, maintenance, and general electrical consultancy.",
  },
  {
    question: "Do you handle residential and industrial projects?",
    answer:
      "Yes. We work across residential, commercial, and industrial projects, ensuring each meets safety and quality standards.",
  },
  {
    question: "Are your technicians certified?",
    answer:
      "Absolutely. Our technicians are trained, certified, and experienced in handling modern electrical systems.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can contact us via the contact form, call our phone number, or use the WhatsApp chat button on the website.",
  },
  {
    question: "Do you offer after-service support?",
    answer:
      "Yes. We provide maintenance and after-service support to ensure long-term reliability of our installations.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="mt-3 text-gray-600">
            Quick answers to common questions about our services and processes.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transition ${
                    activeIndex === i ? "rotate-180 text-accent" : "text-gray-400"
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
