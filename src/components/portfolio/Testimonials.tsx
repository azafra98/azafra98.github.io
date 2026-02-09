import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { t } = useLanguage();

    if (!t.testimonials) return null;

    return (
        <section id="recomendaciones" className="py-24 bg-muted/30">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        {t.testimonials.title} <span className="gradient-text">{t.testimonials.titleHighlight}</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t.testimonials.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.testimonials.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="glass-card p-8 hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative"
                        >
                            <div className="absolute top-6 right-6 text-primary/10">
                                <Quote size={60} />
                            </div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="relative w-16 h-16 flex-shrink-0">
                                    <picture>
                                        <source srcSet={`/${item.image}.webp`} type="image/webp" />
                                        <source
                                            srcSet={`/${item.image}.${item.imageFormat}`}
                                            type={`image/${item.imageFormat === 'png' ? 'png' : 'jpeg'}`}
                                        />
                                        <img
                                            src={`/${item.image}.${item.imageFormat}`}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                // Avoid infinite loop if placeholder fails
                                                if (target.src.includes('placeholder')) return;

                                                // Fallback to initial
                                                target.style.display = 'none';
                                                target.parentElement?.parentElement?.classList.add('fallback-avatar');
                                            }}
                                        />
                                    </picture>
                                    <div className="absolute inset-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl -z-10">
                                        {item.name.charAt(0)}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-display text-lg font-semibold">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        {item.role}
                                    </p>
                                    {item.linkedin && (
                                        <a
                                            href={item.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary/80 transition-colors inline-block"
                                            aria-label={`LinkedIn ${item.name}`}
                                        >
                                            <Linkedin size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <blockquote className="relative z-10 flex-grow">
                                {Array.isArray(item.content) ? (
                                    <ul className="space-y-2 mt-2">
                                        {item.content.map((line, i) => (
                                            <li key={i} className="text-muted-foreground italic leading-relaxed text-sm flex gap-2">
                                                <span className="text-primary">•</span>
                                                {line}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-muted-foreground italic leading-relaxed">
                                        "{item.content}"
                                    </p>
                                )}
                            </blockquote>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
