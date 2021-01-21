import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root        : {
		minWidth   : 200,
		fontFamily : 'Lato,  sans-serif',
		margin     : '20px 20px'
	},

	bullet      : {
		display   : 'inline-block',
		margin    : '0 2px',
		transform : 'scale(0.8)'
	},

	card        : {
		padding : 0
	},
	name        : {
		color      : '#7805f7',
		fontWeight : '600',
		marginTop  : '20px'
	},
	pos         : {
		marginBottom : 12
	},

	description : {
		margin   : '10px 20px',
		fontSize : '18px'
	},

	list        : {
		textAlign  : 'left',
		lineHeight : '2em'
	},

	button      : {
		textAlign : 'center'
	}
});

const SimpleCard = ({ imageUrl, projectName, projectLink, children }) => {
	const classes = useStyles();
	const projectTechnologies = children; //get project description from props.children

	return (
		<Card className={classes.root}>
			<CardContent className={classes.card}>
				{/* <Typography className={classes.title} color="textSecondary" gutterBottom>
					Word of the Day
				</Typography> */}
				<Typography className={classes.name} variant="h5" component="h2">
					{projectName}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					Website
				</Typography>
				<img
					src={imageUrl}
					alt={projectName}
					style={{
						width        : '300px',
						maxWidth     : '100%',
						borderTop    : '2px solid #fb275d',
						borderBottom : '2px solid #fb275d'
					}}
				/>
				<Typography variant="body2" component="p" className={classes.description}>
					{projectTechnologies.map((technology, index) => {
						return (
							<li key={index} className={classes.list}>
								{technology}
							</li>
						);
					})}
				</Typography>
			</CardContent>
			{/* <CardActions className={classes.button}>
				<a href={projectLink} style={{ textDecoration: 'none', margin: '10px 35%', display: 'inline-block' }}>
					<Button size="small" variant="contained" color="secondary" disableElevation={true}>
						Let's See
					</Button>
				</a>
			</CardActions> */}
		</Card>
	);
};

export default SimpleCard;
