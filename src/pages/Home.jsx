import ThemeToggle from "@/components/ThemeToggle";
import StarBackground from "@/components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import SkillSection from "../components/SkillSection";
import CertificateSection from "../components/CertificateSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import RecruiterMode from "@/components/RecruiterMode";
const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="absolute -top-10 left-0 bg-primary text-primary-foreground px-4 py-2 rounded-br focus:top-0 transition-all duration-200 z-50"
      >
        Skip to main content
      </a>

      <ThemeToggle />
      <RecruiterMode />
      <StarBackground />
      <Navbar />
      <main id="main-content" className="focus:outline-none">
        <HeroSection />
        <AboutMe />
        <SkillSection />
        <CertificateSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
