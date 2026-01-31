import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import img1 from "../assets/gallery/gallery1.jpg";
import img2 from "../assets/gallery/gallery2.jpg";
import img3 from "../assets/gallery/gallery3.jpg";
import img4 from "../assets/gallery/gallery4.jpg";
import img5 from "../assets/gallery/gallery5.jpg";
import img6 from "../assets/gallery/gallery6.jpg";
import img7 from "../assets/gallery/gallery7.jpg";
import img8 from "../assets/gallery/gallery8.jpg";
import img9 from "../assets/gallery/gallery9.jpg";
import img10 from "../assets/gallery/gallery10.jpg";
import img11 from "../assets/gallery/gallery11.jpg";
import img12 from "../assets/gallery/gallery12.jpg";
import img13 from "../assets/gallery/gallery13.jpg";
import img14 from "../assets/gallery/gallery14.jpg";
import img15 from "../assets/gallery/gallery15.jpg";
import img16 from "../assets/gallery/gallery16.jpg";
import img17 from "../assets/gallery/gallery17.jpg";
import img18 from "../assets/gallery/gallery18.jpg";
import img19 from "../assets/gallery/gallery19.jpg";
import img20 from "../assets/gallery/gallery20.jpg";
import img21 from "../assets/gallery/gallery21.jpg";
import img22 from "../assets/gallery/gallery22.jpg";
import img23 from "../assets/gallery/gallery23.jpg";
import img24 from "../assets/gallery/gallery24.jpg";
import img25 from "../assets/gallery/gallery25.jpg";
import img26 from "../assets/gallery/gallery26.jpg";
import img27 from "../assets/gallery/gallery27.jpg";
import img28 from "../assets/gallery/gallery28.jpg";
import img29 from "../assets/gallery/gallery29.jpg";
import img30 from "../assets/gallery/gallery30.jpg";
import img31 from "../assets/gallery/gallery31.jpg";
import img32 from "../assets/gallery/gallery32.jpg";
import img33 from "../assets/gallery/gallery33.jpg";
import img34 from "../assets/gallery/gallery34.jpg";
import img35 from "../assets/gallery/gallery35.jpg";
import img36 from "../assets/gallery/gallery36.jpg";
import img37 from "../assets/gallery/gallery37.jpg";
import img38 from "../assets/gallery/gallery38.jpg";

const rowOneImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img23, img24, img25, img26, img27, img28, img29, img38,
];

const rowTwoImages = [
  img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img32, img33, img34, img35, img36, img37, img30, img31,
];

const Gallery = () => {
  const controlsRow1 = useAnimation();
  const controlsRow2 = useAnimation();

  useEffect(() => {
    // Start animations on mount
    controlsRow1.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration: 70, ease: "linear" },
    });

    controlsRow2.start({
      x: ["-50%", "0%"],
      transition: { repeat: Infinity, duration: 70, ease: "linear" },
    });
  }, [controlsRow1, controlsRow2]);

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
            <motion.div
              className="flex gap-4 w-max cursor-pointer"
              animate={controlsRow1}
              onHoverStart={() => controlsRow1.stop()}
              onHoverEnd={() =>
                controlsRow1.start({
                  x: ["0%", "-50%"],
                  transition: { repeat: Infinity, duration: 70, ease: "linear" },
                })
              }
            >
              {[...rowOneImages, ...rowOneImages].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Electrical project"
                  className="h-56 w-80 object-cover rounded-xl shadow-md flex-shrink-0"
                  loading="lazy"
                />
              ))}
            </motion.div>
          </div>

          {/* Row 2 ← */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-4 w-max cursor-pointer"
              animate={controlsRow2}
              onHoverStart={() => controlsRow2.stop()}
              onHoverEnd={() =>
                controlsRow2.start({
                  x: ["-50%", "0%"],
                  transition: { repeat: Infinity, duration: 70, ease: "linear" },
                })
              }
            >
              {[...rowTwoImages, ...rowTwoImages].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Industrial installation"
                  className="h-56 w-80 object-cover rounded-xl shadow-md flex-shrink-0"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
