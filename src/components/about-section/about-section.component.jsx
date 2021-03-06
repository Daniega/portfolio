import React from 'react';

//components
import TextSection from '../text-section/text-section.component';
//material UI imports
import Button from '@material-ui/core/Button';

//fontAwesomeIcons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import './about-section.styles.scss';

const AboutSection = () => {
   return (
      <div className='about-section' name='about'>
         <TextSection white={true}>Thank you for peeking at my portfolio</TextSection>
         <div className='flex-description'>
            <p className='about-text'>
               My name is Daniel Gaishuber and i'm a <span className='pink-text'>Software Engineer</span>.<br />I
               graduated and started my journey of becoming a <span className='green-text'>great </span>
               <span className='pink-text'>Web developer</span>! After many courses, trials and personal projects, I
               have built my <span className='green-text'>skills</span> to proficiency. I would be happy to{' '}
               <span className='pink-text'>develop & design</span> your future projects!
            </p>
            <div className='flex-button'>
               <a href='mailto:daniel.gaishuber@gmail.com' className='button-link'>
                  <Button
                     variant='contained'
                     size='large'
                     className='material-button'
                     // style={{
                     //    backgroundColor : 'white',
                     //    hover           : { '&:hover': { backgroundColor: 'rgb(7, 177, 77, 0.42)' } }
                     // }}
                  >
                     Contact Me
                  </Button>
               </a>

               <span className='credit-text'>
                  <FontAwesomeIcon icon={faCheckCircle} /> No Credit Card Required ;)
               </span>
            </div>
         </div>
      </div>
   );
};

export default AboutSection;
