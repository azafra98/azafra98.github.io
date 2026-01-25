import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Footer } from "@/components/portfolio/Footer";
import { lazy, Suspense, useEffect } from "react";

// Lazy load components that are below the fold
const Experience = lazy(() => import("@/components/portfolio/Experience").then(m => ({ default: m.Experience })));
const Projects = lazy(() => import("@/components/portfolio/Projects").then(m => ({ default: m.Projects })));
const Education = lazy(() => import("@/components/portfolio/Education").then(m => ({ default: m.Education })));
const Certificates = lazy(() => import("@/components/portfolio/Certificates").then(m => ({ default: m.Certificates })));
const Testimonials = lazy(() => import("@/components/portfolio/Testimonials").then(m => ({ default: m.Testimonials })));
const Contact = lazy(() => import("@/components/portfolio/Contact").then(m => ({ default: m.Contact })));

const Index = () => {
  // Enable dark mode by default
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Experience />
          <Projects />
          <Education />
          <Certificates />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
