import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "azafram98@gmail.com",
    href: "mailto:azafram98@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "alberto-zafra-montero",
    href: "https://linkedin.com/in/alberto-zafra-montero",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@azafram",
    href: "https://github.com/azafram",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+34 650 29 86 12",
    href: "tel:+34650298612",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Lucena, Córdoba, España",
    href: null,
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="glass-card p-6 flex flex-col items-center text-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group block h-full"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <info.icon size={24} />
                    </div>
                    <h3 className="font-display font-semibold mb-1">
                      {info.label}
                    </h3>
                    <p className="text-muted-foreground text-sm break-all">
                      {info.value}
                    </p>
                  </a>
                ) : (
                  <div className="glass-card p-6 flex flex-col items-center text-center h-full">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
                      <info.icon size={24} />
                    </div>
                    <h3 className="font-display font-semibold mb-1">
                      {info.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a
              href="mailto:azafram98@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-xl hover:opacity-90 transition-opacity glow-effect"
            >
              <Mail size={20} />
              Envíame un mensaje
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
