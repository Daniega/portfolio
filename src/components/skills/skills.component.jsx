import React from 'react';
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

import Grid from '@material-ui/core/Grid';

import './skills.styles.scss';

import TextSection from '../text-section/text-section.component';

const Skills = () => {
	return (
		<div className="skills">
			<div className="normal-text">My Stack</div>
			<Grid container spacing={2} justify="space-evenly" direction="row">
				<Grid item="xs">
					<div className="skill-container">
						<div className="skill-title">Javascript</div>
						<img src={javascriptLogo} alt="Javascript" height="80px" width="80px" />
					</div>
				</Grid>
				<Grid item="xs">
					<div className="skill-container">
						<div className="skill-title">MongoDB</div>
						<img src={mongoLogo} alt="React" height="80px" width="80px" />
					</div>
				</Grid>
			</Grid>
			<Grid container spacing={2} justify="space-evenly" direction="row">
				<Grid item="xs">
					<div className="skill-container">
						<div className="skill-title">React</div>
						<img src={reactLogo} alt="React" height="80px" width="80px" />
					</div>
				</Grid>
				<Grid item="xs">
					<div className="skill-container">
						<div className="skill-title">Firebase</div>
						<img src={firebaseLogo} alt="React" height="80px" width="80px" />
					</div>
				</Grid>
			</Grid>
			<Grid container spacing={2} justify="space-evenly" direction="row">
				<Grid item="xs">
					<div className="skill-container">
						<div className="skill-title">Redux</div>
						<img src={reduxLogo} alt="React" height="80px" width="80px" />
					</div>
				</Grid>
				<Grid item="xs">
					<div className="skill-container">
						<div className="skill-title">Scss</div>
						<img src={sassLogo} alt="React" height="80px" width="80px" />
					</div>
				</Grid>
			</Grid>

			<Grid container spacing={2} justify="space-evenly" direction="row">
				<Grid item="xs">
					<div className="skill-container">
						<div className="skill-title">NodeJs</div>
						<img src={nodejsLogo} alt="React" height="80px" width="80px" />
					</div>
				</Grid>
				<Grid item="xs">
					<div className="skill-container">
						<div className="skill-title">Webpack</div>
						<img src={webpackLogo} alt="React" height="80px" width="80px" />
					</div>
				</Grid>
			</Grid>
			<Grid container spacing={2} justify="space-evenly" direction="row">
				<Grid item="xs">
					<div className="skill-container">
						<div className="skill-title">HTML5</div>
						<img src={htmlLogo} alt="React" height="80px" width="80px" />
					</div>
				</Grid>
				<Grid item="xs">
					<div className="skill-container">
						<div className="skill-title">Git</div>
						<img src={gitLogo} alt="React" height="80px" width="80px" />
					</div>
				</Grid>
			</Grid>
			<Grid container spacing={2} justify="space-evenly" direction="row">
				<Grid item="xs">
					<div className="skill-container">
						<div className="skill-title">CSS3</div>
						<img src={cssLogo} alt="React" height="80px" width="80px" />
					</div>
				</Grid>
				<Grid item="xs">
					<div className="skill-container">
						<div className="skill-title">VS Code</div>
						<img src={visualLogo} alt="React" height="80px" width="80px" />
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Skills;
