import React from 'react'

import { Box, Grid, Container, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Social from './Social/Social';
import Contact from './Contact/Contact';
import Links from './Links/Links';
import Products from './Products/Products';

import logo from "../../images/logo-white.svg"

const useStyles = makeStyles(theme => ({
    root:{
        transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
        backgroundImage: 'linear-gradient(51deg, #1d165d 36%, #b70909 100%)',
        padding: '10rem',
        [theme.breakpoints.down('md')]: {
            padding: '10rem 1rem 6rem',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10rem 5rem 8rem',
        },
        [theme.breakpoints.down(820)]: {
            padding: '10rem 0rem 8rem',
        },
        [theme.breakpoints.down(750)]: {
            padding: '10rem 5rem 8rem',
        },
    },
    wrapper: {
        [theme.breakpoints.down(500)]: {
            display: 'block !important',
            '& > *':{
                margin: 'auto'
            }
        },
    },
    logo: {
        height: "10rem",
        width: "20rem",
        marginBottom: "2rem",
    },
    products: {
        [theme.breakpoints.down('sm')]: {
            transform: 'translateX(-110px)'
        },
        [theme.breakpoints.down(735)]: {
            transform: 'translateX(-75px)'
        },
        [theme.breakpoints.down(675)]: {
            transform: 'translateX(-50px)'
        },
        [theme.breakpoints.down(500)]: {
            margin: '5rem 0',
            transform: 'translateX(0px)'
        },
    }
}))
const Footer = ({ sm, xs }) => {
    const classes = useStyles();
    const s500 = useMediaQuery(theme => theme.breakpoints.down(500));

    return (
        <Box className={classes.root}>
            <Container fluid>
                <Grid container alignItems="flex-start" justify="center">
                    <Grid item container direction="column" alignItems="center" xs={xs ? 12 : sm ? 6 : 3}>
                        <Grid item>
                            <img src={logo} alt="logo" className={classes.logo} />
                        </Grid>
                        <Grid item>
                            <Social/>
                        </Grid>
                    </Grid>
                    <Grid item xs={xs ? 12 : sm ? 6 : 3} style={{margin: xs && '5rem 0 5rem' || sm && '0 0 5rem'}}>
                        <Contact/>
                    </Grid>
                    {/* {sm && <Grid item><Divider/></Grid>} */}
                    <Grid item xs={s500 ? 12 : sm ? 6 : 3}>
                        <Links s500={s500}/>
                    </Grid>
                    <Grid item xs={s500 ? 12 : sm ? 6 : 3} className={classes.products}>
                        <Products s500={s500}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer;