import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, MapPin, Download, AlertCircle, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const getContactInfo = (t: any) => [
  {
    icon: Mail,
    label: t.contact.email,
    value: "azafram98@gmail.com",
    href: "mailto:azafram98@gmail.com",
  },
  {
    icon: Linkedin,
    label: t.contact.linkedin,
    value: "alberto-zafra-montero",
    href: "https://linkedin.com/in/alberto-zafra-montero",
  },
  {
    icon: MapPin,
    label: t.contact.location,
    value: "Lucena (Córdoba) - España",
    href: "", // No link for location
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, language } = useLanguage();
  const contactInfo = getContactInfo(t);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const filename = language === "en" ? "CV_AlbertoZafraMontero_English.pdf" : "CV_AlbertoZafraMontero.pdf";
    const url = `/${filename}`;

    fetch(url, { method: 'HEAD' })
      .then((response) => {
        const contentType = response.headers.get("content-type");
        if (response.ok && contentType === "application/pdf") {
          const link = document.createElement('a');
          link.href = url;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          setShowErrorModal(true);
        }
      })
      .catch(() => {
        setShowErrorModal(true);
      });
  };

  return (
    <section id="contacto" className="py-24 bg-muted/30 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a
                    href={info.href}
                    target={info.href?.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`glass-card p-6 flex flex-col items-center text-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group block h-full ${!info.href ? 'cursor-default pointer-events-none' : ''}`}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display font-semibold mb-1">
                      {info.label}
                    </h3>
                    <p className="text-muted-foreground text-sm break-all">
                      {info.value}
                    </p>
                  </a>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              onClick={handleDownload}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-xl hover:opacity-90 transition-opacity glow-effect flex items-center justify-center gap-2"
            >
              <Download size={20} />
              {t.contact.downloadCV}
            </a>

            <a
              href="mailto:azafram98@gmail.com"
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground font-display font-semibold rounded-xl hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              {t.contact.sendMessage}
            </a>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showErrorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowErrorModal(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card w-full max-w-md p-6 relative z-10 shadow-xl border-destructive/20"
            >
              <button
                onClick={() => setShowErrorModal(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center text-destructive mb-2">
                  <AlertCircle size={24} />
                </div>

                <h3 className="font-display text-xl font-bold">
                  {t.contact.cvErrorTitle}
                </h3>

                <p className="text-muted-foreground">
                  {t.contact.cvErrorDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
                  <a
                    href="https://linkedin.com/in/alberto-zafra-montero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-colors"
                  >
                    <Linkedin size={18} />
                    {t.contact.goToLinkedin}
                  </a>
                  <button
                    onClick={() => setShowErrorModal(false)}
                    className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    {t.contact.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
