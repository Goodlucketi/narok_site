import { motion } from "framer-motion";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const team = [
  {
    name: "Mr. Nsidibe Bassey",
    role: "Director",
    image: "/images/team/director.jpg",
    socials: {
      whatsapp: "https://wa.me/2348137180348",
      linkedin: "#",
    },
  },
  {
    name: "Mr. Nsikak Edem",
    role: "Operations Manager",
    image: "/images/team/manager.jpg",
    socials: {
      whatsapp: "https://wa.me/2348137180348",
      linkedin: "#",
    },
  },
  {
    name: "Mr. Samuel Oduene",
    role: "Site Supervisor",
    image: "/images/team/supervisor.jpg",
    socials: {
      whatsapp: "https://wa.me/2348137180348",
      linkedin: "#",
    },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Meet Our <span className="text-accent">Team</span>
          </h2>
          <p className="mt-3 text-gray-200 max-w-xl mx-auto">
            The professionals guiding every successful project.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Image */}
              <div className="relative mx-auto h-52 w-52 rounded-full overflow-hidden shadow-lg border-4 border-gray-100 group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a
                    href={member.socials.whatsapp}
                    className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:scale-110 transition"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-200">
                  {member.name}
                </h3>
                <p className="text-gray-200 text-sm">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
