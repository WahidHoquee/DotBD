import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { makeStyles } from '@material-ui/styles';
import { Container } from "@material-ui/core";

import links from "../../../data/Menu";
import logo from "../../../images/logo-white.svg"
import Megamenu from "./Megamenu";


const Menubar = () => {
    const classes = useStyles();
    return (
        <div className={classes.menubar}>
            <Container fluid className={classes.wrapper}>
                <img src={logo} alt="DOTBD" className={classes.logo}/>
                <ul className={classes.lists}>
                    {links.map(({path, title, subMenu, megaMenu}) => (
                    <li 
                        key={title}
                        className={`${classes.list} ${subMenu && classes.subMenuWrapper} ${megaMenu && classes.megaMenuWrapper}`} 
                        style={subMenu && {position: 'relative'}}
                    >
                    {
                        (subMenu || megaMenu) ? <span className={classes.link}>{title}</span> : (
                            <AniLink fade duration={2} to={path} className={classes.link}>
                                {title}
                            </AniLink>
                    )}
                    {subMenu && 
                        <ul className={classes.sublists}>
                            {subMenu.map(({path, title}) => 
                                <li className={classes.sublist} key={title}>
                                    <AniLink fade duration={5} to={window.location.origin + '/service' + path} className={classes.sublink}>
                                        {title}
                                    </AniLink>
                                </li>
                            )}
                        </ul>
                    }
                    {megaMenu && <Megamenu style={classes.megaMenu} linkStyle={classes.sublink} data={megaMenu}/>}
                    </li>
                    ))}
                </ul>
            </Container>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    menubar:{
      position: 'absolute',
      top: 0,
      left: 0,
      transition: 'all .2s linear',
      width: '100%',
      zIndex: 20,
      [theme.breakpoints.down('md')]: {
        padding: '.5rem 2rem'
      },  
    },
    wrapper:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    logo:{
        height: '6rem',
        width: '12rem',
        margin: '4rem 2rem 3rem',
    },
    lists:{
        display: 'flex',
    },
    list: {
        margin: '0 2rem',
        padding: '5rem 0 3rem',
    },
    subMenuWrapper:{
        '&:hover $sublists':{
            opacity: 1,
            transform: 'translateY(0rem)',
            visibility: 'visible',
        }
    },
    megaMenuWrapper:{
        '&:hover $megaMenu':{
            opacity: 1,
            transform: 'translateY(0rem)',
            visibility: 'visible',
        }
    },
    link:{
        textTransform: 'capitalize',
        color: '#fff',
        fontSize: '1.6rem',
        position: 'relative',
        fontFamily: '"Poppins", sans-serif',
        transition: 'color .2s linear',
        cursor: 'pointer',
        '&::before':{
            content: '""',
            width: 0,
            height: 1,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 0,
            left: 'auto',
            right: 0,
            transition: 'all .2s linear',
        },
        '&:hover':{
            color: '#ffd849',
            '&::before':{
                width: '100%',
                left: 0,
                right: 'auto',
            }
        },
    },
    megaMenu:{
        minWidth: '20rem',
        transform: 'translateY(2rem)',
        transition: 'all .3s ease-in',
        opacity: 0,
        visibility: 'hidden',
        display: 'block',
        position: 'absolute',
        left: 0,
        right: 0,
        top: '100%',
        backgroundColor: '#fff',
        boxShadow: '-1px 2px 19px 3px rgba(14,0,40,.05)',
    },
    sublists:{
        position: 'absolute',
        left: '-11rem',
        top: '100%',
        zIndex: 1000,
        color: '#212529',
        backgroundColor: '#fff',
        boxShadow: '-1px 2px 19px 3px rgba(14,0,40,.05)',
        minWidth: '30rem',
        transform: 'translateY(2rem)',
        transition: 'all .3s ease-in',
        opacity: 0,
        visibility: 'hidden',
        display: 'block'
    },
    sublist: {
        padding: '0 3rem',
        width: '100%',
        position: 'relative',
        marginRight: 0,
        display: 'block',
        backgroundColor: '#fff',
        '&:first-child':{
            paddingTop: '1.6rem'
        },
        '&:last-child':{
            paddingBottom: '.5rem',
            marginBottom: '-.8rem'
        }
    },
    sublink:{
        textTransform: 'capitalize',
        lineHeight: '3.6rem',
        color: '#051441',
        fontSize: '1.4rem',
        position: 'relative',
        fontFamily: '"Poppins", sans-serif',
        transition: 'color .2s linear',
        '&:hover':{
            color: 'rgb(132,53,142)',
        }
    }

}))

export default Menubar
