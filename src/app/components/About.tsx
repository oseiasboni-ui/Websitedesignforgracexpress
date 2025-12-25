import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="relative bg-white py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="mb-8 text-4xl md:text-6xl tracking-tight text-gray-900">
            Entregamos mais que pacotes.
          </h2>
          <p className="mx-auto max-w-3xl text-xl md:text-2xl text-gray-600 leading-relaxed">
            A GracExpress é referência em soluções logísticas modernas,
            oferecendo entregas expressas com tecnologia de ponta e
            rastreamento em tempo real. Nossa missão é conectar pessoas e
            empresas com rapidez, segurança e confiança absoluta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
