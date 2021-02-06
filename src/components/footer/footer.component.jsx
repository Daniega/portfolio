import React from 'react';
import './footer.styles.scss';

const Footer = ({ darkModeState }) => {
   const getCurrentYear = new Date().getFullYear(); //dynamically updated current year
   return (
      <p className={`footer ${darkModeState() ? 'dark-footer' : null}`}>
         All rights reserved, Daniel Gaishuber {getCurrentYear}
      </p>
   );
};

export default Footer;
