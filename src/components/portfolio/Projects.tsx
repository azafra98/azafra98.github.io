import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "Barbería Joseabarber",
    description:
      "Sistema completo de reserva de citas desarrollado con Laravel. Permite a los clientes reservar sus citas online de forma sencilla y al barbero gestionar su agenda.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    link: "https://joseabarber.es",
    github: null,
    period: "Abr 2023 – Actualidad",
    image: "/placeholder.svg",
  },
  {
    title: "IntheSK",
    description:
      "Página web corporativa desarrollada con WordPress para Automatismos Chacón. Incluye maquetación personalizada y optimización SEO.",
    tech: ["WordPress", "PHP", "CSS", "Adobe Photoshop"],
    link: "https://inthesk.net",
    github: null,
    period: "2021 – 2022",
    image: "/placeholder.svg",
  },
  {
    title: "E-commerce Agrocor",
    description:
      "Optimización integral de tienda online en PrestaShop. Mejora de SEO, reducción de base de datos en 80% y aumento de ventas del 800%.",
    tech: ["PrestaShop", "PHP", "MySQL", "SEO"],
    link: null,
    github: null,
    period: "2024",
    image: "/placeholder.svg",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="py-24 bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en
            desarrollo web y soluciones digitales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={`Preview de ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                
                {/* Overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-primary text-primary-foreground rounded-full"
                      aria-label="Ver proyecto"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-foreground text-background rounded-full"
                      aria-label="Ver código"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                  <Calendar size={12} />
                  <span>{project.period}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
