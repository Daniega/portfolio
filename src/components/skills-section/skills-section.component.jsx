import React from 'react';

//Grid from material UI
import Grid from '@material-ui/core/Grid';

//Logos
import javascriptLogo from '../../assets/javascript.svg';
import reactLogo from '../../assets/react.svg';
import cssLogo from '../../assets/css3.svg';
import firebaseLogo from '../../assets/firebase.svg';
import gitLogo from '../../assets/git.svg';
import htmlLogo from '../../assets/html5.svg';
import mongoLogo from '../../assets/mongodb.svg';
import nodejsLogo from '../../assets/nodejs.svg';
import reduxLogo from '../../assets/redux.svg';
import sassLogo from '../../assets/sass.svg';
import webpackLogo from '../../assets/webpack.svg';
import visualLogo from '../../assets/visual.svg';

//Skill component
import Skill from '../skill/skill.component';

//Stylesheet
import './skills-section.styles.scss';

//TODO - create a new component for every Grid section for a reusable, short code

const SkillsSection = () => {
   return (
      <div className='skills-section' name='skills'>
         <div className='skills-section-title normal-text heading-text'>My Stack</div>
         <Grid container spacing={2} justify='space-evenly' direction='row'>
            <Skill skillTitle='Javascript' skillLogo={javascriptLogo} />
            <Skill skillTitle='MongoDB' skillLogo={mongoLogo} />
         </Grid>
         <Grid container spacing={2} justify='space-evenly' direction='row'>
            <Skill skillTitle='React' skillLogo={reactLogo} />
            <Skill skillTitle='Firebase' skillLogo={firebaseLogo} />
         </Grid>
         <Grid container spacing={2} justify='space-evenly' direction='row'>
            <Skill skillTitle='Redux' skillLogo={reduxLogo} />
            <Skill skillTitle='Scss' skillLogo={sassLogo} />
         </Grid>
         <Grid container spacing={2} justify='space-evenly' direction='row'>
            <Skill skillTitle='NodeJs' skillLogo={nodejsLogo} />
            <Skill skillTitle='Webpack' skillLogo={webpackLogo} />
         </Grid>
         <Grid container spacing={2} justify='space-evenly' direction='row'>
            <Skill skillTitle='HTML5' skillLogo={htmlLogo} />
            <Skill skillTitle='Git' skillLogo={gitLogo} />
         </Grid>
         <Grid container spacing={2} justify='space-evenly' direction='row'>
            <Skill skillTitle='CSS3' skillLogo={cssLogo} />
            <Skill skillTitle='VS Code' skillLogo={visualLogo} />
         </Grid>
      </div>
   );
};

export default SkillsSection;
