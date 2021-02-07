import React from 'react';
import Grid from '@material-ui/core/Grid';

//components
import ProjectCard from '../project/project-card.component';
//project images
import eCommProjectImage from '../../assets/ecommproject.jpg';
import todoProjectImage from '../../assets/todoProject.jpg';
import portfolioProjectImage from '../../assets/portfolioproject.jpg';
//constants
import { ANIMATION_DURATION } from '../../constants/animation';
//stylesheet
import './projects-section.styles.scss';
//Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';

const ProjectsSection = ({ darkModeState }) => {
   const eCommerceTechnologies = [
      'ReactJS',
      'Redux',
      'Redux-Saga',
      'Hooks',
      'NodeJs',
      'Styled components',
      'Firebase',
      'Stripe API'
   ];
   const todoListTechnologies = [ 'EJS', 'HTML', 'CSS', 'NodeJs', 'Express', 'MongoDB' ];
   const portfolioTechnologies = [ 'ReactJs', 'Hooks', 'Sass', 'Material UI', 'Animation', 'Responsive', 'Dark mode' ];

   return (
      <ScrollAnimation animateIn='fadeIn' duration={ANIMATION_DURATION} animateOnce={true}>
         <div className={`projects-section ${darkModeState() ? 'projects-dark' : 'projects-light'}`} name='projects'>
            <div className={`projects-section-title normal-text heading-text ${darkModeState() ? 'title-dark' : null}`}>
               My Recent Projects
            </div>
            <Grid container spacing={2} direction='row' justify='space-evenly'>
               <ProjectCard
                  imageUrl={eCommProjectImage}
                  projectName='E-commerce'
                  projectLink='https://e-comm-website.herokuapp.com/'
                  githubLink='https://github.com/Daniega/e-commerece-website'
                  darkModeState={darkModeState}
               >
                  {eCommerceTechnologies}
               </ProjectCard>
               <ProjectCard
                  imageUrl={todoProjectImage}
                  projectName='To-Do list'
                  projectLink='https://aqueous-cove-47423.herokuapp.com/'
                  githubLink='https://github.com/Daniega/todolist-with-db'
                  darkModeState={darkModeState}
               >
                  {todoListTechnologies}
               </ProjectCard>
               <ProjectCard
                  imageUrl={portfolioProjectImage}
                  projectName='Portfolio'
                  projectLink='https://daniel-gaishuber.herokuapp.com/'
                  githubLink='https://github.com/Daniega/portfolio'
                  darkModeState={darkModeState}
               >
                  {portfolioTechnologies}
               </ProjectCard>
            </Grid>
         </div>
      </ScrollAnimation>
   );
};

export default ProjectsSection;
