import React from 'react';
import './footer.styles.scss';

const Footer = () => {
	const getCurrentYear = new Date().getFullYear(); //dynamically updated current year
	return <p className="footer">All rights reserved, Daniel Gaishuber {getCurrentYear}</p>;
};

export default Footer;
