import React from 'react';
import NavbarMain from './components/navbar/NavbarMain';
import HeroMain from './components/herosection/HeroMain';
import "./App.css";
import SubHeroSection from './components/herosection/SubHeroSection';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectsMain from './components/projectsSection/ProjectsMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';
const App = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white"> {/* bg-gray-900 is dark gray */}
      <NavbarMain />
      <div className="pt-[100px]">
        <HeroMain />
        <SubHeroSection />
        <AboutMeMain />
        <SkillsMain/>
        <SubSkills />
        <ExperienceMain />
        <ProjectsMain />
        <ContactMeMain/>
        <FooterMain/>
      </div>
    </div>
  );
};

export default App;
