import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, language } = useLanguage();
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

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
            {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => {
            const isExpanded = expandedIndices.includes(index);

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                {/* Project Image */}
                <div
                  className={`relative h-48 overflow-hidden ${
                    // @ts-ignore
                    project.bgWhite ? 'bg-white' : 'bg-secondary'
                    }`}
                >
                  <picture>
                    <source srcSet={`/${project.image}.webp`} type="image/webp" />
                    <source
                      srcSet={`/${project.image}.${project.imageFormat}`}
                      type={`image/${project.imageFormat === 'png' ? 'png' : 'jpeg'}`}
                    />
                    <img
                      src={`/${project.image}.${project.imageFormat}`}
                      alt={`Preview de ${project.title}`}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Put the placeholder if image fails
                        if (target.src.includes('placeholder.svg')) return;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </picture>
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
                        aria-label={t.projects.viewProject}
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
                        aria-label={t.projects.viewCode}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                    <Calendar size={12} />
                    <span>{project.period}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.summary}
                  </p>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4 space-y-4"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-1">
                          {language === "es" ? "Descripción Detallada" : "Detailed Description"}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-1">
                          {language === "es" ? "Desafío" : "Challenge"}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-1">
                          {language === "es" ? "Solución" : "Solution"}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.solution}
                        </p>
                      </div>

                      {project.results && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">
                            {language === "es" ? "Resultados" : "Results"}
                          </h4>
                          <ul className="space-y-1">
                            {project.results.map((result, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.features && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">
                            {language === "es" ? "Características" : "Features"}
                          </h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-all"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp size={16} />
                        {t.projects.viewLess}
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} />
                        {t.projects.viewMore}
                      </>
                    )}
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
