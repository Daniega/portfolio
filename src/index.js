import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
   typography : {
      fontFamily : [ '"Lato"', 'sans-serif' ].join(',')
   }
});

ReactDOM.render(
   <ThemeProvider theme={theme}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </ThemeProvider>,
   document.getElementById('root')
);
