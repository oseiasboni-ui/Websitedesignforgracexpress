import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const images = [
  {
    url: "https://images.unsplash.com/photo-1644079446600-219068676743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY2NjcyMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Centro de distribuição moderno",
  },
  {
    url: "https://images.unsplash.com/photo-1595587637401-83ff822bd63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXBwaW5nfGVufDF8fHx8MTc2NjY4MzQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Transporte de carga internacional",
  },
  {
    url: "https://images.unsplash.com/photo-1760709758484-4ccff92a6aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwZGVsaXZlcnklMjBzZXJ2aWNlfGVufDF8fHx8MTc2NjY4MzQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Serviço de entrega expressa",
  },
];

export function Gallery() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="bg-white py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl tracking-tight text-gray-900">
            Nossa Infraestrutura
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
