import React from 'react';

//import social.js object
import { social } from './social';
//Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';
//constants
import { ANIMATION_DURATION } from '../../constants/animation';

import './social-links.styles.scss';

const SocialLinksSection = () => {
   return (
      <ScrollAnimation animateIn='pulse' duration={ANIMATION_DURATION} animateOnce={true} offset={50}>
         <div className='social-links-section'>
            <div className='social-text'>
               <span className='text'>Contact me on socials:</span>
            </div>
            <div className='social-icons'>
               {social.map(({ id, name, link, icon }) => (
                  <a key={id} href={link} target='_blank' rel='noopener noreferrer' aria-label={`follow me on ${name}`}>
                     <img width='40' src={icon} alt={name} className='icon' />
                  </a>
               ))}
            </div>
         </div>
      </ScrollAnimation>
   );
};

export default SocialLinksSection;
