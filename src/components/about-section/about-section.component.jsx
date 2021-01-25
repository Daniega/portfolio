import React from 'react';

import TextSection from '../text-section/text-section.component';

import './about-section.styles.scss';

const AboutSection = () => {
	return (
		<div className="about-section">
			<TextSection>Hello there</TextSection>
			<p className="about-text">
				My name is Daniel Gaishuber and i'm a ✅<span className="purple-text">Frontend</span> Engineer
			</p>
		</div>
	);
};

export default AboutSection;
