import React from 'react';
import Grid from '@material-ui/core/Grid';

import './project-card-manual.styles.scss';

import { Button } from '@material-ui/core';

const Project = ({ imageUrl, projectName, projectLink, children }) => {
   const projectTechnologies = children; //get project description from props.children

   return (
      <Grid item xs={12} md={6}>
         <div className='project-component'>
            <div className='project-image-container'>
               <img src={imageUrl} className='project-image' alt={projectName} />
            </div>
            <div className='project-title'>
               <span className='bold-purple'>{projectName}</span>
               <span> Website</span>
            </div>
            <div className='project-description'>
               <ul>
                  {projectTechnologies.map((technology, index) => {
                     return <li key={index}>{technology}</li>;
                  })}
               </ul>
            </div>
            <div>
               <a href={projectLink} className='project-link-button'>
                  <Button variant='contained' color='secondary' size='medium' disableElevation={true}>
                     Let Me See
                  </Button>
               </a>
            </div>
         </div>
      </Grid>
   );
};

export default Project;
