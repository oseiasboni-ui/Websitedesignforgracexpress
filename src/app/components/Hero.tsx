import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onScrollToContent: () => void;
}

export function Hero({ onScrollToContent }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1764871225571-de15dfe26cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwbW9kZXJufGVufDF8fHx8MTc2NjY4MzQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="GracExpress Transport"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl tracking-tight">
            GracExpress
          </h1>
          <p className="mx-auto max-w-2xl text-xl md:text-2xl lg:text-3xl text-gray-300 tracking-wide">
            Logística inteligente.<br />Velocidade sem limites.
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          onClick={onScrollToContent}
          className="absolute bottom-12 cursor-pointer hover:scale-110 transition-transform"
          aria-label="Scroll to content"
        >
          <ChevronDown className="h-10 w-10 animate-bounce text-white/70" />
        </motion.button>
      </div>
    </section>
  );
}
