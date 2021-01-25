import React from 'react';
import Grid from '@material-ui/core/Grid';

//components
import TextSection from '../text-section/text-section.component';
import SimpleCard from '../project/project-card';

import eCommProjectImage from '../../assets/ecommproject.png';
import todoProjectImage from '../../assets/todoProject.png';
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

	return (
		<ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
			<div className="projects-section">
				<TextSection purple={false}>My Recent Projects</TextSection>
				<Grid container spacing={2} direction="row" justify="space-evenly">
					<SimpleCard
						imageUrl={eCommProjectImage}
						projectName="E-commerce"
						projectLink="https://e-comm-website.herokuapp.com/"
					>
						{eCommerceTechnologies}
					</SimpleCard>
					<SimpleCard
						imageUrl={todoProjectImage}
						projectName="To-Do list"
						projectLink="https://aqueous-cove-47423.herokuapp.com/"
					>
						{todoListTechnologies}
					</SimpleCard>
				</Grid>
			</div>
		</ScrollAnimation>
	);
};

export default ProjectsSection;
