import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

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
            <span className="gradient-text">{t.experience.title}</span>{" "}
            {t.experience.titleHighlight}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {t.experience.positions.map((exp, index) => {
            const isExpanded = expandedIndices.includes(index);

            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 mt-2 glow-effect" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
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

                    {/* Summary - Always visible */}
                    <ul className="space-y-2 mb-4">
                      {exp.summary.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Expandable Details */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-border/30"
                      >
                        <ul className="space-y-2 mb-4">
                          {exp.details.map((detail, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="mt-4">
                          <p className="text-xs font-semibold text-primary mb-2">
                            {t.experience.technologies}:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-all"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={16} />
                          {t.experience.collapseButton}
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} />
                          {t.experience.expandButton}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
