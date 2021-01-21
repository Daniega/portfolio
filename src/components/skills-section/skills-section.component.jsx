import React from 'react';
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

import ScrollAnimation from 'react-animate-on-scroll';

import './skills-section.styles.scss';

//TODO - create a new component for every Grid section for a reusable, short code

const SkillsSection = () => {
	return (
		<div className="skills-section">
			<div className="skills-section-title normal-text heading-text">My Stack</div>
			<Grid container spacing={2} justify="space-evenly" direction="row">
				<Grid item>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div className="skill-container">
							<div className="skill-title">Javascript</div>
							<img src={javascriptLogo} alt="Javascript" height="80px" width="80px" />
						</div>
					</ScrollAnimation>
				</Grid>
				<Grid item>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div className="skill-container">
							<div className="skill-title">MongoDB</div>
							<img src={mongoLogo} alt="React" height="80px" width="80px" />
						</div>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid container spacing={2} justify="space-evenly" direction="row">
				<Grid item>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div className="skill-container">
							<div className="skill-title">React</div>
							<img src={reactLogo} alt="React" height="80px" width="80px" />
						</div>
					</ScrollAnimation>
				</Grid>
				<Grid item>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div className="skill-container">
							<div className="skill-title">Firebase</div>
							<img src={firebaseLogo} alt="React" height="80px" width="80px" />
						</div>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid container spacing={2} justify="space-evenly" direction="row">
				<Grid item>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div className="skill-container">
							<div className="skill-title">Redux</div>
							<img src={reduxLogo} alt="React" height="80px" width="80px" />
						</div>
					</ScrollAnimation>
				</Grid>
				<Grid item>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div className="skill-container">
							<div className="skill-title">Scss</div>
							<img src={sassLogo} alt="React" height="80px" width="80px" />
						</div>
					</ScrollAnimation>
				</Grid>
			</Grid>

			<Grid container spacing={2} justify="space-evenly" direction="row">
				<Grid item>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div className="skill-container">
							<div className="skill-title">NodeJs</div>
							<img src={nodejsLogo} alt="React" height="80px" width="80px" />
						</div>
					</ScrollAnimation>
				</Grid>
				<Grid item>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div className="skill-container">
							<div className="skill-title">Webpack</div>
							<img src={webpackLogo} alt="React" height="80px" width="80px" />
						</div>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid container spacing={2} justify="space-evenly" direction="row">
				<Grid item>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div className="skill-container">
							<div className="skill-title">HTML5</div>
							<img src={htmlLogo} alt="React" height="80px" width="80px" />
						</div>
					</ScrollAnimation>
				</Grid>
				<Grid item>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div className="skill-container">
							<div className="skill-title">Git</div>
							<img src={gitLogo} alt="React" height="80px" width="80px" />
						</div>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid container spacing={2} justify="space-evenly" direction="row">
				<Grid item>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div className="skill-container">
							<div className="skill-title">CSS3</div>
							<img src={cssLogo} alt="React" height="80px" width="80px" />
						</div>
					</ScrollAnimation>
				</Grid>
				<Grid item>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div className="skill-container">
							<div className="skill-title">VS Code</div>
							<img src={visualLogo} alt="React" height="80px" width="80px" />
						</div>
					</ScrollAnimation>
				</Grid>
			</Grid>
		</div>
	);
};

export default SkillsSection;
