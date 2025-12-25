import { motion } from "motion/react";
import { Package, Truck, Globe, Clock } from "lucide-react";
import { useInView } from "./hooks/useInView";

const services = [
  {
    icon: Truck,
    title: "Entrega Express",
    description: "Entregas no mesmo dia em regiões metropolitanas",
  },
  {
    icon: Package,
    title: "Logística Integrada",
    description: "Soluções completas de armazenamento e distribuição",
  },
  {
    icon: Globe,
    title: "Alcance Nacional",
    description: "Cobertura em todo território brasileiro",
  },
  {
    icon: Clock,
    title: "Rastreamento 24/7",
    description: "Acompanhe sua carga em tempo real",
  },
];

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="bg-gray-50 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl md:text-5xl tracking-tight text-gray-900">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600">
            Soluções personalizadas para cada necessidade
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-gray-100 p-4 group-hover:bg-black transition-colors duration-300">
                <service.icon className="h-8 w-8 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mb-3 text-xl text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
