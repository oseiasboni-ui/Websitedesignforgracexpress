import { motion } from "motion/react";
import { Zap, Shield, Award } from "lucide-react";
import { useInView } from "./hooks/useInView";

const features = [
  {
    icon: Zap,
    title: "Rapidez",
    description: "Entregas expressas com os menores prazos do mercado",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Proteção total da sua carga do início ao fim",
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Excelência em serviço reconhecida nacionalmente",
  },
];

export function Features() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="bg-black py-32 px-6 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl md:text-5xl tracking-tight">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-gray-400">
            O que nos torna únicos no mercado
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="mb-6 inline-flex rounded-full bg-white/10 p-6 backdrop-blur-sm">
                <feature.icon className="h-10 w-10" />
              </div>
              <h3 className="mb-4 text-2xl">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
