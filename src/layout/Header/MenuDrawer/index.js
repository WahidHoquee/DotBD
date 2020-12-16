import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { RiMenu3Line } from 'react-icons/ri'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';

import logo from "../../../images/logo-white.svg";
import logoDark from "../../../images/logo-color.svg";

import links from "../../../data/Menu";


const useStyles = makeStyles(theme => ({
  list: {
    width: '40rem',
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
  },

  fullList: {
    width: 'auto',
  },
  menuDrawer:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 8rem',
    [theme.breakpoints.down(350)]: {
      padding: '.5rem 2rem'
    },  

  },
  logo: {
    height: '15rem',
    width: '15rem',
  },
  icon: {
    fontSize: '5rem',
    fontWeight: 400,
    color: '#fff',
    cursor: 'pointer',
    zIndex: 1000000000000
  },
  linkIcon: {
    fontSize: '2.5rem !important',
    marginRight: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    '& span': {
      fontSize: '2rem !important'
    }
  },
  sublink: {
    '& span': {
      fontSize: '1.8rem !important'
    }
  }
}));

const MenuDrawer = () => {
  const classes = useStyles();
  
  //To handle the actual App Drawer
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  //To handle collapsible menu
  const [open, setOpen] = React.useState({
    Services: false,
    Products: false
  });

  const handleClick = (e) => {
    setOpen({...open, [e.target.innerText]: !open[e.target.innerText]})
  };

  return (
    <div className={classes.menuDrawer}>
      <img src={logo} alt="DOTBD" className={classes.logo}/>
      <IconButton onClick={toggleDrawer(true)} className={classes.icon}>
        <RiMenu3Line />
      </IconButton>
      <Drawer anchor={'left'} open={state} onClose={toggleDrawer(false)}>
        <div className={classes.list}>
          <List>
              <div style={{margin: '5rem auto -5rem', textAlign:'center'}}>
                <img src={logoDark} alt="Logo" className={classes.logo}/>
              </div>
          </List>
          <List>
            {links.map((link) => (
            <>
              <AniLink fade duration={5} to={link.path}>
                <ListItem onClick={handleClick} key={link.title}>
                  <div className={classes.linkIcon}>
                    {link.icon}
                  </div>
                  <ListItemText primary={link.title} className={classes.link}/>
                  {link.subMenu ? open[link.title] ? <BiUpArrow /> : <BiDownArrow /> : null}
                </ListItem>
              </AniLink>

              <Collapse in={open[link.title]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding className={classes.sublink} style={{marginLeft: '6rem'}}>
                  {link.subMenu && link.subMenu.map(menu => (
                    <AniLink fade duration={5} to={'/service' + menu.path}>
                      <ListItem key={menu.title} >
                        <ListItemText primary={menu.title} className={classes.sublink} />
                      </ListItem>
                    </AniLink>
                  ))}
                  </List>
              </Collapse>
              <Divider />
            </>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
export default MenuDrawer;