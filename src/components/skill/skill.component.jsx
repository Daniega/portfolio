import React from 'react';

import './skill.styles.scss';

//Grid from Material UI
import Grid from '@material-ui/core/Grid';
//import Animations component
import ScrollAnimation from 'react-animate-on-scroll';

const Skill = ({ skillTitle, skillLogo }) => {
	return (
		<Grid item>
			<ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
				<div className="skill-container">
					<div className="skill-title">{skillTitle}</div>
					<img src={skillLogo} alt={skillTitle} height="80px" width="80px" />
				</div>
			</ScrollAnimation>
		</Grid>
	);
};

export default Skill;
