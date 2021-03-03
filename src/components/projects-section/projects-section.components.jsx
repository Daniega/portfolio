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

const projects = [
	{
		technologies: [
			'ReactJS',
			'Redux',
			'Redux-Saga',
			'Hooks',
			'NodeJs',
			'Styled components',
			'Firebase',
			'Stripe API',
			'Responsive',
		],
		name: 'E-commerce',
		link: 'https://e-comm-website.herokuapp.com/',
		githubLink: 'https://github.com/Daniega/e-commerece-website',
		image: eCommProjectImage,
	},
	{
		technologies: ['EJS', 'HTML', 'CSS', 'NodeJs', 'Express', 'MongoDB'],
		name: 'To-Do list',
		link: 'https://aqueous-cove-47423.herokuapp.com/',
		githubLink: 'https://github.com/Daniega/todolist-with-db',
		image: todoProjectImage,
	},
	{
		technologies: [
			'ReactJs',
			'Hooks',
			'Sass',
			'Material UI',
			'Animation',
			'Responsive',
			'Dark mode',
		],
		name: 'Portfolio',
		link: 'https://daniega.com/',
		githubLink: 'https://github.com/Daniega/portfolio',
		image: portfolioProjectImage,
	},
];

const ProjectsSection = ({ darkModeState }) => {
	return (
		<ScrollAnimation animateIn='fadeIn' duration={ANIMATION_DURATION} animateOnce={true}>
			<div
				className={`projects-section ${darkModeState() ? 'projects-dark' : 'projects-light'}`}
				name='projects'>
				<div
					className={`projects-section-title normal-text heading-text ${
						darkModeState() ? 'title-dark' : null
					}`}>
					My Recent Projects
				</div>
				<Grid container spacing={1} direction='row' justify='space-evenly'>
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							imageUrl={project.image}
							projectName={project.name}
							projectLink={project.link}
							githubLink={project.githubLink}
							darkModeState={darkModeState}>
							{project.technologies}
						</ProjectCard>
					))}
				</Grid>
			</div>
		</ScrollAnimation>
	);
};

export default ProjectsSection;
