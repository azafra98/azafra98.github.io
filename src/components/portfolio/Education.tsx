import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    institution: "IES Marqués de Comares",
    period: "Sep 2024 – Dic 2025",
    location: "Lucena, Córdoba",
    description:
      "Formación avanzada en desarrollo de aplicaciones para múltiples plataformas, incluyendo móvil y escritorio.",
  },
  {
    title: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
    institution: "IES Marqués de Comares",
    period: "Sep 2017 – Feb 2020",
    location: "Lucena, Córdoba",
    description:
      "Especialización en desarrollo web full stack, incluyendo frontend, backend y gestión de bases de datos.",
  },
  {
    title: "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
    institution: "IES Marqués de Comares",
    period: "Sep 2015 – Jun 2017",
    location: "Lucena, Córdoba",
    description:
      "Fundamentos de sistemas informáticos, redes y soporte técnico.",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="educacion" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Formación</span> Académica
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria educativa en tecnologías de la información
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 self-start">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
