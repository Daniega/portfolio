import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import fiveStars from '../../assets/fivestars.png';

//constants
import { ANIMATION_DURATION } from '../../constants/animation';
//pic
import myPic from '../../assets/mypic.jpg';

import './intro-section.styles.scss';

const IntroSection = () => {
   return (
      <ScrollAnimation animateIn='fadeIn' duration={ANIMATION_DURATION} animateOnce={true}>
         <div className='intro-section'>
            <img src={myPic} alt='profile' />
            <div className='hello-text'>Hello.</div>
            <span>I'm Daniel, a </span>
            <span className='bold-purple'>Web Developer</span>
            <div className='five-stars'>
               <img src={fiveStars} alt='Stars' />
            </div>
         </div>
      </ScrollAnimation>
   );
};

export default IntroSection;
