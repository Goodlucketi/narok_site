import { motion } from "framer-motion";

const rowOneImages = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
];

const rowTwoImages = [
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Project <span className="text-accent">Gallery</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            A glimpse into our completed electrical and industrial projects.
          </p>
        </motion.div>

        {/* Sliders */}
        <div className="space-y-8">

          {/* Row 1 → */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 animate-slide-left">
              {[...rowOneImages, ...rowOneImages].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Electrical project"
                  className="h-56 w-80 object-cover rounded-xl shadow-md flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Row 2 ← */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 animate-slide-right">
              {[...rowTwoImages, ...rowTwoImages].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Industrial installation"
                  className="h-56 w-80 object-cover rounded-xl shadow-md flex-shrink-0"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
