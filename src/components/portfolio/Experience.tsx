import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Desarrollador FullStack y Técnico de Sistemas",
    company: "Santiago Vargas",
    period: "Oct 2025 – Dic 2025",
    location: "Lucena, Córdoba",
    description: [
      "Mantenimiento evolutivo y correctivo de ecosistemas WordPress y PrestaShop, desarrollando módulos personalizados",
      "Diseño y desarrollo de software de automatización para folletos comerciales",
      "Gestión integral del ciclo de vida del hardware y configuración de puestos de trabajo",
    ],
  },
  {
    title: "Desarrollador Web",
    company: "Agrocor",
    period: "Abr 2024 – Jun 2024",
    location: "Lucena, Córdoba",
    description: [
      "Desarrollo web en Prestashop en entorno local y producción",
      "Optimización SEO y mejora de productos con categorización óptima",
      "Reducción del peso de la base de datos en un 80%",
      "Aumento de ventas del 800% tras optimización integral",
    ],
  },
  {
    title: "Técnico de Sistemas",
    company: "Grupo Tragsa",
    period: "May 2023 – Nov 2023",
    location: "Granada",
    description: [
      "Soporte informático a usuarios en Andalucía oriental con Windows Server 2022",
      "Instalación de perfiles y gestión de dispositivos móviles mediante inventario",
      "Instalación y mantenimiento de racks de red y switches",
    ],
  },
  {
    title: "Desarrollador Full Stack",
    company: "Automatismos Chacón",
    period: "Ago 2021 – Mar 2022",
    location: "Lucena, Córdoba",
    description: [
      "Desarrollo de páginas web con WordPress (inthesk.net)",
      "Maquetación de contenido con Adobe Photoshop e Illustrator",
      "Gestión y optimización del framework de base de datos de clientes",
    ],
  },
  {
    title: "Desarrollador Web",
    company: "Eccuo Marketing Digital",
    period: "Oct 2020 – Ene 2021",
    location: "Córdoba",
    description: [
      "Desarrollo Full Stack de páginas web con WordPress",
      "Maquetado CSS personalizado según necesidades del cliente",
      "Manejo de PrestaShop",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Experiencia</span> Profesional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria profesional en desarrollo web y administración de sistemas
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 mt-2 glow-effect" />

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase size={16} />
                    <span className="text-sm font-medium">{exp.company}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
