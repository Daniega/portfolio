import React from 'react';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//style sheet
import './project-card.styles.scss';

const useStyles = makeStyles({
	root        : {
		minWidth   : 200,
		fontFamily : 'Lato,  sans-serif',
		margin     : '20px 20px',
		position   : 'relative'
	},

	card        : {
		padding : 0
	},

	pos         : {
		marginBottom : 12
	},

	description : {
		margin    : '10px 20px',
		textAlign : 'left'
	},

	list        : {
		textAlign  : 'left',
		lineHeight : '2em'
	}
});

const ProjectCard = ({ imageUrl, projectName, projectLink, children }) => {
	const classes = useStyles();
	const projectTechnologies = children; //get project description from props.children

	return (
		<Card className={`${classes.root} main-component`}>
			<CardContent className={classes.card}>
				<Typography className="primary-name" variant="h5" component="h2">
					{projectName}
				</Typography>
				<Typography className={classes.pos} variant="body2" color="textSecondary">
					Website
				</Typography>
				<div className="image-container">
					<img className="project-image" src={imageUrl} alt={projectName} />
					<a href={projectLink} className="image-link">
						Show me
					</a>
				</div>

				<Typography variant="body2" component="p" className={classes.description}>
					{/* iterate through projectTechnologies (random size array) */}
					{projectTechnologies.map((technology, index) => {
						return (
							<li key={index} className="technology">
								{technology}
							</li>
						);
					})}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
