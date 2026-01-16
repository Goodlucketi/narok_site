import { motion } from "framer-motion";
import hero4 from "../assets/bg4.webp"


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={hero4}
            alt="Narok Electrical team at work"
            className="rounded-xl shadow-lg w-full object-cover shadow-xl"
          />
          {/* <div className="absolute inset-0 rounded-xl ring-2 ring-accent/20" /> */}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            About <span className="text-accent">Narok Electrical</span>
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Narok Electrical & Electronic Services is a trusted provider of
            electrical, electronic, and industrial solutions. We deliver
            high-quality installations, maintenance, and consultancy services
            across residential, commercial, and industrial sectors.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Our team of skilled professionals is committed to safety,
            reliability, and innovation — ensuring every project meets industry
            standards and exceeds client expectations.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              "Certified Professionals",
              "Quality Workmanship",
              "Modern Technology",
              "Reliable Support",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-gray-800"
              >
                <span className="h-2 w-2 bg-accent rounded-full" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block mt-8 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
