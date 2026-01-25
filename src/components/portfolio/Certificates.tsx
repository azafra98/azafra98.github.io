import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Certificates() {
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

    if (!t.certificates) return null;

    return (
        <section id="certificados" className="py-24">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        {t.certificates.title} <span className="gradient-text">{t.certificates.titleHighlight}</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t.certificates.subtitle}
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    {t.certificates.items.map((cert, index) => {
                        const isExpanded = expandedIndices.includes(index);

                        return (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-8 hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center max-w-lg w-full"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <Award size={32} />
                                </div>
                                <h3 className="font-display text-xl font-semibold mb-2">
                                    {cert.title}
                                </h3>
                                <div className="text-sm text-muted-foreground mb-4">
                                    <span className="font-medium text-foreground">{cert.issuer}</span> • {cert.year}
                                </div>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {cert.description}
                                </p>

                                {cert.details && isExpanded && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full mb-6 text-left"
                                    >
                                        <ul className="space-y-2">
                                            {cert.details.map((detail, i) => (
                                                <li
                                                    key={i}
                                                    className="text-sm text-muted-foreground flex items-start gap-2"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}

                                <div className="mt-auto flex flex-col items-center gap-4 w-full">
                                    {cert.details && (
                                        <button
                                            onClick={() => toggleExpand(index)}
                                            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-all"
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
                                    )}

                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full inline-flex items-center justify-center px-4 py-2 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                        >
                                            {t.viewCertificate}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
