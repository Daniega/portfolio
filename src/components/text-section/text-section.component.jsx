import React from 'react';

import './text-section.styles.scss';

const TextSection = ({ children }) => {
	return (
		<div className="text-section">
			<text>{children}</text>
		</div>
	);
};

export default TextSection;
