import React from 'react';

import './text-section.styles.scss';

const TextSection = ({ children, purple }) => {
	return (
		<div className={purple ? 'text-section-purple' : 'text-section'}>
			<span>{children}</span>
		</div>
	);
};

export default TextSection;
