import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import TechArsenal from '@/components/TechArsenal';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen bg-[#070708] text-[#e1e7ec] relative overflow-hidden font-sans"
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <div
        id="main-content"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-16 pt-4 md:py-12"
      >
        <HeroSection />
        <div id="skills" className="scroll-mt-24">
          <StatsSection />
        </div>
        <TechArsenal />
        <ExperienceTimeline />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
