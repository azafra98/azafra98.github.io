import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import type { Translations } from "@/translations/es";

type PositionItem = Translations["experience"]["positions"][number];

interface TimelineListProps {
  positions: PositionItem[];
  expandedIndices: number[];
  onToggleExpand: (index: number) => void;
  isVisible: boolean;
  skillsLabel: string;
  expandLabel: string;
  collapseLabel: string;
}

function TimelineList({
  positions,
  expandedIndices,
  onToggleExpand,
  isVisible,
  skillsLabel,
  expandLabel,
  collapseLabel,
}: TimelineListProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

      {positions.map((exp, index) => {
        const isExpanded = expandedIndices.includes(index);

        return (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
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
                <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm mb-4">
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

                {/* Direct Skills/Tools when no additional details exist */}
                {exp.details.length === 0 && exp.technologies.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-border/30">
                    <p className="text-xs font-semibold text-primary mb-2">
                      {skillsLabel}:
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
                )}

                {/* Expandable Details */}
                {isExpanded && exp.details.length > 0 && (
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

                    {/* Technologies / Skills */}
                    {exp.technologies.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs font-semibold text-primary mb-2">
                          {skillsLabel}:
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
                    )}
                  </motion.div>
                )}

                {/* Expand/Collapse Button */}
                {exp.details.length > 0 && (
                  <button
                    onClick={() => onToggleExpand(index)}
                    className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-all"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp size={16} />
                        {collapseLabel}
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} />
                        {expandLabel}
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const [showOtherExperience, setShowOtherExperience] = useState(false);
  const [expandedOtherIndices, setExpandedOtherIndices] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleExpandOther = (index: number) => {
    setExpandedOtherIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const otherPositions = t.experience.otherPositions ?? [];

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

        {/* Main IT Experience Timeline */}
        <TimelineList
          positions={t.experience.positions}
          expandedIndices={expandedIndices}
          onToggleExpand={toggleExpand}
          isVisible={isInView}
          skillsLabel={t.experience.technologies}
          expandLabel={t.experience.expandButton}
          collapseLabel={t.experience.collapseButton}
        />

        {/* Collapsible Non-IT Experience Section */}
        {otherPositions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-12 border-t border-border/40"
          >
            <div className="text-center">
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">
                {t.experience.otherExperienceTitle}
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6">
                {t.experience.otherExperienceSubtitle}
              </p>

              <button
                type="button"
                onClick={() => setShowOtherExperience((prev) => !prev)}
                aria-expanded={showOtherExperience}
                className="glass-card px-6 py-3 inline-flex items-center gap-3 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                <Briefcase size={16} className="text-primary" />
                <span>
                  {showOtherExperience
                    ? t.experience.hideOtherExperience
                    : `${t.experience.showOtherExperience} (${otherPositions.length})`}
                </span>
                {showOtherExperience ? (
                  <ChevronUp size={16} className="text-primary" />
                ) : (
                  <ChevronDown size={16} className="text-primary" />
                )}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {showOtherExperience && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-12">
                    <TimelineList
                      positions={otherPositions}
                      expandedIndices={expandedOtherIndices}
                      onToggleExpand={toggleExpandOther}
                      isVisible={true}
                      skillsLabel={t.experience.otherSkillsLabel}
                      expandLabel={t.experience.expandButton}
                      collapseLabel={t.experience.collapseButton}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
