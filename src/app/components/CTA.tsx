import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function CTA() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="bg-white py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="mb-8 text-4xl md:text-6xl tracking-tight text-gray-900">
          Pronto para começar?
        </h2>
        <p className="mb-12 text-xl md:text-2xl text-gray-600">
          Entre em contato e descubra como podemos transformar sua logística
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group flex items-center gap-2 rounded-full bg-black px-8 py-4 text-lg text-white transition-all hover:scale-105 hover:shadow-2xl">
            Solicitar Orçamento
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="rounded-full border-2 border-gray-300 px-8 py-4 text-lg text-gray-900 transition-all hover:border-black hover:bg-gray-50">
            Falar com Especialista
          </button>
        </div>
      </motion.div>
    </section>
  );
}
