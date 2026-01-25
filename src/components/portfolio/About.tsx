import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Globe, Terminal, Wrench } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const getSkills = (t: any) => [
  {
    category: t.about.skills.languages,
    icon: Code2,
    items: ["PHP", "JavaScript", "Java", "Python", "C#", "HTML", "CSS"],
  },
  {
    category: t.about.skills.frameworks,
    icon: Terminal,
    items: ["Laravel", "Angular", ".NET Core", "React"],
  },
  {
    category: t.about.skills.cmsEcommerce,
    icon: Globe,
    items: ["WordPress", "PrestaShop"],
  },
  {
    category: t.about.skills.databases,
    icon: Database,
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: t.about.skills.devopsTools,
    icon: Server,
    items: ["Git", "Docker", "XAMPP", "Android Studio", "VS Code"],
  },
  {
    category: t.about.skills.systems,
    icon: Wrench,
    items: ["Windows Server 2022", t.language === "es" ? "Gestión de Redes" : "Network Management", "CI/CD"],
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const skills = getSkills(t);

  return (
    <section id="sobre-mi" className="py-24 bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <skill.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
