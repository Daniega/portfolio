import React from 'react';

//import social.js object
import { social } from './social';

import './social-links.styles.scss';

const SocialLinksSection = () => {
   return (
      <div className='social-links-section'>
         <span className='social-text'>Follow or contact me on socials:</span>

         <div className='social-icons'>
            {social.map(({ id, name, link, icon }) => (
               <a key={id} href={link} target='_blank' rel='noopener noreferrer' aria-label={`follow me on ${name}`}>
                  <img width='40' src={icon} alt={name} className='icon' />
               </a>
            ))}
         </div>
      </div>
   );
};

export default SocialLinksSection;
