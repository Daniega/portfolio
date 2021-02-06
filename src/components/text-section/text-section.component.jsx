import React from 'react';

import './text-section.styles.scss';

const TextSection = ({ children, purple, white }) => {
   if (white) {
      return (
         <div className={white ? 'text-section-white' : 'text-section'}>
            <span>{children}</span>
         </div>
      );
   } else {
      return (
         <div className={purple ? 'text-section-purple' : 'text-section'}>
            <span>{children}</span>
         </div>
      );
   }
};

export default TextSection;
