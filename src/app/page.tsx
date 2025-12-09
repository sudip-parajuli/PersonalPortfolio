import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import AISection from "@/components/ai/AISection";
import PlaygroundSection from "@/components/playground/PlaygroundSection";
import StatsSection from "@/components/stats/StatsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AISection />
      <PlaygroundSection />
      <ContactSection />
    </div>
  );
}
