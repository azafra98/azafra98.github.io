import { motion } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.header.nav.home, href: "#inicio" },
    { name: t.header.nav.about, href: "#sobre-mi" },
    { name: t.header.nav.experience, href: "#experiencia" },
    { name: t.header.nav.projects, href: "#proyectos" },
    { name: t.header.nav.education, href: "#educacion" },
    { name: t.header.nav.contact, href: "#contacto" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    // Logic for language-based CV selection
    const filename = language === "en" ? "CV_AlbertoZafraMontero_English.pdf" : "CV_AlbertoZafraMontero.pdf";
    const url = `/${filename}`;

    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Auto-hide navbar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <nav className="section-container py-2 md:py-4">
        <div className="flex items-center justify-between flex-nowrap">
          <motion.a
            href="#inicio"
            className="font-display text-xl font-bold gradient-text shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            AZM
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Switcher - Desktop */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium glass-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Change language"
            >
              <Languages size={16} />
              <span className="uppercase">{language}</span>
            </motion.button>

            <motion.a
              href="#contacto"
              className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.header.nav.downloadCV}
            </motion.a>
          </div>

          {/* Mobile Toggle & Language Switcher */}
          <div className="md:hidden flex items-center gap-2 shrink-0">
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 text-xs font-medium glass-card"
              whileTap={{ scale: 0.95 }}
              aria-label="Change language"
            >
              <Languages size={14} />
              <span className="uppercase">{language}</span>
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="block font-medium text-primary"
              >
                {t.header.nav.downloadCV}
              </a>
            </li>
          </motion.ul>
        )}
      </nav>
    </motion.header>
  );
}
