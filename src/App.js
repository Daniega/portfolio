import React, { useState, useEffect } from 'react';
import './App.css';

import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import IntroSection from './components/intro-section/intro-section.component';
import SkillsSection from './components/skills-section/skills-section.component';
import ProjectsSection from './components/projects-section/projects-section.components';
import AboutSection from './components/about-section/about-section.component';
import SocialLinksSection from './components/social-links-section/social-links.component';

const App = () => {
   //get initial value of dark mode state, if exists
   const getInitialMode = () => {
      const savedMode = JSON.parse(localStorage.getItem('dark'));
      return savedMode || false;
   };
   //state
   const [ darkMode, setDarkMode ] = useState(getInitialMode());
   //hooks
   useEffect(
      () => {
         localStorage.setItem('dark', JSON.stringify(darkMode));
      },
      [ darkMode ]
   );
   //handle click to change state
   const handleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
   };

   const getDarkModeState = () => {
      return darkMode;
   };

   return (
      <div className={darkMode ? 'App-dark' : 'App-light'}>
         <Header darkSwitchPress={handleDarkMode} darkModeState={darkMode} />
         <IntroSection />
         <SkillsSection darkModeState={getDarkModeState} />
         <ProjectsSection darkModeState={getDarkModeState} />
         <AboutSection darkModeState={getDarkModeState} />
         <SocialLinksSection />
         <Footer />
      </div>
   );
};

export default App;
