import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "figma:asset/27b1c8067b83313e00cc5f396fd6e57c79fcc931.png";
import img2 from "figma:asset/9561a4b44bbebeb76c415c8089217ad079d78da1.png";
import img3 from "figma:asset/9274daf4aab54bdf47425dafd0bfed5b2a079cd9.png";

const images = [
  { src: img1, alt: "Vestido Verde Menta", color: "#A8E6CF" },
  { src: img2, alt: "Vestido Vermelho", color: "#FF6B6B" },
  { src: img3, alt: "Vestido Amarelo", color: "#FFE66D" },
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45,
    }),
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-32 px-6 overflow-hidden">
      {/* Background Gradient Effect */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at center, ${images[currentIndex].color}, transparent)`,
        }}
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl md:text-6xl tracking-tight text-gray-900">
            Nossa Coleção
          </h2>
          <p className="text-xl text-gray-600">
            Elegância e estilo para cada momento
          </p>
        </motion.div>

        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          {/* Carousel Container */}
          <div className="relative w-full max-w-lg perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  rotateY: { duration: 0.7 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative group">
                  {/* Image Shadow Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-3xl blur-3xl"
                    style={{ backgroundColor: images[currentIndex].color }}
                  />

                  {/* Main Image */}
                  <motion.img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="relative w-full h-auto rounded-3xl shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Shine Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      x: [-200, 200],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 backdrop-blur-sm p-3 md:p-4 shadow-xl hover:bg-white hover:scale-110 transition-all group"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-gray-900 group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 backdrop-blur-sm p-3 md:p-4 shadow-xl hover:bg-white hover:scale-110 transition-all group"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-gray-900 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="mt-12 flex justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-gray-900"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center text-gray-600"
        >
          <span className="text-2xl">{currentIndex + 1}</span>
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-gray-400">{images.length}</span>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-200 blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-pink-200 blur-3xl -z-10"
      />
    </section>
  );
}
