import React from 'react';

import './github-graph.styles.scss';

const GithubGraph = () => {
	return (
		<div className='github-graph-container'>
			<img
				src='http://ghchart.rshah.org/Daniega'
				alt="Daniega's Github chart"
				className='graph'
			/>
		</div>
	);
};

export default GithubGraph;
