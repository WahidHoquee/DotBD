import React from 'react'

import { Box, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Social from './Social/Social';
import Contact from './Contact/Contact';
import Links from './Links/Links';
import Products from './Products/Products';

import logo from "../../images/logo-white.svg"

const useStyles = makeStyles(theme => ({
    root:{
        transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
        backgroundImage: 'linear-gradient(51deg, #1d165d 36%, #b70909 100%)'
    },
    logo: {
        height: "100px",
        width: "200px",
        marginBottom: "20px",
    },
}))
const Footer = () => {
    const classes = useStyles();
    return (
        <Box p={16} className={classes.root}>
            <Container fixed>
                <Grid container alignItems="flex-start" justify="center">
                    <Grid item container direction="column" sm={3}>
                        <Grid item>
                            <img src={logo} alt="logo" className={classes.logo} />
                        </Grid>
                        <Grid item>
                            <Social/>
                        </Grid>
                    </Grid>
                    <Grid item sm={3}>
                        <Contact/>
                    </Grid>
                    <Grid item sm={3}>
                        <Links/>
                    </Grid>
                    <Grid item sm={3}>
                        <Products/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer;