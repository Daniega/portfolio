import React, { useState } from 'react';
//react-scroll
import { Link } from 'react-scroll';

//material NavBar
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
//Material Switch button
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//stylesheet
import './header.styles.scss';

const useStyles = makeStyles((theme) => ({
   root       : {
      flexGrow : 1
   },
   menuButton : {
      marginRight : theme.spacing(2),
      marginLeft  : theme.spacing(2)
   },
   title      : {
      flexGrow : 1
   }
}));

const Header = ({ darkSwitchPress, darkModeState }) => {
   const classes = useStyles();
   const [ anchorEl, setAnchorEl ] = useState(null);
   const open = Boolean(anchorEl);

   const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <div className={classes.root}>
         <AppBar
            position='fixed'
            style={{
               backgroundColor : '#7805f7',
               flexDirection   : 'row-reverse'
            }}
         >
            <Toolbar>
               <div>
                  <FormControlLabel
                     value='start'
                     control={<Switch color='primary' checked={darkModeState} />}
                     label='Dark'
                     labelPlacement='start'
                     onClick={darkSwitchPress}
                  />
                  <IconButton
                     edge='start'
                     className={classes.menuButton}
                     color='inherit'
                     aria-label='menu'
                     onClick={handleMenu}
                  >
                     <MenuIcon />
                  </IconButton>

                  <Menu
                     id='menu-appbar'
                     anchorEl={anchorEl}
                     anchorOrigin={{
                        vertical   : 'top',
                        horizontal : 'right'
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical   : 'top',
                        horizontal : 'right'
                     }}
                     open={open}
                     onClose={handleClose}
                  >
                     <MenuItem>
                        <Link
                           onClick={handleClose}
                           activeClass='active'
                           className='skills'
                           to='skills'
                           smooth={true}
                           duration={700}
                           offset={-20}
                        >
                           Skills
                        </Link>
                     </MenuItem>
                     <MenuItem>
                        <Link
                           onClick={handleClose}
                           activeClass='active'
                           className='projects'
                           to='projects'
                           smooth={true}
                           duration={700}
                        >
                           Projects
                        </Link>
                     </MenuItem>
                     <MenuItem>
                        <Link
                           onClick={handleClose}
                           activeClass='active'
                           className='about'
                           to='about'
                           smooth={true}
                           duration={700}
                        >
                           About
                        </Link>
                     </MenuItem>
                  </Menu>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
};

export default Header;
