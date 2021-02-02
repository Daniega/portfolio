import React from 'react';
import './App.css';

import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import IntroSection from './components/intro-section/intro-section.component';
import SkillsSection from './components/skills-section/skills-section.component';
import ProjectsSection from './components/projects-section/projects-section.components';
import AboutSection from './components/about-section/about-section.component';
import SocialLinksSection from './components/social-links-section/social-links.component';

const App = () => {
   return (
      <div className='App'>
         <Header />
         <IntroSection />
         <SkillsSection />
         <ProjectsSection />
         <AboutSection />
         <SocialLinksSection />
         <Footer />
      </div>
   );
};

export default App;
