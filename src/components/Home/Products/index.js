import React from "react"
import { useMediaQuery, Container, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Product from "./Product";
import items from "../../../data/Products";
import Title from '../../Utils/Title'

const useStyles = makeStyles(theme => ({
    root: {
        padding: "10rem",
        background: "#fff",
        boxShadow: "2px 2px 30px 0 rgba(0,0,0,.05)",
        [theme.breakpoints.down('md')]: {
            padding: "10rem 5rem",
        },
        [theme.breakpoints.down('sm')]: {
           padding: "10rem 5rem",
        },
        [theme.breakpoints.down(750)]: {
            padding: "10rem 0rem",
        },
     }
}))

const Products = () => {
    const classes = useStyles();

    const md = useMediaQuery(theme => theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));

    return (
        <Box className={classes.root}>
            <Container fluid>
                <Title>Our Service</Title>
                <Grid container style={sm ? {padding: '0 4rem'} : null} spacing={md ? 2 : 5}>
                {items.map(({id,icon,title,description}) => (
                    <Grid item xs={xs ? 12 : sm ? 6 : 4}>
                        <Product key={title} id={id} icon={icon} title={title} description={description} />
                    </Grid>
                ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Products
