import React from 'react';
import Grid from '@material-ui/core/Grid';

//components
import TextSection from '../text-section/text-section.component';
import ProjectCard from '../project/project-card.component';

import eCommProjectImage from '../../assets/ecommproject.png';
import todoProjectImage from '../../assets/todoProject.png';
import portfolioProjectImage from '../../assets/portfolioproject.png';

import './projects-section.styles.scss';

import ScrollAnimation from 'react-animate-on-scroll';

const ProjectsSection = () => {
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
	const portfolioTechnologies = [ 'ReactJs', 'Hooks', 'Sass', 'Material UI', 'Animation', 'Responsive' ];

	return (
		<ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
			<div className="projects-section">
				<TextSection purple={false}>My Recent Projects</TextSection>
				<Grid container spacing={2} direction="row" justify="space-evenly">
					<ProjectCard
						imageUrl={eCommProjectImage}
						projectName="E-commerce"
						projectLink="https://e-comm-website.herokuapp.com/"
					>
						{eCommerceTechnologies}
					</ProjectCard>
					<ProjectCard
						imageUrl={todoProjectImage}
						projectName="To-Do list"
						projectLink="https://aqueous-cove-47423.herokuapp.com/"
					>
						{todoListTechnologies}
					</ProjectCard>
					<ProjectCard
						imageUrl={portfolioProjectImage}
						projectName="Portfolio"
						projectLink="https://daniel-gaishuber.herokuapp.com/"
					>
						{portfolioTechnologies}
					</ProjectCard>
				</Grid>
			</div>
		</ScrollAnimation>
	);
};

export default ProjectsSection;
